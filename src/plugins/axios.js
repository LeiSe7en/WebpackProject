// this is the axios plugin
const axios = require('axios')
axios.interceptors.response.use(function (response) {
	// 处理正常返回
	console.log(response)
}, function (err) {	
	// 处理错误
})
return axios