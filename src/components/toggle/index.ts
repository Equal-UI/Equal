import { App } from 'vue'
import Toggle from './ItToggle.vue'

Toggle.install = (Vue: App) => {
  Vue.component(Toggle.name, Toggle)
}

export default Toggle
