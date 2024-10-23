<template>
	<view>
		<view class="colonn">
			<image @load="imgload($event,1)" src="../../static/datitop.jpg" mode="widthFix" class="w-750"></image>
			<view class="colonn w-750 cenbterbg  center_center" :style="{
				'height':(screenHeightPx-img1-img2)+'rpx'
			}">
				<scroll-view scroll-y :style="{
					'height':(screenHeightPx-img1-img2)+'rpx'
				}">
					<view class="colonn p-all-30">
						<view class="h-50"></view>
						<view class="roww center_center duiqi">
							<view class="fs-40 fw-800">查看中</view>
						</view>
						<view class="h-50"></view>
						<view class="colonn w-690">
							<view>{{tiIndex}}.极大规模集成电路间李春雷虽上的佛龛歌城是极大规模集成电路间李春雷虽上的佛龛歌城是极大规模集成电路间李春雷虽上的佛龛歌城是(简单题)</view>
						</view>
						<view class="h-20"></view>
						<image src="../../static/banner1.jpg" 
						class="w-690" mode="widthFix"></image>
						<view class="h-60"></view>
						<view>
							<text class="fw-800">作答内容：</text>
							收到了发咯水电费记录卡师大暨大是落实贷款封建时代联防联控水电费收到了副科级第三方离开
							收到了发咯水电费记录卡师大暨大是落实贷款封建时代联防联控水电费收到了副科级第三方离开
						</view>
						<view class="h-40"></view>
						<view class="roww duiqi">
							<text>分值：</text>
							<text class="fs-40 fenzhis" style="color: red;">8.1分</text>
						</view>
						<view class="h-40"></view>
						<view class="btns1"
						 @click.stop="nextQuestion">下一题</view>
					</view>
				</scroll-view>
			</view>
			<image @load="imgload($event,2)" 
			src="../../static/datibottom.jpg" mode="widthFix" class="w-750"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				'screenHeightPx': 0,
				img1: 0,
				img2: 0,
				startTime: 0, //开始的时间戳
				nowTime: 0,
				miaoshu: 30, //倒计时
				tiIndex: 1,

				numberInput: '',
				formattedNumber: ''
			}
		},
		onLoad() {
			// 获取当前界面的宽高
			const systemInfo = uni.getSystemInfoSync();
			const screenWidth = systemInfo.screenWidth;
			const screenHeight = systemInfo.screenHeight;
			console.log("屏幕的原始高", )
			const bili = 750 / screenWidth;
			const screenHeightPx = bili * screenHeight;
			this.screenHeightPx = screenHeightPx;
		},
		methods: {

			checkPrice(e) {
				var value=e.detail.value;
				this.$nextTick(()=> {
					//'有小数点时，最大长度为7位，没有则是5位'
					this.numberInput = value
				})
			},

			// 下一题点击事件
			nextQuestion() {
				if (this.tiIndex == 10) {
					this.tiIndex = 11
					this.$tools.showToast("打分完成");
					setTimeout(res=>{
						uni.redirectTo({
							url: "/pages/userList/userList"
						})   
					},1000)
					return false;
				}else if (this.tiIndex<10) {
					this.tiIndex = this.tiIndex + 1;
				}
				
			},
			// 图片加载完成
			imgload(res, index) {
				if (index == 1) {
					this.img1 = res.detail.height / 2;
				}
				if (index == 2) {
					this.img2 = res.detail.height / 2;
				}
				if (this.img1 > 0 && this.img2 > 0) {
					console.log("默认高", this.screenHeightPx)
					console.log("img1", this.img1)
					console.log("img2", this.img2)
				}
			}
		}
	}
</script>

<style>
	@import url(readSubject.css);
</style>