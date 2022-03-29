<template>
	<v-navigation-drawer permanent width="200" class="sidebar" color="#77be00" dark app>
		<v-row class="sidebar-container mt-4 mb-4 text-center">
			<v-col>
				<v-avatar size="80" class="mb-4">
					<v-img
						:src="require('@/assets/img/avatar.png')"
					>

					</v-img>
				</v-avatar>
				<h5 class="white--text">
					{{ userInfo.nombres }} {{ userInfo.apellidos }} 
				</h5>
				<h6>
					{{ userInfo.rol }}
				</h6>
			</v-col>
		</v-row>

		<v-divider></v-divider>

		<v-list
			nav
		>
			<v-list-item
				v-for="item in options"
				:key="item.title"
				link
				:to="item.to ? {name: item.to} : null"
			>
				<v-list-item-icon >
					<v-icon>{{ item.icon }}</v-icon>
				</v-list-item-icon>

				<v-list-item-content>
					<v-list-item-title>{{ item.title }}</v-list-item-title>
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
	export default {
		data () {
			return {
				options: [
					{ title: 'Pacientes', icon: 'mdi-clipboard', to: 'patients' },
					{ title: 'Referidos', icon: 'mdi-account-group', to: 'referrals' },
				],
				bottom_options: [
					{ title: 'Configuración', icon: 'mdi-cog' },
					{ title: 'Acerca de', icon: 'mdi-information' },
				],
				right: null,
			}
		},
		computed: {
			userInfo: function(){

				const user = JSON.parse(localStorage.getItem('dr_movil'))

				return user
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