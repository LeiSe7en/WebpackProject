import defineReactive from '@/utils/defineReactive'
import ConsoleService from '@/services/ConsoleService'
import Tools from '@/utils/Tools'
import $ from 'jquery'
export default class Page {
  constructor(options) {
    this.$el = document.getElementById(options.el)
    $(this.$el).append($('<div class="display-box" id="display"></div><div>Normal input<input id="input_normal"></input></div><div>Debounced input<input id="input_debounce"></input></div><button id="btn" class="btn">Go</button>'))
    this.displayBox = $('.display-box')
    $('#input_debounce').on('input', Tools.debounce(this.inputCallBack.bind(this), 500)) //执行到这一行的时候，执行环境是Page的实例，所以this就是指向instatnce本身， 所以可以拿到inputCallBack
    $('#input_normal').on('input', this.inputCallBack.bind(this)) //执行到这一行的时候，执行环境是Page的实例，所以this就是指向instatnce本身， 所以可以拿到inputCallBack
    
    // $('button').on('click', Tools.throttle(this.consoleLog, 1000))
    $('button').on('click', Tools.debounce(this.consoleLog, 1000))
    this.init(options)
  }
  init (options) {
    window.SG = this
    this.$options = options
    this.initData(this)
    this._render(options.data.color)
  }
  inputCallBack (val) {
    this.$options.data.color = $('#input_debounce').val()
  }
  initData (vm) {
    let keys = Object.keys(vm.$options.data)
    for (let i = 0; i < keys.length; i++) {
      defineReactive(vm, vm.$options.data, keys[i], vm.$options.data[keys[i]])
    }
  }
  _render (val) {
    this.displayBox.css({
      "background-color": val
    })
  }
  consoleLog (event) {
    console.log('Triggered', event)
  }
}