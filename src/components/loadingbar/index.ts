import { Vue } from 'vue-property-decorator'
import LoadingVue from './ItLoadingbar.vue'

const messageTypes = ['primary', 'success', 'danger']
const LoadingConstructor = Vue.extend(LoadingVue)

declare module 'vue/types/vue' {
  interface Vue {
    $Loading: ILoading
  }
}
interface ILoadingOptions {
  progress?: number
  height?: number
}

interface ILoading {
  // Invoke signature.
  loadingInstance: LoadingVue

  update(value: number): void
  finish(): void
}

class Loading implements ILoading {
  public loadingInstance = new LoadingConstructor()
  constructor() {
    this.loadingInstance.$mount()
    document.body.appendChild(this.loadingInstance.$el)
  }

  public start() {
    this.loadingInstance.$props.start = true
    this.loadingInstance.$props.progress = 90
  }

  public update(value: number) {
    this.loadingInstance.$props.start = false
    this.loadingInstance.$props.progress = value
  }

  public finish() {
    this.loadingInstance.$props.start = false
    this.loadingInstance.$props.progress = 100
    this.loadingInstance.$props.height = 0
  }
}

const instance = new Loading()
export default instance
