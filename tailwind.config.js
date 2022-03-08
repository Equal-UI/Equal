module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'sans': ['inter', 'system-ui'],
    },
    extend: {},
  },
  plugins: [],
  darkMode: 'class'
}
