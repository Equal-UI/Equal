import Progressbar from './ItProgressbar.vue'

// @ts-ignore
Progressbar.install = (Vue) => {
  Vue.component(Progressbar.name, Progressbar)
}

export default Progressbar
