import { App } from 'vue'
import Colorpicker from './ItColorpicker.vue'

// @ts-ignore
Colorpicker.install = (Vue: App) => {
  Vue.component(Colorpicker.name, Colorpicker)
}

export default Colorpicker
