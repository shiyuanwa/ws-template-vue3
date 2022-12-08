import { resolve } from 'path'
import { createHtmlPlugin } from 'vite-plugin-html'
console.log(resolve(__dirname, '../../index.html'))
export default function setupVitePluginHtml(isBuild: boolean, env: ENV_VITE) {
  return createHtmlPlugin({
    minify: true,
    template: 'index.html',
    inject: {
      data: {
        title: env.VITE_APP_TITLE,
      },
    },
  })
}
