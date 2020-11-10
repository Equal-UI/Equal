const { build } = require('vite')
const path = require('path')
const fs = require('fs')

;(async () => {
  // All options are optional.
  // check out `src/node/build/index.ts` for full options interface.
  const cjs = build({
    rollupInputOptions: {
      input: path.resolve(__dirname, 'src/index.js'),
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
    mode: 'production',
    emitAssets: true,
    assetsDir: '/',
    esbuildTarget: 'es2015',
    outDir: './dist/cjs/',
    // sourcemap: true,
  })

  const es = build({
    rollupInputOptions: {
      input: path.resolve(__dirname, 'src/index.js'),
      external: ['vue'],
    },
    rollupOutputOptions: {
      dir: './dist/esm/',
      format: 'esm',
      entryFileNames: 'index.js',
      // exports: 'named',
    },
    emitIndex: false,
    mode: 'production',
    esbuildTarget: 'es2015',
    emitAssets: false,
    outDir: './dist/esm/',
    assetsDir: './dist',
    // sourcemap: true,
  })
  const umd = build({
    rollupInputOptions: {
      input: path.resolve(__dirname, 'src/index.js'),
      external: ['vue'],
    },
    rollupOutputOptions: {
      dir: './dist/umd/',
      format: 'umd',
      entryFileNames: 'index.js',
      exports: 'named',
      globals: {
        vue: 'Vue',
      },
    },

    emitIndex: false,
    emitAssets: false,
    mode: 'production',
    outDir: './dist/umd/',
    assetsDir: './dist',
    // sourcemap: true,
  })

  await Promise.all([cjs, es, umd])

  fs.rename('./dist/cjs/equal.css', './dist/equal.css', () => {})
})()
