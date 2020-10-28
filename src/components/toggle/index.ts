import Toggle from './ItToggle.vue'

// @ts-ignore
Toggle.install = (Vue) => {
  Vue.component(Toggle.name, Toggle)
}

export default Toggle
