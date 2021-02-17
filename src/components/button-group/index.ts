import { App } from 'vue'
import ButtonGroup from '@/components/button/ItButtonGroup.vue'

ButtonGroup.install = (Vue: App) => {
  Vue.component(ButtonGroup.name, ButtonGroup)
}

export default ButtonGroup
