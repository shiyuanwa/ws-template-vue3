import { RouteRecordRaw } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/login.vue'),
  },
  {
    path: '/:any(.*)',
    name: '404',
    component: () => import('@/views/error/404.vue'),
  },
] as RouteRecordRaw[]

export default routes
