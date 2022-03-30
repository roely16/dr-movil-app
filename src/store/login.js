import axios from 'axios'

import router from '../router/index'

const namespaced = true

const state = {
    loading: false,
    sidebar: []
}

const mutations = {
    setLoading: (state, payload) => {
        state.loading = payload
    },
    setSideBar: (state, payload) => {
        state.sidebar = payload
    }
}

const actions = {
    async doLogin({commit}, payload){

        try {
    
            const response = await axios.post(process.env.VUE_APP_API_URL + 'login', payload)
            
            console.log(response.data)

            localStorage.setItem('dr_movil', JSON.stringify(response.data.user))

            commit('setSideBar', response.data.user.menu)

            router.push('home')

        } catch (error) {
    
            commit('dialog/setShow', error.response ? error.response.data : { type: 'error',  message: error.message }, {root: true})
            
        }

    }
}

export default {
    namespaced,
    state,
    mutations,
    actions
}