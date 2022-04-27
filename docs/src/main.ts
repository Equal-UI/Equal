import { createApp } from 'vue'
import { router } from './router'
import App from './App.vue'
import equal from '/@equal'
import Prism from './components/Prism'
import mitt from 'mitt' // Import mitt

import ItCode from './components/ItCode.vue'
import Demobox from './components/Demobox.vue'
import Box from './components/Box.vue'
import PropsTable from './components/Table.vue'
import equalConfig from '/@equal/theme/light'

import './index.less'
import '@docsearch/css'

const emitter = mitt()

createApp(App)
  .provide('emitter', emitter)
  .component('prism', Prism)
  .component('ItCode', ItCode)
  .component('Demobox', Demobox)
  .component('Box', Box)
  .component('PropsTable', PropsTable)
  .use(router)
  .use(equal, equalConfig)
  .mount('#app')
