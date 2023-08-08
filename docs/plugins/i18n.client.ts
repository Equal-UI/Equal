import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'
import zh from '../locales/zh.json'

// @ts-ignore
export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: navigator.language.split('-')[0],
    fallbackLocale: 'en',
    messages: {
      en,
      zh
    },
  })

  vueApp.use(i18n)
})
