import { App } from 'vue'
import Badge from './ItBadge.vue'

Badge.install = (Vue: App) => {
  Vue.component(Badge.name, Badge)
}

export default Badge
