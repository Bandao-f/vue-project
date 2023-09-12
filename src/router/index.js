import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LayoutMain from '../layout/LayoutMain.vue'
import auditor from '../views/j-editor.vue'

const router = createRouter({
  history: createWebHistory('/dist'),
  routes: [
    {
      path:'/',
      name:'layout',
      component:LayoutMain,
      children:[

        {
          path: '/help',
          name: 'help',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/HelpSend.vue') //懒加载
        },
        {
          path: '/article',
          name: 'article',
          component: () => import('../views/AuditArticle.vue')
        },
        {
          path: '/flow',
          name: 'flow',
          component: () => import('../views/ArticleFlow.vue')
        }
      ]
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      name: 'auditor',
      component: auditor
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
