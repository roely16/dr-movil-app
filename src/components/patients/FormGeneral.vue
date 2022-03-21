<template>
		<v-row style="background-color: white" class="mt-2">
			<v-col cols="6">
				<v-autocomplete v-model="form.salud_envia" label="Servicio de salud al que se envía" outlined hide-details class="elevation-0"></v-autocomplete>
			</v-col>
			<v-col cols="3" align="end">
				<v-checkbox
					label="Consulta Externa"
					value="red"
					hide-details
					large
				></v-checkbox>
			</v-col>
			<v-col cols="3">
				<v-checkbox
					label="Emergencia"
					value="red"
					hide-details
				></v-checkbox>
			</v-col>
			<v-col cols="6">
				<v-autocomplete label="Servicio de salud que refiere" outlined hide-details class="elevation-0"></v-autocomplete>
			</v-col>
			<v-col cols="6">
				<v-text-field label="Teléfono" outlined hide-details class="elevation-0 input-bordered"></v-text-field>
			</v-col>
			<v-col cols="6">
				<v-text-field v-model="form.nombre_paciente" label="Nombre del paciente" outlined hide-details class="elevation-0 rounded-lg"></v-text-field>
			</v-col>
			<v-col cols="3">
				<v-text-field type="number" label="Edad" outlined hide-details class="elevation-0"></v-text-field>
			</v-col>
			<v-col cols="3">
				<v-select label="Sexo" :items="sexo" item-text="label" item-value="value" outlined hide-details class="elevation-0" ></v-select>
			</v-col>
			<v-col cols="12">
				<v-text-field v-model="form.nombre_paciente" label="Dirección del paciente" outlined hide-details class="elevation-0 rounded-lg"></v-text-field>
			</v-col>
			<v-col cols="12">
				<v-textarea rows="6" no-resize label="Historia de la enfermedad actual" outlined counter maxlength="4000" class="elevation-0"></v-textarea>
			</v-col>
		</v-row>
</template>

<style scoped>

	.v-text-field--outlined >>> fieldset {
		border-color: rgba(228, 227, 227, 0.986);
		border-radius: 20px;
		background-color: #F9FAFF;
	}
	.v-autocomplete--outlined >>> fieldset {
		border-color: rgba(228, 227, 227, 0.986);
		border-radius: 20px;
		background-color: white;
	}

</style>

<script>
	export default {
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
		}
	}
</script>