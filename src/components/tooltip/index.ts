import Tooltip from './ItTooltip.vue'

// @ts-ignore
Tooltip.install = (Vue) => {
  Vue.component('it-tooltip', Tooltip)
}

export default Tooltip
