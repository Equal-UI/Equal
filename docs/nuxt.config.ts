// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    baseURL: '/Equal/',
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;900',
        },
      ],
    },
  },
  target: 'static',
  router: {
    base: '/Equal/',
  },
  css: ['assets/index.css'],
  alias: {
    '@': '/../src',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: false,
})

// alias: {
//   '@': '/../src',
//   '@floating-ui': './node_modules/@floating-ui',
//   '@floating-ui/dom': './node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs',
//   '@vueuse/integrations/useFocusTrap':
//     './node_modules/@vueuse/integrations/useFocusTrap',
//   'body-scroll-lock': './node_modules/body-scroll-lock',
//   colord: './node_modules/colord/index.js',
// },
