import { createRouter, createWebHistory } from 'vue-router' // 创建路由实例，创建history模式的路由
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component:Layout,
      children: [
        {
          path:'', // 默认渲染页，路由置空，当访问/时，默认页的组件也会展示
          component:Home
        },
        {
          path:'category/:id',  // 展示category时，也在 / 里面 / 的内容也会展示
          component:Category
        }
      ]
    },
    {
      path:'/login',
      component:Login
    },
  ]
})

export default router
