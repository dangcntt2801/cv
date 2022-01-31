import { createAuth } from '../v3.js';
import driverAuthBearer from '../drivers/auth/bearer';
import driverHttpAxios from '../drivers/http/axios.1.x.js';
import driverRouterVueRouter from '../drivers/router/vue-router.2.x'

export default (app) => {
    app.use(createAuth({
        plugins: {
            http: app.axios,
            router: app.router,
        },
        drivers: {
            http: driverHttpAxios,
            auth: driverAuthBearer,
            router: driverRouterVueRouter,
        },
        options: {
            rolesKey: 'type',
            notFoundRedirect: { name: 'user-account' },
        }
    }));
}