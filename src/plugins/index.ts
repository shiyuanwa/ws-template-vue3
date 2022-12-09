import setupRouterPlugin from '@/router'
import { App } from 'vue'
import setupIconParkPlugin from './iconpark'
import setupTailWindCssPlugin from './tailwindcss'

export default async function setupPlaugins(app: App) {
  setupRouterPlugin(app)
  setupTailWindCssPlugin()
  setupIconParkPlugin(app)
}
