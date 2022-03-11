import { createApp } from 'vue'
import App from './App.vue'
import i18n from './lang/i18n'
import router from './router'
import store from './store/index'
import http from './http/index';
import auth from './plugins/auth.js';
import VueGtag from "vue-gtag";
import Toast, { PluginOptions } from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
createApp(App)
    .use(router)
    .use(i18n)
    .use(store)
    .use(http)
    .use(auth)
    .use(Toast)
    .use(VueGtag, {
        config: { id: "G-EH8EXCV5VF" }
    })
    .mount('#app')
    