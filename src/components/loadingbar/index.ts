import { App } from 'vue'
import Loadingbar from './ItLoadingbar.vue'

Loadingbar.install = (Vue: App) => {
  Vue.component(Loadingbar.name, Loadingbar)
}

export default Loadingbar
