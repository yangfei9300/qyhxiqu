//封装请求文件
export default{
	axios(method,url,data){
		uni.showLoading({
			'title':'加载中'
		})
		return new Promise((resolve,reject)=>{
			uni.request({
				url: url,
				method:method,
				data:data,
				header:{
					'Content-Type':'application/json;charset=utf-8'
				},
				success:(res)=>{
						resolve(res.data)
				},
				fail:(err)=>{
					reject(err)
				},
				complete() {
					wx.hideLoading()
				}
			})
		})
	},
	axiosDate(method,url,data){
		uni.showLoading({
			'title':'加载中'
		})
		return new Promise((resolve,reject)=>{
			uni.request({
				url: url,
				method:method,
				data:data,
				header:{
					'Content-Type':'application/json;charset=utf-8',
					'auth':uni.getStorageSync("DataHt")
				},
				success:(res)=>{
					resolve(res.data)
				},
				fail:(err)=>{
					reject(err)
				},
				complete() {
					wx.hideLoading()
				}
			})
		})
	},
	axiosUpload(url, imgurl, data) {
		return new Promise((resolve, reject) => {
			uni.uploadFile({
				url: url, //仅为示例，非真实的接口地址
				filePath: imgurl,
				name: 'file',
				header: {},
				formData: data,
				success: (uploadFileRes) => {
					var res = JSON.parse(uploadFileRes.data)
					resolve(res)
				}
			});
	
		})
	},
	
}
  