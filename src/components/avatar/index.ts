import Avatar from './ItAvatar.vue'

// @ts-ignore
Avatar.install = (Vue) => {
    Vue.component(Avatar.name, Avatar)
}

export default Avatar
