<template>
	<view>
		<view class="colonn">
			<image @load="imgload($event,1)" src="../../static/datitop.jpg" mode="widthFix" class="w-750"></image>
			<view class="colonn w-750 cenbterbg  center_center"
			:style="{
				'height':(screenHeightPx-img1-img2)+'rpx'
			}"
			>
				<view class="colonn">
					<view class="type1 roww" @click.stop="toRead(1)">
						<view class="w-20"></view>
						<view>专业方向1</view>
						<view class="allline"></view>
						<view style="color: red;">去评分</view>
						<view class="w-20"></view>
					</view>
					<view class="h-100"></view>
					<view class="type1 roww" @click.stop="toRead(1)">
						<view class="w-20"></view>
						<view>专业方向2</view>
						<view class="allline"></view>
						<view style="color: red;">去评分</view>
						<view class="w-20"></view>
					</view>
					<view class="h-100"></view>
					<view class="type1 roww" @click.stop="toRead(1)">
						<view class="w-20"></view>
						<view>专业方向3</view>
						<view class="allline"></view>
						<view style="color: red;">去评分</view>
						<view class="w-20"></view>
					</view>
					<view class="h-100"></view>
					<view class="type1 roww">
						<!--  @click.stop="toRead(1)" -->
						<view class="w-20"></view>
						<view>专业方向4</view>
						<view class="allline"></view>
						<view style="color: green;">99分</view>
						<view class="w-20"></view>
					</view>
				</view>
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
		methods: {
			getFangxaing(){
				
				var data={
					'uuid':uni.getStorageSync("userId")
				}
				this.$axios
					.axios('POST', this.$paths.getTestStatus,data)
					.then(res => {
						if(res.code==1){
							
						}else{
							this.$tools.showToast(res.info)
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			toRead(type){
				uni.navigateTo({
					url:"/pages/xycz/xycz"
				})
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
	@import url(selFangxiang.css);
</style>
