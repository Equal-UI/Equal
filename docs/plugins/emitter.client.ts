import mitt from 'mitt'

const emitter = mitt()

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.provide('emitter', emitter)
})
