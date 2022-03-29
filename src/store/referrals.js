import faker from '@faker-js/faker'

import axios from 'axios'

const namespaced = true

const state = {
	loading: false,
	referrals: {},
	genders: ['Masculino', 'Femenino'],
	referral_detail: {},
	search: null
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
				emergencia: faker.datatype.boolean(),
				direccion: faker.address.streetName() + ' ' + faker.address.streetAddress()
			}
	
			state.referrals.items.push(item)
			
		}


	},
	setReferralDetail: (state, payload) => {
		state.referral_detail = payload
	},
	setSearch: (state, payload) => {
		state.search = payload
	}
}

const actions = {

	async fetchReferrals({commit}){

		try {

			commit('setLoading', true)

			const user = JSON.parse(localStorage.getItem('dr_movil'))

			const data = {
				ubicacion_id: user.ubicacion_id,
				clinica_id: user.clinica_id
			}

			const response = await axios.post(process.env.VUE_APP_API_URL + 'get_referrals', data)

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