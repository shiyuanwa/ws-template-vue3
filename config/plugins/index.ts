import vue from '@vitejs/plugin-vue'
import { Plugin } from 'vite'
import setupMockPlugin from './mockjs'
import setupVitePluginHtml from './vitePluginHtml'

export function setupPlugins(isBuild: boolean, env: ENV_VITE) {
  const plugins: Plugin[] = [vue()]
  plugins.push(setupMockPlugin(isBuild))
  plugins.push(setupVitePluginHtml(isBuild, env))
  return plugins
}
