import { App } from 'vue'
import Tabs from './ItTabs.vue'

Tabs.install = (Vue: App) => {
  Vue.component(Tabs.name, Tabs)
}

export default Tabs
