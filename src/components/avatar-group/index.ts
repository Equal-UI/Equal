import AvatarGroup from '../avatar/ItAvatarGroup.vue'

// @ts-ignore
AvatarGroup.install = (Vue) => {
  Vue.component(AvatarGroup.name, AvatarGroup)
}

export default AvatarGroup
