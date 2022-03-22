import faker from '@faker-js/faker'

import axios from 'axios'

const namespaced = true

const state = {
	loading: false,
	referrals: {},
	genders: ['Masculino', 'Femenino']
}

const mutations = {
	setLoading: (state, payload) => {
		state.loading = payload
	},
	setReferrals: (state, payload) => {
		state.referrals = payload
	},
	setFakeData: (state) => {

		for (let index = 0; index < 20; index++) {
			
			let item = {
				nombre: faker.name.findName(),
				edad: faker.datatype.number({min: 10, max: 50}),
				sexo: faker.name.gender(true),
				c_externa: faker.datatype.boolean(),
				emergencia: faker.datatype.boolean()
			}
	
			state.referrals.items.push(item)
			
		}


	}
}

const actions = {

	async fetchReferrals({commit}){

		try {

			commit('setLoading', true)

			const response = await axios.post(process.env.VUE_APP_API_URL + 'get_referrals')

			commit('setReferrals', response.data)
			commit('setFakeData')
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