const path = require('path')

export default {
  rollupInputOptions: {
    input: path.resolve(__dirname, 'src/index.ts'),
  },
  rollupOutputOptions: {
    // file: 'index.js',
    // format: 'cjs',
    dir: './dist'
    // entryFileNames: 'equal.[extname]'
  },
  emitIndex: false,
  assetsDir: '/',
  sourcemap: true,

}

