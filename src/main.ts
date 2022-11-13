import { createApp } from 'vue'
import App from './App.vue'
import setupPlaugins from './plugins'

function startBootstrap() {
  const app = createApp(App)
  setupPlaugins(app)
  app.mount('#app')
}

startBootstrap()
