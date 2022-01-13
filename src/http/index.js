import axios from 'axios';

axios.defaults.baseURL = 'http://35.240.246.176/be/user';

export default (app) => {
    app.axios = axios;
    app.$http = axios;

    app.config.globalProperties.axios = axios;
    app.config.globalProperties.$http = axios;
}