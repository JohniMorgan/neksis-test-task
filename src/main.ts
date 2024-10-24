import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import {router} from './routes/router'

const pinia = createPinia()

createApp(App).use(pinia).use(router).mount('#app')
