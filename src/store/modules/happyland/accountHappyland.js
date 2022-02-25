import axiosInstanct from "../../interceptors";
import qs from 'qs'
const state = () => ({
    myAccount: {},
})

// getters
const getters = {}

// mutationsa
const mutations = {
    SETACCOUNT(state, value) {
        state.myAccount = value
    },
}
const actions = {
    async myAccount({ commit }) {
        try {
            let all = await axiosInstanct.get(`http://api.hdnft.online?url=user/user-api&action=getUserSystem`)
            if (all.status == 200) {
                commit('SETACCOUNT', all.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}