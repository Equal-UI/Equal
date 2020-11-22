import { App } from 'vue'
import Slider from './ItSlider.vue'

Slider.install = (Vue: App) => {
  Vue.component(Slider.name, Slider)
}

export default Slider
