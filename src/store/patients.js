import axios from 'axios'

const namespaced = true

const state = {
	patients: [],
	loading: false
}

const mutations = {
	setPatients: (state, payload) => {
		state.patients = payload
	},
	setLoading: (state, payload) => {
		state.loading = payload
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

	}

}

export default {
	namespaced,
	state,
	mutations,
	actions
}