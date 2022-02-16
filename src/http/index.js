import axios from 'axios';

axios.defaults.baseURL = 'http://api.hdnft.online/be?url=user';
// axios.defaults.baseURL = 'https://api-starter.websanova.com/v1';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default (app) => {
    app.axios = axios;
    app.$http = axios;

    app.config.globalProperties.axios = axios;
    app.config.globalProperties.$http = axios;
}