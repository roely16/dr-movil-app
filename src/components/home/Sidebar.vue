<template>
	<v-navigation-drawer v-model="show_sidebar" :permanent="($vuetify.breakpoint.md || $vuetify.breakpoint.lg || $vuetify.breakpoint.xl) && !isMobile" :width="isMobile ? null : 200" class="sidebar" color="#77be00" dark app>
		<v-row class="sidebar-container mt-4 mb-4 text-center">
			<v-col>
				<v-avatar size="80" class="mb-4">
					<v-img
						:src="require('@/assets/img/avatar.png')"
					>

					</v-img>
				</v-avatar>
				<h3 class="white--text">
					{{ userInfo.nombres }} {{ userInfo.apellidos }} 
				</h3>
				<h4 class="white--text">
					{{ userInfo.rol }}
				</h4>

				<h5 class="white--text mt-4">
					{{ userInfo.clinica }}
					<br>
					{{ userInfo.ubicacion }}
				</h5>
			</v-col>
		</v-row>

		<v-divider></v-divider>
		<v-list
			nav
		>
			<v-list-item
				v-for="(item, key) in sidebar"
				:key="key"
				link
				:to="item.url ? {name: item.url} : null"
			>
				<v-list-item-icon >
					<v-icon>{{ item.icono }}</v-icon>
				</v-list-item-icon>

				<v-list-item-content>
					<v-list-item-title>{{ item.nombre }}</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list>

		<template v-slot:append>
			<v-list
				nav
			>
				<v-list-item
					v-for="item in bottom_options"
					:key="item.title"
					link
				>
					<v-list-item-icon >
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title>{{ item.title }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</template>
			
	</v-navigation-drawer>
</template>

<script>

	import { mapMutations } from "vuex"

	export default {
		data () {
			return {
				bottom_options: [
					{ title: 'Configuración', icon: 'mdi-cog' },
					{ title: 'Acerca de', icon: 'mdi-information' },
				],
				right: null,
			}
		},
		methods: {
			...mapMutations({
				setShowSidebar: 'home/setShowSidebar'
			})
		},
		computed: {
			userInfo: function(){

				const user = JSON.parse(localStorage.getItem('dr_movil'))

				return user
			},
			sidebar: function(){
				const user = JSON.parse(localStorage.getItem('dr_movil'))

				return user.menu
			},
			show_sidebar: {
				get(){
					return this.$store.state.home.show_sidebar
				},
				set(value){
					this.setShowSidebar(value)
				}
			},
			isMobile: function(){

				if (this.$vuetify.breakpoint.md || this.$vuetify.breakpoint.lg || this.$vuetify.breakpoint.xl) {
					return false
				}

				return true
			}
		}
	}
</script>

<style>
	.sidebar{
		border-start-end-radius: 20px;
		border-end-end-radius: 20px;
	}
	.sidebar-container{
		padding-left: 20px;
		padding-right: 20px;
	}
</style>