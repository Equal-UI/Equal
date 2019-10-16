import Tooltip from './ItTooltip.vue'

// @ts-ignore
Tooltip.install = (Vue) => {
  Vue.component(Tooltip.name, Tooltip)
}

export default Tooltip
