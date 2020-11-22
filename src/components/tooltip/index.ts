import { App } from 'vue'
import Tooltip from './ItTooltip.vue'

Tooltip.install = (Vue: App) => {
  Vue.component(Tooltip.name, Tooltip)
}

export default Tooltip
