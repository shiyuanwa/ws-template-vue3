import { App } from 'vue'

export default function autoComponents(app: App) {
  const components = import.meta.glob('../components/auto-components/**/*.vue', { eager: true })

  Object.entries(components).forEach(([file, modules]) => {
    const name = file.match(/\/(?<name>\w+)\.(vue|ts)$/i)?.groups?.name as string
    const module = modules as { [key: string]: any }

    app.component(`ws-${name}`, module?.default)
  })
}
