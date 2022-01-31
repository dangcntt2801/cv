import { createStore } from "vuex"
import common from './modules/common'
import account from './modules/account'
import alert from './modules/alert'
import happyland from './modules/happyland/happyland'

const store = createStore({
    modules: {
        common,
        account,
        happyland,
        alert
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