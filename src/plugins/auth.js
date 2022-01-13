import { createAuth } from '../v3.js';
import driverAuthBearer from '../drivers/auth/bearer';
import driverHttpAxios from '../drivers/http/axios.1.x.js';
import driverRouterVueRouter from '../drivers/router/vue-router.2.x'
import driverOAuth2Google from '../drivers/oauth2/google.js';
import driverOAuth2Facebook from '../drivers/oauth2/facebook.js';

driverOAuth2Google.params.client_id = '547886745924-4vrbhl09fr3t771drtupacct6f788566.apps.googleusercontent.com';
driverOAuth2Facebook.params.client_id = '196729390739201';

export default (app) => {
    // eslint-disable-next-line no-debugger
    app.use(createAuth({
        plugins: {
            http: app.axios,
            router: app.router,
        },
        drivers: {
            http: driverHttpAxios,
            auth: driverAuthBearer,
            router: driverRouterVueRouter,
            oauth2: {
                google: driverOAuth2Google,
                facebook: driverOAuth2Facebook,
            }
        },
        options: {
            rolesKey: 'type',
            notFoundRedirect: { name: 'user-account' },
        }
    }));
}