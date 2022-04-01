<template>
	<div>
		<v-row align="center">
			<v-col cols="12" md="4" lg="4" xl="4">
				<v-text-field v-model="search" outlined label="Buscar" append-icon="mdi-magnify" hide-details class="elevation-0"></v-text-field>
			</v-col>
			<v-col align="end">
				<v-btn @click="fetchTabs({new: true})" dark large elevation="0" color="#77be00">
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
					class="elevation-0"
					hide-default-footer
					:loading="loading"
					loading-text=""
					height="500"
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

					<template v-slot:[`item.acciones`]="{item}">
						<v-btn @click="fetchPatientDetail(item)" x-small icon>
							<v-icon>
								mdi-pencil
							</v-icon>
						</v-btn>
					</template>

					<template v-slot:[`item.emergencia`]="{item}">
						<v-chip :color="item.emergencia ? 'error' : null" small label>
							{{ item.emergencia ? 'SI' : 'NO' }}
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

					<template v-slot:[`item.servicio_salud`]="{item}">
						<v-chip dark color="#77BE96" class="mt-2 mb-2 pt-2 pb-2 chip-multiline" label small>
							<v-icon class="mr-2">
								mdi-medical-bag
							</v-icon>
							<span :title="item.servicio_salud">
								{{ item.servicio_salud }}
							</span>
						</v-chip>
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
		border-radius: 20px;
		background-color: #fff;
	}
	.chip-multiline{
		height: auto; 
		white-space: normal
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
				setShow: 'modal/setShow',
				setSearch: 'patients/setSearch'
			}),
			...mapActions({
				fetchPatients: 'patients/fetchPatients',
				fetchTabs: 'patients/fetchTabs',
				fetchPatientDetail: 'patients/fetchPatientDetail'
			})
		},
		computed: {
			...mapState({
				loading: state => state.patients.loading,
				patients: state => state.patients.patients,
			}),
			search: {
				set(value){
					this.setSearch(value)
				},
				get(){
					return this.$store.state.patients.search
				}
			}
		},
		mounted(){

			this.fetchPatients()

		}
	}
</script>