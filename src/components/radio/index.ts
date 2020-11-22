import { App } from 'vue'
import Radio from './ItRadio.vue'

Radio.install = (Vue: App) => {
  Vue.component(Radio.name, Radio)
}

export default Radio
