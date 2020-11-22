import { App } from 'vue'
import Loading from './ItLoading.vue'

Loading.install = (Vue: App) => {
  Vue.component(Loading.name, Loading)
}

export default Loading
