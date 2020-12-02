import Vue from 'vue'
import Router from 'vue-router'
import BookIcon from '@/icons/book.png'
import ClockIcon from '@/icons/clock.png'
import MoneyIcon from '@/icons/money.png'
import WalletIcon from '@/icons/wallet.png'
import RankIcon from '@/icons/rank.png'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

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
      meta: { title: 'sidebar.contact', icon: ClockIcon }
    }, {
      path: 'mycontact',
      name: 'mycontact',
      component: () => import('@/views/myContact/index'),
      meta: { title: 'sidebar.myContact', icon: WalletIcon }
    }, {
      path: 'reward',
      name: 'reward',
      component: () => import('@/views/reward/index'),
      meta: { title: 'sidebar.reward', icon: MoneyIcon }
    },
      {
        path: 'rank-list',
        name:'rank-list',
        component:()=>import('@/views/rankList/index'),
        meta:{title:'rankList.title',icon:RankIcon}
      },
      {
        path: 'question',
        name: 'question',
        component: () => import('@/views/question/index'),
        meta: { title: 'sidebar.question', icon: BookIcon }
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
export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
