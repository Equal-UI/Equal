import { App } from 'vue'
import Avatar from './ItAvatar.vue'

Avatar.install = (Vue: App) => {
  Vue.component(Avatar.name, Avatar)
}

export default Avatar
