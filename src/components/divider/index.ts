import { App } from 'vue'
import Divider from './ItDivider.vue'

// @ts-ignore
Divider.install = (Vue: App) => {
  Vue.component(Divider.name, Divider)
}

export default Divider
