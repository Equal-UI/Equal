const { build } = require('vite')
const path = require('path')
const fs = require('fs')

;(async () => {
  // All options are optional.
  // check out `src/node/build/index.ts` for full options interface.
  const cjs = build({
    rollupInputOptions: {
      input: path.resolve(__dirname, 'src/index.ts'),
      external: ['vue'],
    },
    rollupOutputOptions: {
      dir: './dist/cjs/',
      format: 'cjs',
      entryFileNames: 'index.js',
      assetFileNames: 'equal.css',
      exports: 'named',
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
      external: ['vue'],
    },
    rollupOutputOptions: {
      dir: './dist/esm/',
      format: 'es',
      entryFileNames: 'index.js',
      exports: 'named',
    },
    emitIndex: false,
    emitAssets: false,
    outDir: './dist/esm/',
    assetsDir: './dist',
    sourcemap: true,
  })
  const umd = build({
    rollupInputOptions: {
      input: path.resolve(__dirname, 'src/index.ts'),
      external: ['vue'],
    },
    rollupOutputOptions: {
      dir: './dist/umd/',
      format: 'umd',
      entryFileNames: 'index.js',
      globals: {
        vue: 'Vue',
      },
    },
    emitIndex: false,
    emitAssets: false,
    outDir: './dist/umd/',
    assetsDir: './dist',
    sourcemap: true,
  })

  await Promise.all([cjs, es, umd])

  fs.rename('./dist/cjs/equal.css', './dist/equal.css', () => {})
})()
