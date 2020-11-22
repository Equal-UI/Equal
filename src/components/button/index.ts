import { App } from 'vue'
import Button from './ItButton.vue'

Button.install = (Vue: App) => {
  Vue.component(Button.name, Button)
}

export default Button
