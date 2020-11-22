import { App } from 'vue'
import Tab from '../tabs/ItTab.vue'

Tab.install = (Vue: App) => {
  Vue.component(Tab.name, Tab)
}

export default Tab
