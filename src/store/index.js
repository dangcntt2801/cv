import { createStore } from "vuex" 
import common from './modules/common'
import account from './modules/account'

const store = createStore({
   modules: {
    common,
    account
   },
   state:{
      name: "Vue"
   },
   mutations: {

   },
   actions: {

   }
})

export default store