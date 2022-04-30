module.exports = {
  mode: 'jit',
  content: [
    "./components/**/*.{js,vue,ts}",
    "../src/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    fontFamily: {
      'sans': ['inter', 'system-ui'],
    },
    extend: {},
  },
  plugins: [],
  darkMode: 'class'
}
