import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Patients from '../views/Patients.vue'
import Referrals from '../views/Referrals.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'login',
		component: Login
	},
	{
		path: '/register',
		name: 'register',
		component: Register
	},
	{
		path: '/home',
		name: 'home',
		component: Home,
		meta: {
			goBack: false,
			title: 'Dr Móvil'
		},
		children: [
			{
				path: '/home/patients',
				name: 'patients',
				component: Patients,
				meta: {
					goBack: true,
					title: 'Lista de Pacientes'
				}
			},
			{
				path: '/home/referrals',
				name: 'referrals',
				component: Referrals,
				meta: {
					goBack: true,
					title: 'Referidos'
				}
			}
		]
	}
]

const router = new VueRouter({
	routes
})

export default router
