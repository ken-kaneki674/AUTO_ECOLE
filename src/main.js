import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { initAnalytics } from './composables/useAnalytics.js'
import './assets/main.css'

initAnalytics(router)

createApp(App).use(router).mount('#app')
