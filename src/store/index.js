import { createStore } from "vuex"
import common from './modules/common'
import account from './modules/account'
import alert from './modules/alert'
import happyland from './modules/happyland/happyland'
import accountHappyland from './modules/happyland/accountHappyland'

const store = createStore({
    modules: {
        common,
        account,
        happyland,
        alert,
        accountHappyland
    },
    state: {
        name: "Vue"
    },
    mutations: {

    },
    actions: {

    }
})

export default store