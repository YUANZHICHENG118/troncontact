import Vue from 'vue'
import Router from 'vue-router'
import BookIcon from '@/icons/book.png'
import ClockIcon from '@/icons/clock.png'
import MoneyIcon from '@/icons/money.png'
import WalletIcon from '@/icons/wallet.png'
Vue.use(Router)

/* Layout */
import Layout from '@/layout'
//翻译
import {i18nRender} from '../locales'

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/contact',
    children: [{
      path: 'contact',
      name: 'contact',
      component: () => import('@/views/contact/index'),
      meta: { title: i18nRender('sidebar.contact'), icon: ClockIcon }
    },{
      path: 'mycontact',
      name: 'mycontact',
      component: () => import('@/views/myContact/index'),
      meta: { title: '我的合同', icon: WalletIcon }
    },{
      path: 'reward',
      name: 'reward',
      component: () => import('@/views/reward/index'),
      meta: { title: '团队奖励', icon: MoneyIcon }
    },
      {
        path: 'question',
        name: 'question',
        component: () => import('@/views/question/index'),
        meta: { title: '常见问题', icon: BookIcon }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()
// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
