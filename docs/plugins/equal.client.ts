import Equal from '@'
import equalConfig from '@/theme/full'
import { uiConfig } from '../data/symbols'

const flattenDeepArray = (obj: Record<string, any>) => {
  for (const key in obj) {
    const element = obj[key]
    if (
      typeof element === 'object' &&
      element !== null &&
      !Array.isArray(element)
    ) {
      flattenDeepArray(element)
    } else if (Array.isArray(element)) {
      obj[key] = element.join(' ')
    }
  }
}

// Used to show arrays as one string in demobox UI changer
flattenDeepArray(equalConfig)

export default defineNuxtPlugin((nuxtApp) => {
  const reactiveConfig = reactive(JSON.parse(JSON.stringify(equalConfig))) // TODO: use structured clone function when >90% browsers support https://caniuse.com/?search=structuredClone
  nuxtApp.vueApp.use(Equal, reactiveConfig)
  nuxtApp.vueApp.provide(uiConfig, reactiveConfig)
})
