import { App } from 'vue'
import Icon from './ItIcon.vue'

Icon.install = (Vue: App) => {
  Vue.component(Icon.name, Icon)
}

export default Icon
