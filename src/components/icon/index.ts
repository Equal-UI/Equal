import Icon from './ItIcon.vue'

// @ts-ignore
Icon.install = (Vue) => {
  Vue.component(Icon.name, Icon)
}

export default Icon
