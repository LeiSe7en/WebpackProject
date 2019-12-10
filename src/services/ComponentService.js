import BaseService from './BaseService'
export default class ComponentService extends BaseService {
  constructor (age, name, job) {
    super()
    this.numberOneInput = document.getElementById('num_1')
    this.numberTwoInput = document.getElementById('num_2')
    this.displayResult = document.getElementById('display')
    this.buttonElement = document.getElementById('addButton')
  }
  onClick (cb) {
    this.buttonElement.addEventListener('click', cb)
  }

  doCalculate () {
    return Number(this.numberOneInput.value) + Number(this.numberTwoInput.value)
  }

  setResult (result) {
    this.displayResult.innerHTML = result
  }
}