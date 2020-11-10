import { babel } from '@rollup/plugin-babel';

export default function (treeshake = true, polyfills = false, legacy = false) {
  const plugins = treeshake
    ? [
        'babel-plugin-typescript-iife-enum',
        ['@babel/plugin-transform-typescript', { isTSX: 'preserve' }],
        'babel-plugin-pure-calls-annotation',
        [
          '@babel/plugin-transform-runtime',
          {
            corejs: polyfills && '3',
            helpers: polyfills,
            regenerator: false,
            useESModules: true,
          },
        ],
      ]
    : [['@babel/plugin-transform-typescript', { isTSX: 'preserve' }]];

  const presets = legacy
    ? [
        [
          '@babel/preset-env',
          {
            modules: false,
            useBuiltIns: 'usage',
            corejs: { version: '3' },
            targets: {
              ie: '10',
            },
          },
        ],
        '@vue/babel-preset-jsx',
      ]
    : ['@vue/babel-preset-jsx'];

  return babel({
    plugins,
    presets,
    babelrc: false,
    babelHelpers: 'bundled',
    exclude: 'node_modules/**',
    extensions: ['.js', '.jsx', '.tsx', '.ts', '.vue'],
  });
};