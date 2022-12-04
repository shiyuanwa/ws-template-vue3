import { router } from './index';
import { RouteRecordRaw } from 'vue-router'

const layouts = import.meta.glob('../layouts/*.vue', { eager: true })

function getRoutes() {
  const layoutRoutes = [] as RouteRecordRaw[]

  Object.entries(layouts).forEach(([file, module]) => {
    const routes = getLatoutRoutes(file, module as { [key: string]: any })
    routes.children = getChildrenRoutes(routes)
    layoutRoutes.push(routes)
  })

  console.log(layoutRoutes)
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
