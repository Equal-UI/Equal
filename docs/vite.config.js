const path = require('path')
import vue from '@vitejs/plugin-vue'

module.exports = {
  optimizeDeps: {
    exclude: ['prismjs', 'body-scroll-lock']
  },
  plugins: [vue()],
  alias: {
    '/@equal': path.resolve(__dirname, '../src'),
  },
  base: '/Equal/',
  assetsDir: '',
  // build: {
  //   rollupOptions: {
  //     // make sure to externalize deps that shouldn't be bundled
  //     // into your library
  //   }
  // }
}