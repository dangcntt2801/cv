    import axiosInstanct from "../../interceptors";
    import qs from 'qs'
    const state = () => ({
        all: [],
        isEditData: {
            account: '',
            password: '',
        },
        mode: 'list'
    })

    // getters
    const getters = {}

    // mutationsa
    const mutations = {
            SETALL(state, value) {
                state.all = value
            },
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
        // actions
    const actions = {
        async all({ commit }) {
            try {
                let all = await axiosInstanct.get(`http://api.hdnft.online?url=user/user-api&action=getAccountsGame`)
                if (all.status == 200) {
                    commit('SETALL', all.data.data)
                }
            } catch (error) {
                console.log(error)
            }
        },
        // eslint-disable-next-line no-unused-vars
        async add({ dispatch, commit }, params) {
            try {
                // eslint-disable-next-line no-unused-vars
                let addAccount = await axiosInstanct.post(`http://api.hdnft.online/?url=user/user-api&action=add`, qs.stringify({
                    account: params.account,
                    password: params.password,
                    type: 'happyland',
                    expire_time: '1641969998',
                }))
                if (addAccount.status == 200) {
                    return {
                        type: 'success',
                        msg: addAccount.data.data,
                        control: true
                    }
                } else {
                    return {
                        type: 'error',
                        msg: addAccount.data.data,
                        control: true
                    }
                }
            } catch (error) {
                console.log(error)
            }
        },
        // eslint-disable-next-line no-unused-vars
        async playgame({ dispatch, commit }, params) {
            try {
                let playGame = await axiosInstanct.post(`http://api.hdnft.online/?url=user/user-api/action-api&action=play`, qs.stringify({
                    type: 'happyland',
                    account: params,
                }))
                if (playGame.status == 200) {
                    return {
                        type: 'success',
                        msg: playGame.data.message,
                        control: true
                    }
                } else {
                    return {
                        type: 'error',
                        msg: playGame.data.message,
                        control: true
                    }
                }
            } catch (error) {
                console.log(error)
            }
        },
    }

    export default {
        namespaced: true,
        state,
        getters,
        actions,
        mutations
    }