const chalk = require('chalk')
export default class BaseService {
  constructor (age, name) {
    this.age = age
    this.name = name
  }
  sayName () {
    alert(this.name)
  }
  sayAge () {
    alert(this.age)
  }
  static sayHello () {
    console.log('Hello every one im Nelson')
  }
}