import config from './config.js'
import base64 from './base64.js'
export default{
	getToken:() => new Promise((resolve, reject) => {
		resolve(123456)
		
// 		var self = this;
// 		var tok = 'mxadmin:987852';
// 		var hash = "Basic " + base64.base64encode(tok);
// 		uni.request({
// 			url: config.url + '/mx_service/gettoken',
// 			header: {
// 				'Authorization': hash
// 			},
// 			data: {},
// 			success: function(result) {
// 				// console.log(result.data.token)
// 				if (result.data.token) {
// 					// fts(result.data.token)
// 					config.token = result.data.token
// 					resolve(result.data.token)
// 				}
// 			},
// 			fail: function(err) {
// 				console.log("获取token失败")
// 				console.log(err)
// 				reject(err)
// 			}
// 		})
	}),
	axios: (obj) => new Promise((resolve, reject) => {
		var self = this;
		!obj.method ? obj.method = "GET" : false;
		uni.request({
			url: obj.url,
			header: {
				'content-type': 'application/json',
				'mx_token': obj.token
			},
			method: obj.method,
			data: obj.data,
			success: function(result) {
				resolve(result);
			},
			fail: function(err) {
				console.log(err);
				wx.showToast({
					title: '连接服务器失败,请稍后重试。',
					icon: 'none',
					duration: 2000
				})
				reject(err);
			}
		})
	})
}
