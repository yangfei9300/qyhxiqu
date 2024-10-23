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
					<view class="fs-40 fw-700 h-100" style="line-height: 100rpx;">得分记录</view>
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
							<view class="roww rowsa fw-700 p-bottom-40" style="color: #000000;"  
							>
								<view class="w-100 cebtees">{{index+1}}.</view>
								<view class="w-208 cebtees">{{item.username}}</view>
								<view class="w-208 cebtees" >{{item.score}}</view>
							</view>
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
			this.getuserList();
		},
		methods: {
			// 判断是否可以评分
			markClick(type,item){
				
				
				uni.setStorageSync("dafenUser",item);
				
				uni.navigateTo({
					url:"/pages/xycz/xycz"
				})
				 
				// console.log("打分",item);
				// var data={
				// 	'uuid':uni.getStorageSync("userId"),
				// 	'test_id':item.test_id
				// }
				// this.$axios
				// 	.axios('POST', this.$paths.markClick,data)
				// 	.then(res => {
				// 		if(res.code==1){
				// 			console.log("可以打分",res);
							
				// 			uni.setStorageSync("dafenUser",item);
							
				// 			uni.navigateTo({
				// 				url:"/pages/comment/comment"
				// 			})
				// 		}else{
				// 			this.$tools.showToast(res.info)
				// 		}
				// 	})
				// 	.catch(err => {
				// 		console.log('错误回调', err);
				// 	});
			},
			
			// 获取用户列表
			getuserList(){
				var data={
					'user_id':uni.getStorageSync("dafenUser").user_id
				}
				var readType=parseInt(uni.getStorageSync("readType"));
				if(readType==2){
					var url=this.$paths.Api20241024getUserLScoreList;
				}else if(readType==1){
					var url=this.$paths.Api20241024getUserLScoreList2;
				}
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
	@import url(fenshus.css);
</style>
