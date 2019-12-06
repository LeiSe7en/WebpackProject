// this is the axios plugin
const axios = require('axios')
axios.interceptors.response.use(function (response) {
	// 处理正常返回
	console.log(response.data)
	return response.data
}, function (err) {	
	// 处理错误
})

export default axios