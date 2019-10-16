import Alert from './ItAlert.vue'

// @ts-ignore
Alert.install = (Vue) => {
  Vue.component(Alert.name, Alert)
}

export default Alert
