import setupRouterPlugin from '@/router'
import { App } from 'vue'
import setupTailWindCssPlugin from './tailwindcss'

export default async function setupPlaugins(app: App) {
  setupRouterPlugin(app)
  setupTailWindCssPlugin()
}


