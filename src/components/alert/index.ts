import Alert from './ItAlert.vue'

// @ts-ignore
Alert.install = (Vue) => {
  Vue.component('it-alert', Alert)
}

export default Alert
