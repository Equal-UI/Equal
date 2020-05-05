import AvatarGroup from '../Avatar/ItAvatarGroup.vue'

// @ts-ignore
AvatarGroup.install = (Vue) => {
  Vue.component(AvatarGroup.name, AvatarGroup)
}

export default AvatarGroup
