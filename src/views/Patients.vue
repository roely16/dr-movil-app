<template>
	<div>
		<v-row align="center">
			<v-col cols="4">
				<v-text-field outlined label="Buscar" append-icon="mdi-magnify" hide-details class="elevation-0"></v-text-field>
			</v-col>
			<v-col align="end">
				<v-btn @click="fetchTabs()" dark large elevation="0" color="#77be00">
					<v-icon>
						mdi-plus
					</v-icon>
					Nuevo Paciente
				</v-btn>
			</v-col>
		</v-row>
		<v-row>
			<v-col>
				<v-data-table
					:headers="patients.headers"
					:items="patients.items"
					:items-per-page="5"
					class="elevation-0"
					hide-default-footer
					:loading="loading"
					loading-text=""
					height="500"
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

					<template v-slot:[`item.acciones`]>
						<v-btn x-small icon>
							<v-icon>
								mdi-pencil
							</v-icon>
						</v-btn>
					</template>
				</v-data-table>
			</v-col>
		</v-row>

		<Modal width="1000">
			<template #content>
				<FormAdd />
			</template>
		</Modal>
	</div>
</template>

<style scoped>
	.v-text-field--outlined >>> fieldset {
		border-color: rgba(228, 227, 227, 0.986);
		border-radius: 20px;
		background-color: #fff;
	}
</style>

<script>

	import { mapMutations, mapActions, mapState } from 'vuex'

	import Modal from '@/components/modal/Modal'
	import FormAdd from '@/components/patients/FormAdd'

	import Animation from '@/components/home/Animation'

	export default {
		components: {
			Modal,
			FormAdd,
			Animation
		},
		data () {
			return {
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
				setShow: 'modal/setShow'
			}),
			...mapActions({
				fetchPatients: 'patients/fetchPatients',
				fetchTabs: 'patients/fetchTabs'
			})
		},
		computed: {
			...mapState({
				loading: state => state.patients.loading,
				patients: state => state.patients.patients
			})
		},
		mounted(){

			this.fetchPatients()

		}
	}
</script>