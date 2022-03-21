import axios from 'axios'

const namespaced = true

const state = {
	loading: false,
	referrals: {}
}

const mutations = {
	setLoading: (state, payload) => {
		state.loading = payload
	},
	setReferrals: (state, payload) => {
		state.referrals = payload
	}
}

const actions = {

	async fetchReferrals({commit}){

		try {
			
			commit('setLoading', true)

			const response = await axios.post(process.env.VUE_APP_API_URL + 'get_referrals')

			console.log(response.data)

			commit('setReferrals', response.data)
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