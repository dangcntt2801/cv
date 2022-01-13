import { createRouter, createWebHistory } from 'vue-router'
// import index from '@/components/index'
import login from '@/components/game/login'
// import index from '@/components/website/index'
import happyland from '@/components/game/happyland'
import home_page from '@/components/website/homePage/home_page'

const routes = [{
        path: '/',
        name: 'Home',
        component: home_page,
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

export default (app) => {
    app.router = router;

    app.use(router);
}