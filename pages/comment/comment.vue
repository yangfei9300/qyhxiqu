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
							<view class="fs-40 fw-800">批阅中</view>
						</view>
						<block v-for="(item,index) in timuList">
							<view class="h-50"></view>
							<view class="colonn w-690">
								<!-- {{tiIndex}} -->
								<view>第 {{index+1}}题.{{item.name}}(
									{{item.type==1?'中等题':'困难题'}}
									)
								</view>
							</view>
							<view class="h-20"></view>
							<!-- <image :src="item.cover" class="w-690" mode="widthFix"></image> -->
							<!-- <view class="h-60"></view> -->
							<view>
								<text class="fw-800">作答内容：</text>
								{{item.answer}}
							</view>
							<view class="h-40"></view>
							<view>
								<input type="number" class="textawa" v-model="item.fen" random-number
									@input="checkPrice($event,index)" placeholder="请打分(分数请输入整数)"></input>
							</view>
							<view class="h-20"></view>
							<view class="roww">
								<view style="color: red;" v-if="!item.isSubmit">本道题打最高分为{{item.score}}分</view>
							</view>
							<view class="h-40"></view>
						</block>
						<!-- @click.stop="nextQuestion" -->
						<view class="btns1" @click.stop="subFenshu">提交</view>
					</view>
				</scroll-view>
			</view>
			<image @load="imgload($event,2)" src="../../static/datibottom.jpg" mode="widthFix" class="w-750"></image>
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
				formattedNumber: '',

				dafenUser: {}, //被打分的人信息
				timuList: [

				]
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


			var dafenUser = uni.getStorageSync("dafenUser");
			this.dafenUser = dafenUser;
			this.getTestDatiInfo();

		},
		methods: {

			checkPrice(e, index) {
				var value = e.detail.value;
				if (value != "") {
					value = parseFloat(value);
					if (value > this.timuList[index].score) {
						this.timuList[index].isSubmit = false;
						this.$tools.showToast("这道题最高打" + this.timuList[index].score + "分");
					}
				}
			},

			// 提交答题的分数
			subFenshu() {

				var timuList = this.timuList;
				var istijiao = 0;
				for (var a = 0; a < timuList.length; a++) {
					if (timuList[a].fen == '' || timuList[a].fen > timuList[a].score) {
						istijiao = istijiao + 1;
					}
				}
				if (istijiao > 0) {
					this.$tools.showToast("有" + istijiao + "道题打分分数不规范");
					return false;
				}

				var timuList = this.timuList;
				var isCan = true;
				var allfen = 0;
				var fenStr = [];
				for (var a = 0; a < timuList.length; a++) {
					if (timuList[a].fen == "") {
						isCan = false;
					} else {
						timuList[a].fen = parseInt(timuList[a].fen);
						fenStr.push(timuList[a].fen);
						allfen = allfen + parseInt(timuList[a].fen);
					}
				}
				if (!isCan) {
					this.$tools.showToast("有问题未打分，提交失败");
					return false;
				}
				var data = {
					'test_id': this.dafenUser.test_id,
					'uuid': uni.getStorageSync("userId"),
					'score_str': fenStr.join(","),
					'score': allfen,
				}
				console.log("提交的参数",data);
				this.$axios
					.axios('POST', this.$paths.markTest, data)
					.then(res => {
						if (res.code == 1) {
							console.log("阿斯顿", res);
							this.$tools.showToast("提交成功");
							setTimeout(res => {
								uni.navigateBack({
									delta: 1
								})
							}, 1000)
						} else {
							this.$tools.showToast(res.info)
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			// 获取答题的列表
			getTestDatiInfo() {
				var data = {
					'uuid': uni.getStorageSync("userId"),
					test_id: this.dafenUser.test_id
				}
				this.$axios
					.axios('POST', this.$paths.getTestInfo, data)
					.then(res => {
						if (res.code == 1) {
							console.log("阿斯顿", res);
							var timuList = res.data;
							for (var a = 0; a < timuList.length; a++) {
								timuList[a].fen = "";
								timuList[a].isSubmit = true;
							}
							this.timuList = timuList;
						} else {
							this.$tools.showToast(res.info)
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},




			// 下一题点击事件
			nextQuestion() {
				if (this.tiIndex == 10) {
					this.tiIndex = 11
					this.$tools.showToast("打分完成");
					setTimeout(res => {
						uni.redirectTo({
							url: "/pages/userList/userList"
						})
					}, 1000)
					return false;
				} else if (this.tiIndex < 10) {
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
	@import url(comment.css);
</style>