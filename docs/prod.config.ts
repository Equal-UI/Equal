import type { UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

const config: UserConfig = {
  optimizeDeps: {
    exclude: ['prismjs', 'body-scroll-lock'],
  },
  plugins: [vue()],
  alias: {
    '/@equal': path.resolve(__dirname, './src'),
    '@': path.resolve(__dirname, './src'),
  },
  base: '/Equal/',
  build: {
    assetsDir: '',
  },
}

export default config
