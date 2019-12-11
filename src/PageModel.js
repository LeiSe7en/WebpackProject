import defineReactive from '@/utils/defineReactive'
import ConsoleService from '@/services/ConsoleService'
import $ from 'jquery'
export default class Page {
  constructor(options) {
    this.$el = document.getElementById(options.el)
    this.display = $('<div class="display-box" id="display"></div><input></input><button id="btn" class="btn">Go</button>')
    $(this.$el).append(this.display)
    $('input').on('blur', this.inputCallBack.bind(this)) //执行到这一行的时候，执行环境是Page的实例，所以this就是指向instatnce本身， 所以可以拿到inputCallBack
    this.init(options)
  }
  init (options) {
    window.SG = this
    this.$options = options
    this.initData(this)
    this._render(options.data.color)
  }
  inputCallBack (val) {
    this.$options.data.color = $('input').val()
  }
  initData (vm) {
    let keys = Object.keys(vm.$options.data)
    for (let i = 0; i < keys.length; i++) {
      defineReactive(vm, vm.$options.data, keys[i], vm.$options.data[keys[i]])
    }
  }
  _render (val) {
    this.display.css({
      "background-color": val
    })
  }
}