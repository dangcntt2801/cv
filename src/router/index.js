import { createRouter, createWebHistory } from 'vue-router'
import index from '@/components/index'
import login from '@/components/Login'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: index
  },
  {
    path: '/login',
    name: 'Login',
    component: login
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
