import Badge from './ItBadge.vue'

// @ts-ignore
Badge.install = (Vue) => {
    Vue.component(Badge.name, Badge)
}

export default Badge
