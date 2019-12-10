export default class ConsoleService {
    update (vm) {
      console.log('数据改变啦' + vm.$options.data.color)
    }
}