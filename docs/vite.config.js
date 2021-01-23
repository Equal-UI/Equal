const path = require('path')
import vue from '@vitejs/plugin-vue'

module.exports = {
  optimizeDeps: {
    exclude: 'prismjs'
  },
  plugins: [vue()],
  alias: {
    '/@equal': path.resolve(__dirname, '../src'),
  },
  base: '/Equal/',
  assetsDir: ''
}