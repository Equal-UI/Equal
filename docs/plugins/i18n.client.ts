import { createI18n } from 'vue-i18n'
import { en, zhHans, zhHant } from '../locales'

// @ts-ignore
export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: window.navigator.language,
    fallbackLocale: 'en',
    messages: {
      en,
      'zh-Hans': zhHans,
      'zh-Hant': zhHant,
    },
  })

  vueApp.use(i18n)
})
