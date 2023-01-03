import loacl from '@/utils/local'
import { RouteLocationNormalized, Router } from 'vue-router'
class Guard {
  constructor(private router: Router) { }

  public run() {
    this.router.beforeEach((to, from) => {
      const token = loacl.get('token')

      if (!this.isRouteCheck(to, token)) return { name: 'login' }
    })
  }

  private isRouteCheck(route: RouteLocationNormalized, token: any) {
    
    return !!(!route.meta.auto || (route.meta.auto && token))
  }
}

export default (router: Router) => {
  new Guard(router).run()
}
