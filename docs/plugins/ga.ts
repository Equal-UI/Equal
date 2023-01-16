import VueGtag from 'vue-gtag'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(
    VueGtag,
    {
      config: {
        id: 'UA-65564432-3',
      },
    },
    nuxtApp.$router,
  )
})
