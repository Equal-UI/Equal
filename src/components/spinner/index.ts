import { App } from 'vue'
import Spinner from './ItSpinner.vue'

Spinner.install = (Vue: App) => {
  Vue.component(Spinner.name, Spinner)
}

export default Spinner
