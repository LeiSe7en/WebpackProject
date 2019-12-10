export default class Dep {
  value = null;
  subs = [];
  constructor (key) {
    this.value = key
  }
  addSub (sub) {
    this.subs.push(sub)
  }
  depend (watcher) {
  }
  notify (vm) {
    this.subs.forEach(sub => sub.update(vm))
  }
}