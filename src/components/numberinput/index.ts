import { App } from 'vue'
import NumberInput from './ItNumberInput.vue'

NumberInput.install = (Vue: App) => {
  Vue.component(NumberInput.name, NumberInput)
}

export default NumberInput
