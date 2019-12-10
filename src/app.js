<<<<<<< HEAD
// import css from  '../static/styles/main.css'
// import ComponentService from '@/services/ComponentService'
// const run = function (componentService) {
//   componentService.onClick(function () {
//     console.log(this) // 指向绑定的那个元素
//   })
//   componentService.onClick(() => {
//     console.log(this) // 严格模式下指向undefined，非严格模式下指向window

//     const result = componentService.doCalculate()
//     componentService.setResult(result)
//   })
// }
// run(new ComponentService())
import PageModel from './PageModel'
import css from  '../static/styles/main.css'
import $ from 'jquery'
import Requests from './requests'
import ('./requests').then(module => {
  console.log(module)
})
new PageModel({
  el: 'app',
  data: {
    color: '#ccc'
  }
})

// const request = require('./request')
// 如果是使用ES6语法导出default，但是用commonJS导入「require」,那么导入的值就是{default: {...}}

console.log(Requests)
const arr = ['hello', 'world']
$.each(arr, function(i) {
  console.log(i)
})
Requests.fetchComments().then((res) => console.log(res))
