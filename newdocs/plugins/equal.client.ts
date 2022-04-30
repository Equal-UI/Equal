import Equal from '@'
import equalConfig from '@/theme/light'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Equal, equalConfig)
})
