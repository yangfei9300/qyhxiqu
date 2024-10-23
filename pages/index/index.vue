<template>
	<view>
		<view class="colonn">
			<image @load="imgload($event,1)" src="../../static/logintop.jpg" mode="widthFix" class="w-750"></image>
			<view class="colonn w-750 cenbterbg  center_center"
			:style="{
				'height':(screenHeightPx-img1-img2)+'rpx'
			}"
			>
				<view class="colonn">
					<view class="roww inputview">
						<view>姓名</view>
						<view class="w-20"></view>
						<input v-model="username" placeholder="请输入姓名" />
					</view>
					<view class="h-40"></view>
					<view class="btns" @click.stop="toLoginApi">登录</view>
				</view>
			</view>
			<image  @load="imgload($event,2)"  src="../../static/loginbottom.jpg" mode="widthFix" class="w-750"></image>
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
				
				identity:1,//1普通答题者,2打分专家3.专家（不打分）
				
				username:'',//
			}
		},
		onLoad() {
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
			// 如果是答题用户，判断是否答完题
			getTestStatus(){
				var userId=uni.getStorageSync("userId")
				if(!userId){
					this.$tools.showToast("用户信息不存在,请先登录");
					setTimeout(res=>{
						uni.reLaunch({
							url:"/pages/index/index"
						})
					},1000)
					return false;
				}
				var data={
					'uuid':uni.getStorageSync("userId")
				}
				this.$axios
					.axios('POST', this.$paths.getTestStatus,data)
					.then(res => {
						if(res.code==1){
							
							if(res.data==0){
								uni.navigateTo({
									url:"/pages/dati/dati"
								})
							}else{
								uni.navigateTo({
									url:"/pages/result/result"
								})
							}
							
						}else{
							this.$tools.showToast(res.info)
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			// 去登陆
			toLoginApi(){
				
				if(this.username==""){
					this.$tools.showToast("请输入姓名");
					return false;
				}
				
				var data={
					'username':this.username
				}
				
				this.$axios
					.axios('POST', this.$paths.Api20241024login,data)
					.then(res => {
						if(res.code==1){
							console.log("a",res)
							uni.setStorageSync("username",this.username)
							uni.setStorageSync("userId",res.data.id);
							uni.setStorageSync("usertype",res.data.type);
							this.identity=res.data.type;
							this.toLogin();
						}else{
							this.$tools.showToast(res.info)
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			
			toLogin(){
				// if(this.identity==1){
				// 	this.getTestStatus();
				// }else 
				if(this.identity==2){
					uni.navigateTo({
						url:"/pages/selType/selType"
					})
				}else if(this.identity==3){
					uni.navigateTo({
						url:"/pages/selType1/selType1"
					})
				}
			},
			
			identityClick(index){
				this.identity=index;
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
	@import url(index.css);
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
