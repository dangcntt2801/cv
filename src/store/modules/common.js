const state = () => ({
    isExpand: false
})

// getters
const getters = {}

// actions
const actions = {}

// mutationsa
const mutations = {
    CHANGEISEXPAND(state) {
        state.isExpand = !state.isExpand
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}