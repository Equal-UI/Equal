import { Vue } from 'vue-property-decorator'
import App from './App.vue'
import comps from './index'

Vue.use(comps)
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App)
}).$mount('#app')
