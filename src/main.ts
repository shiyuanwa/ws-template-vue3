import { createApp } from 'vue'
import App from './App.vue'



function start() {
    const app = createApp(App)
    app.mount('#app')
}

start()