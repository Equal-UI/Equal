import { App } from 'vue'
import Textarea from './ItTextarea.vue'

Textarea.install = (Vue: App) => {
  Vue.component(Textarea.name, Textarea)
}

export default Textarea
