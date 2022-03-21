import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import modal from './modal'
import patients from './patients'
import referrals from './referrals'

export default new Vuex.Store({
	state: {
	},
	mutations: {
	},
	actions: {
	},
	modules: {
		modal: modal,
		patients: patients,
		referrals: referrals
	}
})
