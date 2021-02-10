const path = require('path')
import vue from '@vitejs/plugin-vue'
console.log(import.meta)
module.exports = {
  optimizeDeps: {
    exclude: 'prismjs'
  },
  plugins: [vue()],
  alias: {
    '/@equal': path.resolve(__dirname, './src/equal'),
  },
  base: '/Equal/',
  assetsDir: '',
}