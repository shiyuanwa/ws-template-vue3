import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import layoutRoute from './autoRouterLoad'
import Guard from './routerGuard'
import routes from './routes'

export const router = createRouter({
  history: createWebHistory(),
  routes: [...routes, ...layoutRoute],
})

export default function setupRouterPlugin(app: App) {
  Guard(router)
  app.use(router)
}
