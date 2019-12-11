import Dep from './Dep'
import ConsoleService from '../services/ConsoleService'
import RenderService from '../services/RenderService'
export default function defineReactive (vm, obj, key, val) {
  const dep = new Dep(key)
  const consoleService = new ConsoleService()
  const renderService = new RenderService()
  let desc = Object.getOwnPropertyDescriptor(obj, key)
  const getter = desc && desc.get
  const setter = desc && desc.set
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: true,
    get: function () {
      let value = getter ? getter.call(obj) : val
      console.log(`Getter be called ${key}`)
      dep.addSub(consoleService)
      dep.addSub(renderService)
      return value
    },
    set: function (newValue) {
      console.log(`Setter be called ${key}`)
      if (val == newValue) return false
      val = newValue
      dep.notify(vm, newValue)
    }
  })
}