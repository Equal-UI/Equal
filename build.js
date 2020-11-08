const { build } = require('vite')
const path = require('path')
const fs = require('fs')

;(async () => {
  // All options are optional.
  // check out `src/node/build/index.ts` for full options interface.
  const cjs = build({
    rollupInputOptions: {
      input: path.resolve(__dirname, 'src/index.ts'),
    },
    rollupOutputOptions: {
      dir: './dist/cjs/',
      format: 'cjs',
      entryFileNames: 'index.js',
      assetFileNames: 'equal.css',
    },
    emitIndex: false,
    emitAssets: true,
    assetsDir: '/',
    sourcemap: true,
    outDir: './dist/cjs/',
  })

  const es = build({
    rollupInputOptions: {
      input: path.resolve(__dirname, 'src/index.ts'),
    },
    rollupOutputOptions: {
      dir: './dist/esm/',
      format: 'es',
      entryFileNames: 'index.js',
    },
    emitIndex: false,
    emitAssets: false,
    outDir: './dist/esm/',
    assetsDir: './dist',
    sourcemap: true,
  })

  await Promise.all([cjs, es])

  fs.rename('./dist/cjs/equal.css', './dist/equal.css', () => {})
})()
