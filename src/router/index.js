import { createRouter, createWebHistory } from 'vue-router'
// import index from '@/components/index'
const home_page = () => import('@/components/website/homePage/home_page')
const index_cv = () => import('@/components/index')
const about = () => import('@/components/game/about')
const statistical = () => import('@/components/game/statistical')
const recharge = () => import('@/components/game/recharge')
const happyland = () => import('@/components/game/happyland')
const index = () => import('@/components/website/index')
const login = () => import('@/components/game/login')

const routes = [{
        path: '/',
        name: 'Home',
        component: home_page,
    },
    {
        path: '/login',
        name: 'Login',
        component: login
    },
    {
        path: '/cv',
        name: 'cv',
        component: index_cv
    },
    {
        path: '/admin',
        name: 'admin',
        component: index,
        meta: {
            auth: true
        },
        children: [{
                path: 'happyland',
                name: 'happyland',
                component: happyland
            },
            {
                path: 'recharge',
                name: 'recharge',
                component: recharge
            },
            {
                path: 'about',
                name: 'about',
                component: about
            },
            {
                path: 'statistical',
                name: 'statistical',
                component: statistical
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default (app) => {
    app.router = router;

    app.use(router);
}