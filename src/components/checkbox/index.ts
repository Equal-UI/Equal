import { App } from 'vue'
import Checkbox from './ItCheckbox.vue'

Checkbox.install = (Vue: App) => {
  Vue.component(Checkbox.name, Checkbox)
}

export default Checkbox
