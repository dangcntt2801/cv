import { createRouter, createWebHistory } from 'vue-router'
// import index from '@/components/index'
import login from '@/components/game/login'
import index from '@/components/website/index'
import happyland from '@/components/game/happyland'
import home_page from '@/components/website/homePage/home_page'

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
        path: '/admin',
        name: 'admin',
        component: index,
        // meta: {
        //     auth: true
        // },
        children: [{
            path: 'happyland',
            name: 'happyland',
            component: happyland
        }]
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