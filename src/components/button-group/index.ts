import ButtonGroup from '../button/ItButtonGroup.vue'

// @ts-ignore
ButtonGroup.install = Vue => {
  Vue.component(ButtonGroup.name, ButtonGroup)
}

export default ButtonGroup
