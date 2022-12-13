import { install } from '@icon-park/vue-next/es/all'
import { App } from 'vue'
export default function setupIconParkPlugin(app: App) {
  install(app, 'i')
}