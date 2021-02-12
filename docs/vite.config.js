const path = require('path')
import vue from '@vitejs/plugin-vue'

module.exports = {
  optimizeDeps: {
    exclude: ['prismjs', 'body-scroll-lock']
  },
  plugins: [vue()],
  alias: {
    '/@equal': path.resolve(__dirname, '../src'),
    '@': path.resolve(__dirname, '../src'),
  },
  base: '/Equal/',
  assetsDir: '',
}