import { App } from 'vue'
import CollapseItem from '../collapse/ItCollapseItem.vue'

CollapseItem.install = (Vue: App) => {
  Vue.component(CollapseItem.name, CollapseItem)
}

export default CollapseItem
