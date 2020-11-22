import { App } from 'vue'
import Collapse from './ItCollapse.vue'

Collapse.install = (Vue: App) => {
  Vue.component(Collapse.name, Collapse)
}

export default Collapse
