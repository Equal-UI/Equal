module.exports = {
  mode: 'jit',
  content: [
    './components/**/*.{js,vue,ts}',
    '../src/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './pages/*.vue',
    './plugins/**/*.{js,ts}',
    './*.vue',
  ],
  theme: {
    fontFamily: {
      sans: ['inter', 'system-ui'],
    },
    extend: {},
  },
  safelist: process.env.NODE_ENV === 'production' ? [{ pattern: /./ }] : [],
  plugins: [],
  darkMode: 'class',
}
