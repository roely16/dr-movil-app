import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Patients from '../views/Patients.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'login',
		component: Login
	},
	{
		path: '/home',
		name: 'home',
		component: Home,
		children: [
			{
				path: '/home/patients',
				name: 'patients',
				component: Patients,
			}
		]
	}
]

const router = new VueRouter({
	routes
})

export default router
