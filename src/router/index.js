import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/home/index')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('@/pages/user/index')
    }
  ]
})
