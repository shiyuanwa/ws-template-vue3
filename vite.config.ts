import vue from '@vitejs/plugin-vue'
import { ConfigEnv, loadEnv } from 'vite'
import alias from './config/alias'
import server from './config/server'
import { setupPlugins } from './config/plugins'
import parseEnv from './config/util'

export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command === 'build'
  const root = process.cwd()
  const env = parseEnv(loadEnv(mode, root))

  return {
    plugins: setupPlugins(isBuild, env),
    resolve: {
      alias,
    },
    server,
  }
}
