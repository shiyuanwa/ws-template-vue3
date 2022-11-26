import vue from '@vitejs/plugin-vue'
import { Plugin } from 'vite'
import setupMockPlugin from './mockjs'

export function setupPlugins(isBuild: boolean, env: ENV_VITE) {
  const plugins: Plugin[] = [vue()]
  plugins.push(setupMockPlugin(isBuild))
  return plugins
}
