import css from  '../static/styles/main.css'
import $ from 'jquery'
import Request from './requests'
import ('./requests').then(module => {
	console.log(module)
})

// const request = require('./request')
// 如果是使用ES6语法导出default，但是用commonJS导入「require」,那么导入的值就是{default: {...}}
console.log(Requests)
const arr = [1,2,3,4,5,6,7]
$.each(arr, function(i) {
	console.log(i)
})
Requests.fetchComments().then((res) => console.log(res))


// console.log(require('./people.js'))