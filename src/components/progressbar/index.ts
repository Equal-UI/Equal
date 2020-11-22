import { App } from 'vue'
import Progressbar from './ItProgressbar.vue'

Progressbar.install = (Vue: App) => {
  Vue.component(Progressbar.name, Progressbar)
}

export default Progressbar
