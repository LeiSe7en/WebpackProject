export default class RenderService {
  update (vm, newValue) {
    vm._render(newValue)
  }
}