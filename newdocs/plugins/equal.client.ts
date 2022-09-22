import Equal from '@'
import equalConfig from '@/theme/full'
import { uiConfig } from '../data/symbols'

export default defineNuxtPlugin((nuxtApp) => {
  const reactiveConfig = reactive(JSON.parse(JSON.stringify(equalConfig))) // TODO: use structured clone function when >90% browsers support https://caniuse.com/?search=structuredClone
  nuxtApp.vueApp.use(Equal, reactiveConfig)
  nuxtApp.vueApp.provide(uiConfig, reactiveConfig)
})
