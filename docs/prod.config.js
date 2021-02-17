const path = require('path')
import vue from '@vitejs/plugin-vue'
console.log(import.meta)
module.exports = {
  optimizeDeps: {
    exclude: ['prismjs', 'body-scroll-lock']
  },
  plugins: [vue()],
  alias: {
    '/@equal': path.resolve(__dirname, './src/equal'),
    '@': path.resolve(__dirname, './src/equal'),
  },
  base: '/Equal/',
  assetsDir: '',
}