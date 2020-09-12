import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.less'
import Equal from './index'

const app = createApp(App)

app.use(Equal)
app.mount('#app')
