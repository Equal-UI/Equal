import { createApp } from 'vue'
import App from './App.vue'
import Equal from './index'
import lightTheme from './theme/light'
import './index.css'

const app = createApp(App)

app.use(Equal, lightTheme)
app.mount('#app')
