import Progressbar from './ItProgressbar.vue'

// @ts-ignore
Progressbar.install = (Vue) => {
  Vue.component('it-progressbar', Progressbar)
}

export default Progressbar
