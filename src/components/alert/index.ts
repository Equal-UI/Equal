import Alert from './ItAlert.vue'
import { App } from 'vue'

Alert.install = (Vue: App) => {
  Vue.component(Alert.name, Alert)
}

export default Alert
