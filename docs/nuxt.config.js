const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/Equal/'
  }
} : {}

export default {
  ...routerBase,
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Equal components' || process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@EqualVue' },
      { name: 'twitter:creator', content: '@k0mmsussertod' },
      { property: 'og:url', content: 'https://quatrochan.github.io/Equal/' },
      { property: 'og:title', content: 'Equal UI' },
      {
        property: 'og:description',
        content:
          'Equal UI – open-source Vue components system for your next project based on TypeScript'
      },
      { property: 'og:image', content: '/Equal/eqqqual.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/Equal/favicon.ico' },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/Equal/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/Equal/favicon-16x16.png'
      },
      { rel: 'manifest', href: '/Equal/site.webmanifest' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/css/main.less'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '@/plugins/equal', mode: 'client' },
    { src: '@/plugins/prism', mode: 'client' },
    { src: '@/plugins/hotjar', mode: 'client' },
    { src: '@/plugins/ga', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build'],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  server: {
    host: '0.0.0.0'
  },
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, { isClient }) {
      if (isClient) {
        config.devtool = '#source-map'
      }
    }
  }
}
