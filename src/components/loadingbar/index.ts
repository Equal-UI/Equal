import LoadingVue from './ItLoadingbar.vue'
import { createApp, App, ComponentPublicInstance } from 'vue'

interface ILoading {
  loadingInstance: App
  loadEl: ComponentPublicInstance
  start(): void
  update(value: number): void
  finish(): void
}

interface ILoadingProps {
  start: boolean
  progress: number
  height: number
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
    ;(this.loadEl.$data as ILoadingProps).start = true
    ;(this.loadEl.$data as ILoadingProps).progress = 90
  }

  update(value: number) {
    ;(this.loadEl.$data as ILoadingProps).start = false
    ;(this.loadEl.$data as ILoadingProps).progress = value
  }

  finish() {
    ;(this.loadEl.$data as ILoadingProps).start = false
    ;(this.loadEl.$data as ILoadingProps).progress = 100
    ;(this.loadEl.$data as ILoadingProps).height = 0
  }
}

const instance = new Loading()
export default instance
