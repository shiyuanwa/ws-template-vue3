import { RouteRecordRaw } from 'vue-router'
import layout from '@/layouts/layout.vue'
const layouts = import.meta.glob('../layouts/*.vue', { eager: true })
// const layouts = import.meta.glob('../layouts/*.vue', { eager: true })

function getRoutes() {
  const layoutRoutes = [] as RouteRecordRaw[]

  Object.entries(layouts).forEach(([file, module]) => {
    const routes = {
      name: 'layout',
      path: '/',
      component: layout,
    } as RouteRecordRaw
    routes.children = getChildrenRoutes(routes)

    layoutRoutes.push(routes)
  })

  return layoutRoutes
}

function getLatoutRoutes(file: string, module: { [key: string]: any }) {
  const name = file.match(/\/(?<name>\w+)\.vue$/)?.groups?.name
  const route = {
    name,
    path: `/${name}`,
    component: module.default,
  } as RouteRecordRaw

  return Object.assign(route, module.default?.route)
}

function getChildrenRoutes(parendRoute: RouteRecordRaw) {
  const views = import.meta.glob('../views/**/*.vue', { eager: true })

  const routes = [] as RouteRecordRaw[]
  Object.entries(views).forEach(([file, module]) => {
    if (file.includes(`../views/${parendRoute.name as string}`)) {
      const route = getLatoutRoutes(file, module as { [key: string]: any })
      routes.push(route)
    }
  })

  return routes
}

export default getRoutes()
