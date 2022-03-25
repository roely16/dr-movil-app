import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import modal from './modal'
import patients from './patients'
import referrals from './referrals'
import register from './register'
import dialog from './dialog'

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
		referrals: referrals,
		register: register,
		dialog: dialog
	}
})
