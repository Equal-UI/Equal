import { App } from 'vue'
import Datepicker from './ItDatepicker.vue'

// @ts-ignore
Datepicker.install = (Vue: App) => {
  Vue.component(Datepicker.name, Datepicker)
}

export default Datepicker
