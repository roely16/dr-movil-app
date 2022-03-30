<template>
	<div>
		<v-data-table
			:headers="referrals.headers"
			:items="referrals.items"
			:items-per-page="10"
			class="elevation-0"
			hide-default-footer
			:loading="loading"
			loading-text=""
			:search="search"
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
				<v-chip :color="item.emergencia ? 'error' : null" small label>
					{{ item.emergencia ? 'SI' : 'NO' }}
				</v-chip>
			</template>

			<template v-slot:[`item.referido_desde`]="{item}">
				<v-chip dark color="#77BE96" class="mt-2 mb-2 pt-2 pb-2 chip-multiline" label small>
					<v-icon class="mr-2">
						mdi-medical-bag
					</v-icon>
					{{ item.clinica }}
					<br />
					{{ item.ubicacion }}
				</v-chip>
			</template>


			<template v-slot:[`item.consulta_externa`]="{item}">
				<v-chip :color="item.consulta_externa ? 'primary' : null" small label>
					{{ item.consulta_externa ? 'SI' : 'NO' }}
				</v-chip>
			</template>

			<template v-slot:[`item.sexo`]="{item}">
				<v-tooltip bottom>
					<template v-slot:activator="{ on, attrs }">
						<v-icon v-bind="attrs" v-on="on" size="30" :color="item.sexo == 'M' ? 'primary' : 'pink'">
							{{ item.sexo == 'M' ? 'mdi-human-male' : 'mdi-human-female' }}
						</v-icon>
					</template>
					<span>
						{{ item.sexo == 'M' ? 'Masculino' : 'Femenino' }}
					</span>
				</v-tooltip>
			</template>

			<template v-slot:[`item.acciones`]="{item}">
				<v-btn @click="fetchPatientDetail(item)" small icon color="blue-grey darken-1">
					<v-icon>
						mdi-badge-account-horizontal
					</v-icon>
				</v-btn>
			</template>

		</v-data-table>

		<Modal width="1400">
			<template #content>
				<Form></Form>
			</template>
		</Modal>
	</div>
</template>

<style scoped>
	.chip-multiline{
		height: auto; 
		white-space: normal
	}
</style>

<script>

	import { mapState, mapMutations, mapActions } from "vuex"

	import Animation from '@/components/home/Animation'
	import Modal from '@/components/modal/Modal'
	import Form from '@/components/patients/FormAdd'

	export default {
		components: {
			Animation,
			Modal,
			Form
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
		methods: {
			...mapMutations({
				setShow: 'modal/setShow',
				setReferralDetail: 'referrals/setReferralDetail'
			}),
			...mapActions({
				fetchPatientDetail: 'patients/fetchPatientDetail'
			})
		},
		computed: {
			...mapState({
				loading: state => state.referrals.loading,
				referrals: state => state.referrals.referrals,
				search: state => state.referrals.search
			})
		}
	}
</script>