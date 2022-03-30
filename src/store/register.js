import faker from '@faker-js/faker'

import axios from 'axios'

const namespaced = true

const state = {
    step: 1,
    new_user: {
        clinica_id: null,
        rol_id: null,
        servicio_salud_id: null,
        nombres: null,
        apellidos: null,
        email: null,
        telefono: null,
        password: null,
        repeat_password: null
    },
    clinics: [],
    roles: [],
    health_services: [],
    loading: false,
    sending: false,
    types_user: [],
    type_user: {}
}

const mutations = {
	setStep: (state, payload) => {
		state.step = payload
	},
    setLoading: (state, payload) => {
        state.loading = payload
    },
    setFormData: (state, payload) => {
        state.clinics = payload.clinicas
        state.roles = payload.roles,
        state.health_services = payload.servicios_salud
    },
    setSending: (state, payload) => {
        state.sending = payload
    },
    setFakeUser: (state) => {
        state.new_user = {
            clinica_id: 1,
            rol_id: 1,
            nombres: faker.name.firstName(),
            apellidos: faker.name.lastName(),
            email: faker.internet.email().toLowerCase(),
            telefono: faker.phone.phoneNumber(),
            password: '123456',
            repeat_password: '123456'
        }
    },
    setTypesUser: (state, payload) => {
        state.types_user = payload
    },
    setTypeUser: (state, payload) => {
        
        state.types_user.forEach(type => {
            type.select = false
        });

        payload.select = true

        state.type_user = payload

    }
}

const actions = {

	async fetchData({commit, state}){

        try {
            
            // commit('setFakeUser')

            commit('setLoading', true)

            const data = {
                tipo_usuario_id: state.type_user.id
            }

            const response = await axios.post(process.env.VUE_APP_API_URL + 'get_register_data', data)
            
            commit('setFormData', response.data)

            commit('setLoading', false)

        } catch (error) {
            
            commit('dialog/setShow', error.response ? error.response.data : { type: 'error',  message: error.message }, {root: true})

            commit('setLoading', false)
        }
    
	},
    async registerNewUser({commit, state}){

        try {
            
            commit('setSending', true)

            const response = await axios.post(process.env.VUE_APP_API_URL + 'register', state.new_user)

            commit('dialog/setShow', response.data, {root: true})

            commit('setSending', false)

        } catch (error) {
            
            commit('dialog/setShow', error.response ? error.response.data : { type: 'error',  message: error.message }, {root: true})

            commit('setSending', false)
        }

    },
    async fetchTypesUser({commit}){

        try {
            
            const response = await axios.post(process.env.VUE_APP_API_URL + 'get_types_user')

            commit('setTypesUser', response.data)

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