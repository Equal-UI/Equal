import Loading from './ItLoading.vue'

// @ts-ignore
Loading.install = (Vue) => {
  Vue.component(Loading.name, Loading)
}

export default Loading
