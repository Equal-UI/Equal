import Button from './ItButton.vue'

// @ts-ignore
Button.install = (Vue) => {
  Vue.component(Button.name, Button)
}

export default Button
