const path = require('path')
import vue from '@vitejs/plugin-vue'

/**
 * type {import('vite').UserConfig}
 */
export default {
  alias: [{
    find: "@",
    replacement: path.resolve(__dirname, 'src')
  }],
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'Equal'
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
}