<script>
	export default {
		onLoad() {
		},
		onLaunch: function() {
			uni.setStorageSync("meetingId",1);
		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide');
		}
	}
</script>    

<style  lang="scss">
	/*每个页面公共css */
	@import url("/style/style.css");
	@import url("/style/style_rpx.css");
	@import "/style/ty_style_scss.scss";
	
	.leftinputTxt {
		font-size: 40rpx;
	}
	.inputPlassStyle {
		font-size: 40rpx;
	}
	.inputTypeTitle {
		font-size: 40rpx;
	}
	.pickerSeltxt {
		font-size: 40rpx;
	}
	.xianluTitle {
		font-size: 40rpx;
	}
	.xianluSpec {
		font-size: 35rpx;
	}
	.jiudianTitle {
		font-size: 40rpx;
	}
	.jiudiandizhi {
		font-size: 35rpx;
	}
	.jiudianlianxiren {
		font-size: 35rpx;
	}
	.dianhuicon {
		width: 30rpx;
		height: 30rpx;
	}
	.phonetxt {
		font-size: 40rpx;
	}
	/*每个页面公共css */
	.container {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
	}
	.container-wrap {
		width: 100%;
		height: 100%;
	}
</style>
