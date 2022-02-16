const state = () => ({
        typeAlert: {
            type: 'success',
            control: false,
            msg: ''
        }

    })
    // getters
const getters = {}

// actions
const actions = {}

// mutationsa
const mutations = {
    SETMALERT(state, value) {
        state.typeAlert.type = value.type
        state.typeAlert.control = value.control
        state.typeAlert.msg = value.msg
    },
    SETCONTROL(state, value) {
        state.typeAlert.control = value
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}