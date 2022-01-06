const state = () => ({
    mode: 'succes',
    msg: ''
})

// getters
const getters = {}

// actions
const actions = {}

// mutationsa
const mutations = {
    SETMODE(state, value) {
        state.mode = value
    },
    SETMSG(state, value) {
        state.msg = value
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}