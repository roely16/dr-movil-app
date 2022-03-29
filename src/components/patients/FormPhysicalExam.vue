<template>
	<div>
		<v-row style="background-color: white" class="mt-2">
			<v-col cols="3">
				<v-text-field v-model="physical_exam.peso" type="number" label="Peso" outlined hide-details class="elevation-0"></v-text-field>
			</v-col>
			<v-col cols="3">
				<v-text-field v-model="physical_exam.talla" type="number" label="Talla" outlined hide-details class="elevation-0"></v-text-field>
			</v-col>
			<v-col cols="3">
				<v-text-field v-model="physical_exam.pulso" type="number" label="Pulso" outlined hide-details class="elevation-0"></v-text-field>
			</v-col>
			<v-col cols="3">
				<v-text-field v-model="physical_exam.p_a" type="number" label="P/A" outlined hide-details class="elevation-0"></v-text-field>
			</v-col>
			<v-col cols="3">
				<v-text-field v-model="physical_exam.f_r" type="number" label="F/R" outlined hide-details class="elevation-0"></v-text-field>
			</v-col>
			<v-col cols="3">
				<v-text-field v-model="physical_exam.t" type="number" label="T" outlined hide-details class="elevation-0"></v-text-field>
			</v-col>
			<v-col cols="3">
				<v-text-field v-model="physical_exam.fcf" type="number" label="FCF" outlined hide-details class="elevation-0"></v-text-field>
			</v-col>
		</v-row>
		<v-divider class="mt-10 mb-10"></v-divider>
		<v-row>
			<v-col cols="6">
				<v-textarea rows="4" no-resize label="Exámenes Realizados" outlined counter maxlength="4000" class="elevation-0"></v-textarea>
			</v-col>
			<v-col cols="6">
				<v-textarea rows="4" no-resize label="Impresión Clinica" outlined counter maxlength="4000" class="elevation-0"></v-textarea>
			</v-col>
			<v-col cols="6">
				<v-textarea rows="4" no-resize label="Motivo de la Referencia" outlined counter maxlength="4000" class="elevation-0"></v-textarea>
			</v-col>
			<v-col cols="6">
				<v-textarea rows="4" no-resize label="Tratamiento y Manejo Efectuado en el servicio" outlined counter maxlength="4000" class="elevation-0"></v-textarea>
			</v-col>
		</v-row>
	</div>
</template>

<style scoped>

	.v-text-field--outlined >>> fieldset {
		border-color: rgba(228, 227, 227, 0.986);
		border-radius: 20px;
		background-color: #F9FAFF;
	}

</style>


<script>
	import { mapState } from 'vuex'

	export default {
		computed: {
			...mapState({
				physical_exam: state => state.patients.physical_exam
			})
		}
	}
</script>