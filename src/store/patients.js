import axios from 'axios'

const namespaced = true

const state = {
	patients: [],
	loading: false,
	tabs: [],
	tab: 0,
	health_services: [],
	patient: {
		nombre: null,
		telefono: null,
		edad: null,
		sexo: null,
		direccion: null,
		historia: null,
		consulta_externa: null,
		emergencia: null,
		ubicacion_id: null,
		referido_a: null,
		registrado_por: null
	},
	medical_history: {
		medicos: null,
		mentales: null,
		quirurgicos: null,
		traumaticos: null,
		alergicos: null,
		paciente_id: null,
		registrado_por: null
	},
	obstetric: {
		gestas: null,
		partos: null,
		abortos: null,
		hijos_vivos: null,
		hijos_muertos: null,
		fur: null,
		cstp: null,
		otros: null,
		paciente_id: null,
		registrado_por: null
	},
	physical_exam: {
		peso: null,
		talla: null,
		pulso: null,
		p_a: null,
		f_r: null,
		t: null,
		fcf: null,
		paciente_id: null,
		registrado_por: null		
	},
	saving: false
}

const mutations = {
	setPatients: (state, payload) => {
		state.patients = payload
	},
	setLoading: (state, payload) => {
		state.loading = payload
	}, 
	setForm: (state, payload) => {
		state.tabs = payload.tabs
		state.health_services = payload.health_services
	},
	setTab: (state, payload) => {
		state.tab = payload
	},
	setSaving: (state, payload) => {
		state.saving = payload
	},
	setPatientInfo: (state, payload) => {
		state[payload.store] = payload.data
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
			
			commit('dialog/setShow', error.response ? error.response.data : { type: 'error',  message: error.message }, {root: true})

		}

	},
	async fetchTabs({commit}){

		try {
			
			const user = JSON.parse(localStorage.getItem('dr_movil'))

			const data = {
				rol_id: user.rol_id
			}

			const response = await axios.post(process.env.VUE_APP_API_URL + 'get_tabs_form', data)

			commit('setForm', response.data)

			commit('modal/setShow', true, {root: true})

		} catch (error) {
			
            commit('dialog/setShow', error.response ? error.response.data : { type: 'error',  message: error.message }, {root: true})

		}
		
	},
	async registerPatient({commit, state}){

		// commit('setSaving', true)

		try {
			
			const tab = state.tabs[state.tab]

			if (tab.accion == 'update') {
				
				state[tab.store].paciente_id = state.patient.id

			}

			if (tab.accion == 'update' && state[tab.store].paciente_id == null) {
				
				commit('dialog/setShow', { type: 'info',  message: 'Debe registrar primero los datos generales del paciente.' }, {root: true})

				return

			}

			const user = JSON.parse(localStorage.getItem('dr_movil'))

			state[tab.store].registrado_por = user.id
			state[tab.store].table = tab.tabla

			const response = await axios.post(process.env.VUE_APP_API_URL + 'save_patient', state[tab.store])

			commit('setPatientInfo', {store: tab.store, data: response.data.data})

			commit('dialog/setShow', response.data, {root: true})

			console.log(response.data)

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