import { createApp } from 'vue'
import App from './App.vue'
import autoComponents from './components'
import setupPlaugins from './plugins'

function startBootstrap() {
  const app = createApp(App)
  setupPlaugins(app)
  autoComponents(app)
  app.mount('#app')
}

startBootstrap()
