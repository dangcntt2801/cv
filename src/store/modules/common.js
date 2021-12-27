const state = () => ({
  tab: 1
})

// getters
const getters = {
  tab: (state) => {
    return state.tab
  }
}

// actions
const actions = {
  setTab ({ commit }, tab) {
    commit('SETTAB', tab)
  }
}

// mutations
const mutations = {
  SETTAB (state, tab) {
    state.tab = tab
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
