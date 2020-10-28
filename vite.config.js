const path = require('path')

export default {
  rollupInputOptions: {
    input: path.resolve(__dirname, 'src/index.ts'),
  },
  rollupOutputOptions: {
    file: 'equal.common.js',
    format: 'cjs',
    // entryFileNames: 'equal.[extname]'
  },
  emitIndex: false,
  assetsDir: '/'
}

