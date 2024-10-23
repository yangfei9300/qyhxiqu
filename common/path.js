// 项目域名
export const BASE_URL = 'https://lq.imjiayi.com/api'


// 登录
const Api20241024login =BASE_URL + '/Api20241024/login' 
// 获取用户列表 ()胸有成竹
const Api20241024getUserList =BASE_URL + '/Api20241024/getUserList' 
// 获取选手列表（快问快答）
const Api20241024getUserList2 =BASE_URL + '/Api20241024/getUserList2' 
// 提交胸有成竹得分
const Api20241024markPut =BASE_URL + '/Api20241024/markPut' 

// 提交胸有成竹得分
const Api20241024markPut2 =BASE_URL + '/Api20241024/markPut2' 
//获取胸有成竹得分详情  Api20241024/dtLogInfo
const Api20241024dtLogInfo =BASE_URL + '/Api20241024/dtLogInfo'
// 获取快问快大得分想爱你表情
const Api20241024dtLogInfo2 =BASE_URL + '/Api20241024/dtLogInfo2'

// 5获取选手胸有成竹得分列表（控制端）
const Api20241024getUserLScoreList =BASE_URL + '/Api20241024/getUserLScoreList'
// 5获获取选手快问快答得分列表（控制端）
const Api20241024getUserLScoreList2 =BASE_URL + '/Api20241024/getUserLScoreList2'




 export default {
	 Api20241024getUserLScoreList,
	 Api20241024getUserLScoreList2,
	 
	 Api20241024dtLogInfo2,
	 Api20241024dtLogInfo,
	 Api20241024markPut2,
	 Api20241024markPut,
	 Api20241024getUserList2,
	 Api20241024getUserList,
	Api20241024login,
 }
 