import { App } from 'vue'
import Input from './ItInput.vue'

Input.install = (Vue: App) => {
  Vue.component(Input.name, Input)
}

export default Input
