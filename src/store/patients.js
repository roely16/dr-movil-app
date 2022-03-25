import axios from 'axios'

const namespaced = true

const state = {
	patients: [],
	loading: false,
	tabs: [],
	tab: 0
}

const mutations = {
	setPatients: (state, payload) => {
		state.patients = payload
	},
	setLoading: (state, payload) => {
		state.loading = payload
	}, 
	setTabs: (state, payload) => {
		state.tabs = payload
	},
	setTab: (state, payload) => {
		state.tab = payload
	}
}

const actions = {

	async fetchPatients({commit}){

		try {
			
			commit('setLoading', true)

			const response = await axios.post(process.env.VUE_APP_API_URL + 'get_patients')

			commit('setPatients', response.data)
			commit('setLoading', false)

		} catch (error) {
			
			console.log(error)

		}

	},
	async fetchTabs({commit}){

		try {
			
			const response = await axios.post(process.env.VUE_APP_API_URL + 'get_tabs_form')

			commit('setTabs', response.data)

			commit('modal/setShow', true, {root: true})

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