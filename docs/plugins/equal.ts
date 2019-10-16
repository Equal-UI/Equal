import { Vue } from 'vue-property-decorator'
import Equal from '../../src'

// Vue.use(Equal)

for (const component in Equal) {
  if (Equal[component].name) {
    console.log(Equal[component].name)

    Vue.component(Equal[component].name, Equal[component])
  }
}
