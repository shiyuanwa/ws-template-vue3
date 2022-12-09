import { createHtmlPlugin } from 'vite-plugin-html'

export default function setupVitePluginHtml(isBuild: boolean, env: ENV_VITE) {
  let htmlPlugin = createHtmlPlugin({
    minify: true,
    inject: {
      data: {
        title: env.VITE_APP_TITLE,
      },
    },
  })
  return htmlPlugin
}
