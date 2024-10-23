<template>
	<view>
		<view class="colonn">
			<image @load="imgload($event,1)" src="../../static/datitop.jpg" mode="widthFix" class="w-750"></image>
			<view class="colonn w-750 cenbterbg  center_center"
			:style="{
				'height':(screenHeightPx-img1-img2)+'rpx'
			}"
			>
				<view class="h-0"></view>
				<view class="roww center_center duiqi h-100">
					<view class="fs-40 fw-700 h-100" style="line-height: 100rpx;">选手列表</view>
				</view>
				<view class="h-30"></view>
				<scroll-view
				scroll-y
				:style="{
					'height':(screenHeightPx-img1-img2-200)+'rpx'
				}"
				>
					<view class="colonn p-all-30" >
						
						<block v-for="(item,index) in userList">
							<block v-if="usertype==2">
								<view class="roww rowsa fw-700 p-bottom-40" style="color: #cccccc;"
								v-if="item.is_score==1"
								@click.stop="markClick(1,item)"
								>
									<view class="w-100 cebtees">{{index+1}}.</view>
									<view class="w-208 cebtees">{{item.username}}</view>
									<view class="w-208 cebtees" v-if="item.is_score==1">修改</view>
								</view>
								<view class="roww rowsa fw-700 p-bottom-40"  v-else
								@click.stop="markClick(1,item)"
								>
									<view class="w-100 cebtees">{{index+1}}.</view>
									<view class="w-208 cebtees">{{item.username}}</view>
									<view class="w-208 cebtees" >未打分</view>
								</view>
							</block>
							<block v-else>
								<view class="roww rowsa fw-700 p-bottom-40" 
								>
									<view class="w-100 cebtees">{{index+1}}.</view>
									<view class="w-208 cebtees">{{item.username}}</view>
									<view class="w-208 cebtees" 
									@click.stop="markClick(2,item)"
									>查看</view>
								</view>
							</block>
							
						</block>
						
						
						
						
						<!-- <block v-for="(item,index) in 40 ">
							<view class="roww rowsa p-bottom-40">
								<view>{{index+2}}.</view>
								<view>张先生</view>
								<view>99.00分</view>
								<view class="fw-700" style="color:green;"
								 >已完成</view>
							</view>
						</block> -->
						
					</view>
				</scroll-view>
			</view>
			<image  @load="imgload($event,2)"  
			src="../../static/datibottom.jpg" mode="widthFix" class="w-750"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				'screenHeightPx':0,
				img1:0,
				img2:0,
				startTime:0,//开始的时间戳
				nowTime:0,
				miaoshu:30,//倒计时
				tiIndex:1,
				
				userList:[],//用户列表
			
			}
		},
		onLoad() {
			// 获取当前界面的宽高
			const systemInfo = uni.getSystemInfoSync();
			const screenWidth = systemInfo.screenWidth;
			const screenHeight = systemInfo.screenHeight;
			console.log("屏幕的原始高",)
			const bili=750/screenWidth;
			const screenHeightPx=bili*screenHeight;  
			this.screenHeightPx=screenHeightPx;
			console.log(bili,screenWidth,screenHeight,screenHeightPx);
			
		},
		onShow() {
			
			var usertype=uni.getStorageSync("usertype")
			this.usertype=parseInt(usertype)
			this.getuserList();
			
		},
		methods: {
			// 判断是否可以评分
			markClick(type,item){
				if(type==1){
					var readType=uni.getStorageSync("readType"); 
					uni.setStorageSync("dafenUser",item);
					if(readType==1){
						uni.navigateTo({
							url:"/pages/xycz1/xycz1"
						})
					}else{
						uni.navigateTo({
							url:"/pages/xycz/xycz"
						})
					}
					
				}else{
					uni.setStorageSync("dafenUser",item);
					uni.navigateTo({
						url:"/pages/fenshus/fenshus"
					})
				}
			},
			
			// 获取用户列表
			getuserList(){
				var data={
					'uuid':uni.getStorageSync("userId")
				}
				var readType=parseInt(uni.getStorageSync("readType"));
				if(readType==2){
					var url=this.$paths.Api20241024getUserList;
				}else if(readType==1){
					var url=this.$paths.Api20241024getUserList2;
				}
				console.log("---",readType,url);
				this.$axios
					.axios('POST', url,data)
					.then(res => {
						if(res.code==1){
							this.userList=res.data;
						}else{
							this.$tools.showToast(res.info)
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			toInfo(type){
				if(type==1){
					var readType=uni.getStorageSync("readType");
					if(readType==1){
						uni.navigateTo({
							url:"/pages/comment/comment"
						})
					}else{
						uni.navigateTo({
							url:"/pages/xycz/xycz"
						})
					}
				}else if(type==2){
					
					uni.navigateTo({
						url:"/pages/readSubject/readSubject"
					})
				}
				
			},
			// 图片加载完成
			imgload(res,index){
				console.log("阿萨德",res,index)
				if(index==1){
					this.img1=res.detail.height/2;
				}
				if(index==2){
					this.img2=res.detail.height/2;
				}
				if(this.img1>0&&this.img2>0){
					console.log("默认高",this.screenHeightPx)
					console.log("img1",this.img1)
					console.log("img2",this.img2)
				}
			}
		}
	}
</script>

<style>
	@import url(userList.css);
</style>
