const state = () => ({
    all: [],
    isEditData: {
        id: '',
        email: '',
        pass: '',
        key: '',
        status: '',
    },
    mode: 'list'
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
    DELETE_ACCOUNT() {

    },
    ADD_ACCOUNT(state, value) {
        state.all.push(value)
    },
    SET_DATA_EDIT_ACCOUNT(state, value) {
        state.isEditData = state.all[value]
    },
    // EDIT_ACCOUNT(state, value) {
    //     // state.all.find
    // },
    CLEAR_DATA(state) {
        state.isEditData = {
            email: '',
            pass: '',
            key: '',
            status: '',
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