import { createApp } from 'vue'
import App from './App.vue'
import i18n from './lang/i18n'
import router from './router'
import store from './store/index'

createApp(App)
.use(router)
.use(i18n)
.use(store)
.mount('#app')

