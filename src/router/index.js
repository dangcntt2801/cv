import { createRouter, createWebHistory } from 'vue-router'
// import index from '@/components/index'
import login from '@/components/game/login'
import index from '@/components/website/index'
import happyland from '@/components/game/happyland'

const routes = [{
        path: '/',
        name: 'Home',
        component: index,
        children: [{
            path: 'happyland',
            name: 'happyland',
            component: happyland
        }]
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