<template>
	<v-data-table
		:headers="referrals.headers"
		:items="referrals.items"
		:items-per-page="10"
		class="elevation-0"
		hide-default-footer
		:loading="loading"
		loading-text=""
	>
		<template v-slot:no-data>
			<Animation :width="300" :height="300" :options="empty_animation"></Animation>
			<div class="mb-4">
				<span class="overline">
					No hay datos disponibles
				</span>
			</div>
		</template>

		<template v-slot:progress>
			<Animation :width="300" :height="300" :options="loading_animation"></Animation>
			<div class="mb-4 text-center">
				<span class="overline">
					Cargando...
				</span>
			</div>
		</template>

		<template v-slot:[`item.emergencia`]="{item}">
			<v-chip small :color="item.emergencia ? 'error' : 'info'">
				{{ item.emergencia ? 'SI' : 'NO' }}
			</v-chip>
		</template>

		<template v-slot:[`item.c_externa`]="{item}">
			<v-chip small :color="item.emergencia ? 'error' : 'info'">
				{{ item.emergencia ? 'SI' : 'NO' }}
			</v-chip>
		</template>

		<template v-slot:[`item.acciones`]>
			<v-btn small icon color="blue-grey darken-1">
				<v-icon>
					mdi-badge-account-horizontal
				</v-icon>
			</v-btn>
		</template>

	</v-data-table>
</template>

<script>

	import { mapState } from "vuex"

	import Animation from '@/components/home/Animation'

	export default {
		components: {
			Animation
		},
		data(){
			return{
				empty_animation: {
					animationData: require('@/assets/animations/empty.json'),
					loop: false
				},
				loading_animation: {
					animationData: require('@/assets/animations/loading.json'),
					loop: true
				}
			}
		},
		computed: {
			...mapState({
				loading: state => state.referrals.loading,
				referrals: state => state.referrals.referrals
			})
		}
	}
</script>