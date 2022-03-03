    import axiosInstanct from "../../interceptors";
    import qs from 'qs'
    const state = () => ({
        all: [],
        allTransition: [],
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
            SETALLTRANSITION(state, value) {
                state.allTransition = value
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
                let all = await axiosInstanct.get(`https://api.hdnft.online?url=user/user-api&action=getAccountsGame`)
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
                let addAccount = await axiosInstanct.post(`https://api.hdnft.online/?url=user/user-api&action=add`, qs.stringify({
                    account: params.account,
                    password: params.password,
                    type: 'happyland',
                    expire_time: '1641969998',
                }))
                if (addAccount.data.status == 1) {
                    return {
                        type: 'success',
                        msg: addAccount.data.data,
                        control: true
                    }
                } else {
                    let msg = addAccount.data.message.map((val) => {
                        return val
                    })
                    return {
                        type: 'error',
                        msg: msg,
                        control: true
                    }
                }
            } catch (error) {
                console.log(error)
            }
        },
        // eslint-disable-next-line no-unused-vars
        async delete({ dispatch, commit }, params) {
            try {
                // eslint-disable-next-line no-unused-vars
                let addAccount = await axiosInstanct.post(`https://api.hdnft.online/?url=user/user-api&action=removeAccountGame`, qs.stringify({
                    type: params.type,
                    account: params.account
                }))
                if (addAccount.data.status == 1) {
                    return {
                        type: 'success',
                        msg: addAccount.data.data,
                        control: true
                    }
                } else {
                    let msg = addAccount.data.message.map((val) => {
                        return val
                    })
                    return {
                        type: 'error',
                        msg: msg,
                        control: true
                    }
                }
            } catch (error) {
                console.log(error)
            }
        },
        // eslint-disable-next-line no-unused-vars
        async changePassWord({ dispatch, commit }, params) {
            try {
                // eslint-disable-next-line no-unused-vars
                let addAccount = await axiosInstanct.post(`https://api.hdnft.online/?url=user/user-api&action=updateAccountPassword`, qs.stringify({
                    type: 'happyland',
                    account: params.account,
                    password: params.password
                }))
                if (addAccount.data.status == 1) {
                    return {
                        type: 'success',
                        msg: addAccount.data.data,
                        control: true
                    }
                } else {
                    let msg = addAccount.data.message.map((val) => {
                        return val
                    })
                    return {
                        type: 'error',
                        msg: msg,
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
                let playGame = await axiosInstanct.post(`https://api.hdnft.online/?url=user/user-api/action-api&action=play`, qs.stringify({
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
        async stopgame({ dispatch, commit }, params) {
            try {
                let playGame = await axiosInstanct.post(`https://api.hdnft.online?url=user/user-api/action-api&action=endGame`, qs.stringify({
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
        async recharge({ dispatch, commit }, params) {
            try {
                let recharge = await axiosInstanct.post(`https://api.hdnft.online?url=user/wallet-api&action=recharge`, qs.stringify({
                    value: params
                }))
                if (recharge.status == 200) {
                    return {
                        type: 'success',
                        msg: recharge.data.data,
                        control: true
                    }
                } else {
                    return {
                        type: 'error',
                        msg: recharge.data.message,
                        control: true
                    }
                }
            } catch (error) {
                console.log(error)
            }
        },
        async allTransition({ dispatch, commit }, params) {
            try {
                let all = await axiosInstanct.post(`https://api.hdnft.online?url=user/wallet-api&action=history`)
                if (all.status == 200) {
                    commit('SETALLTRANSITION', all.data.data)
                }
            } catch (error) {
                console.log(error)
            }
        },
        async rent({ dispatch, commit }, params) {
            try {
                let rent = await axiosInstanct.post(`https://api.hdnft.online?url=user/user-api&action=upgrade`, qs.stringify({
                    account: params.account,
                    type: 'happyland',
                    day: params.day
                }))
                if (rent.status == 200) {
                    return {
                        type: 'success',
                        msg: rent.data.data,
                        control: true
                    }
                } else {
                    return {
                        type: 'error',
                        msg: rent.data.data,
                        control: true
                    }
                }
            } catch (error) {
                console.log(error)
            }
        },
        async configGame({ dispatch, commit }, params) {
            try {
                let rent = await axiosInstanct.post(`https://api.hdnft.online/?url=user/user-api/action-api&action=configGame`, qs.stringify({
                    account: params.account,
                    type: 'happyland',
                    config: params.config
                }))
                if (rent.status == 200) {
                    return {
                        type: 'success',
                        msg: rent.data.data,
                        control: true
                    }
                } else {
                    return {
                        type: 'error',
                        msg: rent.data.data,
                        control: true
                    }
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