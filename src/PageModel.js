import defineReactive from '@/utils/defineReactive'
import ConsoleService from '@/services/ConsoleService'
export default class Page {
  constructor(options) {
    this.$el = document.getElementById(options.el)
    this.$el.style.width = '100px'
    this.$el.style.height = '100px'
    this.$el.style.border = '1px solid #ccc'
    this.init(options)
  }
  init (options) {
    window.SG = this
    this.$options = options
    this.initData(this)
    this._render(this)
  }
  
  initData (vm) {
    let keys = Object.keys(vm.$options.data)
    for (let i = 0; i < keys.length; i++) {
      defineReactive(vm, vm.$options.data, keys[i], vm.$options.data[keys[i]])
    }
  }
  _render (vm) {
    console.log('called render function')
    this.$el.style.backgroundColor = vm.$options.data.color
  }
}