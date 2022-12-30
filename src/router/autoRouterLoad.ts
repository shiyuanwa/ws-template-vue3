import { RouteRecordRaw } from 'vue-router'
import layout from '@/layouts/index.vue'

function getRoutes() {
  const layoutRoute = [] as RouteRecordRaw[]

  const routes = {
    name: 'layout',
    path: '/',
    component: layout,
  } as RouteRecordRaw

  routes.children = getChildrenRoutes(routes)

  layoutRoute.push(routes)

  return layoutRoute
}

function getChildrenRoutes(Route: RouteRecordRaw) {
  const views = import.meta.glob('../views/**/*.vue', { eager: true })

  const routes = [] as RouteRecordRaw[]
  const ruleRoute = new RegExp(`\.\.\/views(\/.+)\.vue$`, "i")

  Object.entries(views).forEach(([file, module]) => {
    if (!file.includes('/login.vue') && !file.includes('/components/') && !file.includes('/error/') && ruleRoute.test(file)) {

      let path = RegExp.$1
      path.includes('/index') && (path = path.replace(/\/index/gi, ''))

      const route = {
        name: path.replace(/\/(.){1,1}/g, (arg, $1) => $1.toUpperCase()),
        path,
        component: (module as { [key: string]: any }).default,
      } as RouteRecordRaw
      routes.push(route)

    }
  })

  return routes
}

export default getRoutes()
