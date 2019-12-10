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
new PageModel({
  el: 'app',
  data: {
    color: '#ccc'
  }
})