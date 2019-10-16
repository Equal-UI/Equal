import Button from './ItButton.vue'

// @ts-ignore
Button.install = (Vue) => {
  Vue.component('it-button', Button)
}

export default Button
