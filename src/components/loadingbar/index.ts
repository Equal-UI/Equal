import LoadingVue from './ItLoadingbar.vue'
import { createApp, App, ComponentPublicInstance } from 'vue'

interface ILoading {
  loadingInstance: App
  loadEl: ComponentPublicInstance
  start(): void
  update(value: number): void
  finish(): void
}

class Loading implements ILoading {
  loadingInstance = createApp(LoadingVue)
  loadEl: ComponentPublicInstance

  constructor() {
    const el = this.loadingInstance.mount(document.createElement('div'))
    document.body.appendChild(el.$el)
    this.loadEl = el
  }

  start() {
    this.loadEl.$data.start = true
    this.loadEl.$data.progress = 90
  }

  update(value: number) {
    this.loadEl.$data.start = false
    this.loadEl.$data.progress = value
  }

  finish() {
    this.loadEl.$data.start = false
    this.loadEl.$data.progress = 100
    this.loadEl.$data.height = 0
  }
}

const instance = new Loading()
export default instance
