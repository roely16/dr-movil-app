<template>
		<v-row style="background-color: white" class="mt-2">
			<v-col cols="6">
				<v-autocomplete :rules="[v => !!v]" :items="health_services" item-text="nombre" item-value="id" v-model="patient.referido_a" label="Servicio de salud al que se envía" outlined hide-details class="elevation-0"></v-autocomplete>
			</v-col>
			<v-col cols="3" align="end">
				<v-checkbox
					label="Consulta Externa"
					hide-details
					large
					v-model="patient.consulta_externa"
					value="S"
				></v-checkbox>
			</v-col>
			<v-col cols="3">
				<v-checkbox
					label="Emergencia"
					value="S"
					hide-details
					v-model="patient.emergencia"
				></v-checkbox>
			</v-col>
			<v-col cols="12">
				<v-text-field :rules="[v => !!v]" v-model="patient.nombre" label="Nombre del paciente" outlined hide-details class="elevation-0 rounded-lg"></v-text-field>
			</v-col>
			<v-col cols="6">
				<v-text-field v-model="patient.telefono" label="Teléfono" outlined hide-details class="elevation-0 input-bordered"></v-text-field>
			</v-col>
			<v-col cols="3">
				<v-text-field v-model="patient.edad" type="number" label="Edad" outlined hide-details class="elevation-0"></v-text-field>
			</v-col>
			<v-col cols="3">
				<v-select v-model="patient.sexo" label="Sexo" :items="sexo" item-text="label" item-value="value" outlined hide-details class="elevation-0" ></v-select>
			</v-col>
			<v-col cols="12">
				<v-text-field v-model="patient.direccion" label="Dirección del paciente" outlined hide-details class="elevation-0 rounded-lg"></v-text-field>
			</v-col>
			<v-col cols="12">
				<v-textarea v-model="patient.historia" rows="6" no-resize label="Historia de la enfermedad actual" outlined counter maxlength="4000" class="elevation-0"></v-textarea>
			</v-col>
		</v-row>
</template>

<style scoped>

	.v-text-field--outlined >>> fieldset {
		border-radius: 20px;
		background-color: #F9FAFF;
	}
	.v-autocomplete--outlined >>> fieldset {
		border-radius: 20px;
		background-color: white;
	}

</style>

<script>

	import { mapState } from 'vuex'

	export default {
		name: 'tab-general',
		data(){
			return{
				form: {
					salud_envia: null,
					nombre_paciente: null
				},
				sexo: [
					{
						label: 'Masculino',
						value: 'M'
					},
					{
						label: 'Femenino',
						value: 'F'
					}
				]
			}
		},
		computed: {
			...mapState({
				health_services: state => state.patients.health_services,
				patient: state => state.patients.patient
			})
		}
	}
</script>