import { App } from 'vue'
import setupTailWindCssPlugin from './tailwindcss'

export default function setupPlaugins(app: App) {
  setupTailWindCssPlugin()
}
