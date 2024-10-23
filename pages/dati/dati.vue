<template>
	<view>
		<view class="colonn">
			<image @load="imgload($event,1)" src="../../static/datitop.jpg" mode="widthFix" class="w-750"></image>
			<view class="colonn w-750 cenbterbg  center_center"
			:style="{
				'height':(screenHeightPx-img1-img2)+'rpx'
			}"
			>
				<scroll-view
				scroll-y
				:style="{
					'height':(screenHeightPx-img1-img2)+'rpx'
				}"
				>
					<view class="colonn p-all-30" v-if="tiList.length>0">
						<view class="h-20"></view>
						<view class="roww rowsb duiqi">
							<view class="yincang1">倒计时{{miaoshu}}秒</view>
							<view class="fs-40">考生请作答</view>
							<view class="yincang1" style="color: red;">倒计时{{miaoshu}}秒</view>
						</view>
						<view class="h-20"></view>
						<view class="colonn w-690">
							<view>   第{{tiIndex+1}}题      .{{tiList[tiIndex].name}}(
							{{tiList[tiIndex].type==1?'中等题':'困难题'}}
							{{tiList[tiIndex].score}}分
							)</view>
						</view>
						<view class="h-20"></view>  
						<!-- <image 
						:src="tiList[tiIndex].cover"
						class="w-690" mode="widthFix"
						></image>
						<view class="h-20"></view> -->
						<view>
							<textarea 
							maxlength="100000"
							class="textawa" 
							auto-height 
							placeholder="请作答" 
							v-model="daan"
							></textarea>
						</view>
						<view class="h-40"></view>
						<view class="btns1" @click.stop="submitTo">下一题</view>
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
				tiIndex:0,
				
				tiList:[],//题目列表
				
				dingshiqi:null,//定时器
				
				allTiCount:0,
				daan:'',//答案
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
			// 获取当前的时间戳
			const timestamp = Math.floor(Date.now()/1000);
			this.startTime=timestamp;
			// this.dingshiqi=setInterval(res=>{
			// 	var nowTime=Math.floor(Date.now()/1000);
			// 	if(nowTime-this.startTime>=30){
			// 		if(this.tiIndex==(this.tiList.length-1)){
			// 			uni.redirectTo({
			// 				url:"/pages/result/result"
			// 			})
			// 			return false;
			// 		}
			// 		this.miaoshu=30;
			// 		this.tiIndex=this.tiIndex+1;
			// 		var  timestamp = Math.floor(Date.now()/1000);
			// 		this.startTime=timestamp;
			// 	}else{
			// 		this.nowTime=nowTime;
			// 		this.miaoshu=30-(nowTime-this.startTime);
			// 	}
			// 	console.log("计时器")
			// },1000)
			this.getAllTi();
		},
		// onUnload() {
		// 	clearTimeout(this.dingshiqi); 
		// },
		methods: {
			
			submitTo(){
				var data={
					'answer':this.daan,
					'uuid':uni.getStorageSync("userId")
				}
				this.$axios
					.axios('POST', this.$paths.apiputAnswer,data)
					.then(res => {
						if(res.code==1){
							console.log("提交成功");
							this.nextQuestion();
							this.daan="";
						}else{
							this.$tools.showToast(res.info)
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			// 下道题
			nextQuestion(){
				if(this.tiIndex==(this.tiList.length-1)){
					uni.redirectTo({
						url:"/pages/result/result"
					})
					return false;
				}
				this.miaoshu=30;
				this.tiIndex=this.tiIndex+1;
				var  timestamp = Math.floor(Date.now()/1000);
				this.startTime=timestamp;
			},
			// 获取所有的题目
			getAllTi(){
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
					.axios('POST', this.$paths.getQuestion,data)
					.then(res => {
						if(res.code==1){
							this.tiList=res.data.test;
							this.tiIndex=res.data.a_answer
							if(this.tiIndex>=(this.tiList.length-1)){
								uni.redirectTo({ 
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
	@import url(dati.css);
	
</style>
