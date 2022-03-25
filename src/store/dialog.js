const namespaced = true

const state = {
    show: false,
    type: null,
    title: null,
    message: null
}

const mutations = {
    setShow: (state, payload) => {
        state.show = true
        state.title = payload.title
        state.message = payload.message
        state.type = payload.type
    },
    hide: (state) => {
        state.show = false
    }
}

const actions = {}

export default {
    namespaced,
    state,
    mutations,
    actions
}