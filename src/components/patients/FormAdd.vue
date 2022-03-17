<template>
	<v-card color="#fff">

		<Header title="Nuevo Paciente" />

		<v-toolbar
			dark
			flat
		>	
			<v-tabs
				dark
				background-color="#2784FF"
				v-model="tab"
			>
				<v-tabs-slider color="white"></v-tabs-slider>

				<v-tab
					v-for="(tab, i) in tabs"
					:key="i"
				>
					{{ tab.title }}
				</v-tab>
			</v-tabs>
		</v-toolbar>
		
		<v-card-text style="height: 700px">

			<v-tabs-items v-model="tab">
				<v-tab-item
					v-for="(item, key) in tabs"
					:key="key"
				>	
					<keep-alive>
						<component v-bind:is="item.component"></component>
					</keep-alive>
						
				</v-tab-item>
			</v-tabs-items>

		</v-card-text>

		<v-card-actions>
			<v-row dense>
				<v-col>
					<v-btn class="mr-4" elevation="0" large color="primary">
						Guardar
					</v-btn>
					<v-btn @click="setShow(false)" elevation="0" large color="grey lighten-2">
						Cancelar
					</v-btn>
				</v-col>						
			</v-row>
		</v-card-actions>
	</v-card>
</template>

<style scoped>
	.v-text-field--outlined >>> fieldset {
		border-color: rgba(228, 227, 227, 0.986);
		border-radius: 20px;
	}
</style>

<script>

	import { mapMutations } from "vuex"

	import Header from '@/components/modal/Header'
	import FormGeneral from '@/components/patients/FormGeneral'
	import FormMedicalHistory from '@/components/patients/FormMedicalHistory'
	import FormObstetric from '@/components/patients/FormObstetric'
	import FormPhysicalExam from '@/components/patients/FormPhysicalExam'

	export default {
		components: {
			Header
		},
		data(){
			return{
				tab: 0,
				tabs: [
					{
						title: 'Datos Generales',
						component: FormGeneral 
					},
					{
						title: 'Antecendentes Médicos',
						component: FormMedicalHistory
					},
					{
						title: 'Antecedentes Gineco-Obstetricos',
						component: FormObstetric

					},
					{
						title: 'Examen Físico',
						component: FormPhysicalExam
					}
				]
			}
		},
		methods: {
			...mapMutations({
				setShow: 'modal/setShow'
			})
		}
	}
</script>