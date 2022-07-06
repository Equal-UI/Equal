import Equal from '@'
import equalConfig from '@/theme/light'

export default defineNuxtPlugin((nuxtApp) => {
  const reactiveConfig = reactive(equalConfig)
  nuxtApp.vueApp.use(Equal, reactiveConfig)
  nuxtApp.vueApp.provide('uiconfig', reactiveConfig)
})
