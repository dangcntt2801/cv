import { createStore } from "vuex"
import common from './modules/common'
import account from './modules/account'
import happyland from './modules/happyland/happyland'

const store = createStore({
    modules: {
        common,
        account,
        happyland
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