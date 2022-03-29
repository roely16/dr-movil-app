import axios from 'axios'

const namespaced = true

const state = {
	patients: [],
	loading: false,
	tabs: [],
	tab: 0,
	health_services: [],
	search: null,
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
		examenes_realizados: null,
		impresion_clinica: null,
		motivo_referencia: null,
		tratamiento_y_manejo: null,
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
	},
	setPatientDetail: (state, payload) => {
		state.patient = payload.patient

		if (payload.medical_history) {
			state.medical_history = payload.medical_history
		}

		if (payload.obstetric) {
			state.obstetric = payload.obstetric
		}

		if (payload.physical_examen) {
			state.physical_examen = payload.physical_examen
		}
	},
	setSearch: (state, payload) => {
		state.search = payload
	}
}

const actions = {

	async fetchPatients({commit}){

		try {
			
			const user = JSON.parse(localStorage.getItem('dr_movil'))

			const data = {
				ubicacion_id: user.ubicacion_id,
				clinica_id: user.clinica_id
			}

			commit('setLoading', true)

			const response = await axios.post(process.env.VUE_APP_API_URL + 'get_patients', data)

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
	async registerPatient({commit, state, dispatch}){

		try {
			
			commit('setSaving', true)

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

			if (tab.accion == 'save') {
				
				state[tab.store].ubicacion_id = user.ubicacion_id

			}
			
			state[tab.store].table = tab.tabla

			const response = await axios.post(process.env.VUE_APP_API_URL + 'save_patient', state[tab.store])

			commit('setPatientInfo', {store: tab.store, data: response.data.data})

			commit('dialog/setShow', response.data, {root: true})

			commit('setSaving', false)

			dispatch('fetchPatients')

		} catch (error) {
		
            commit('dialog/setShow', error.response ? error.response.data : { type: 'error',  message: error.message }, {root: true})

			commit('setSaving', false)
			
		}

	},
	async fetchPatientDetail({commit, dispatch}, payload){

		try {
			
			const data = {
				id: payload.id
			}

			const response = await axios.post(process.env.VUE_APP_API_URL + 'get_patient_detail', data)

			commit('setPatientDetail', response.data)

			dispatch('fetchTabs')

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