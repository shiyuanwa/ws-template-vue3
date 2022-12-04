import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import layoutRoutes from './autoRouterLoad'
import routes from './routes'

export const router = createRouter({
  history: createWebHistory(),
  routes: [...routes, ...layoutRoutes],
})

export default function setupRouterPlugin(app: App) {
  app.use(router)
}
