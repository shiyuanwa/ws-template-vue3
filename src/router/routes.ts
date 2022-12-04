import { RouteRecordRaw } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/login.vue'),
  },
] as RouteRecordRaw[]

export default routes
