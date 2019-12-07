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
      // 个人中心
      path: '/user',
      name: 'user',
      component: () => import('@/pages/user/index')
    },
    {
      // 编辑个人资料
      path: '/user/personal',
      name: 'personal',
      component: () => import('@/pages/user/personal')
    },
    {
      // 编辑昵称
      path: '/user/nickname',
      name: 'nickname',
      component: () => import('@/pages/user/nickname')
    }
  ]
})
