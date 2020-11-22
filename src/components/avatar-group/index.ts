import { App } from 'vue'
import AvatarGroup from '../avatar/ItAvatarGroup.vue'

AvatarGroup.install = (Vue: App) => {
  Vue.component(AvatarGroup.name, AvatarGroup)
}

export default AvatarGroup
