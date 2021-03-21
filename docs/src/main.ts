import { createApp } from 'vue'
import { router } from './router'
import App from './App.vue'
import equal from '/@equal'
import Prism from './components/Prism'

import Col from './components/Col.vue'
import Row from './components/Row.vue'
import ItCode from './components/ItCode.vue'
import Demobox from './components/Demobox.vue'
import Box from './components/Box.vue'
import PropsTable from './components/Table.vue'

import './index.less'

createApp(App)
  .component('prism', Prism)
  .component('Col', Col)
  .component('Row', Row)
  .component('ItCode', ItCode)
  .component('Demobox', Demobox)
  .component('Box', Box)
  .component('PropsTable', PropsTable)
  .use(router)
  .use(equal)
  .mount('#app')
