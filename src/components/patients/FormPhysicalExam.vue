<template>
	<div>
		<v-row style="background-color: white" class="mt-2">
			<v-col cols="6" md="3" lg="3" xl="3">
				<v-text-field :readonly="!editable" v-model="physical_exam.peso" type="number" label="Peso" outlined hide-details class="elevation-0"></v-text-field>
			</v-col>
			<v-col cols="6" md="3" lg="3" xl="3">
				<v-text-field :readonly="!editable" v-model="physical_exam.talla" type="number" label="Talla" outlined hide-details class="elevation-0"></v-text-field>
			</v-col>
			<v-col cols="6" md="3" lg="3" xl="3">
				<v-text-field :readonly="!editable" v-model="physical_exam.pulso" type="number" label="Pulso" outlined hide-details class="elevation-0"></v-text-field>
			</v-col>
			<v-col cols="6" md="3" lg="3" xl="3">
				<v-text-field :readonly="!editable" v-model="physical_exam.p_a" type="number" label="P/A" outlined hide-details class="elevation-0"></v-text-field>
			</v-col>
			<v-col cols="6" md="3" lg="3" xl="3">
				<v-text-field :readonly="!editable" v-model="physical_exam.f_r" type="number" label="F/R" outlined hide-details class="elevation-0"></v-text-field>
			</v-col>
			<v-col cols="6" md="3" lg="3" xl="3">
				<v-text-field :readonly="!editable" v-model="physical_exam.t" type="number" label="T" outlined hide-details class="elevation-0"></v-text-field>
			</v-col>
			<v-col cols="6" md="3" lg="3" xl="3">
				<v-text-field :readonly="!editable" v-model="physical_exam.fcf" type="number" label="FCF" outlined hide-details class="elevation-0"></v-text-field>
			</v-col>
		</v-row>
		<v-divider class="mt-10 mb-10"></v-divider>
		<v-row>
			<v-col cols="12" md="6" lg="6" xl="6">
				<v-textarea :readonly="!editable" v-model="physical_exam.examenes_realizados" rows="4" no-resize label="Exámenes Realizados" outlined counter maxlength="4000" class="elevation-0"></v-textarea>
			</v-col>
			<v-col cols="12" md="6" lg="6" xl="6">
				<v-textarea :readonly="!editable" v-model="physical_exam.impresion_clinica" rows="4" no-resize label="Impresión Clinica" outlined counter maxlength="4000" class="elevation-0"></v-textarea>
			</v-col>
			<v-col cols="12" md="6" lg="6" xl="6">
				<v-textarea :readonly="!editable" v-model="physical_exam.motivo_referencia" rows="4" no-resize label="Motivo de la Referencia" outlined counter maxlength="4000" class="elevation-0"></v-textarea>
			</v-col>
			<v-col cols="12" md="6" lg="6" xl="6">
				<v-textarea :readonly="!editable" v-model="physical_exam.tratamiento_y_manejo" rows="4" no-resize label="Tratamiento y Manejo Efectuado en el servicio" outlined counter maxlength="4000" class="elevation-0"></v-textarea>
			</v-col>
		</v-row>
	</div>
</template>

<style scoped>

	.v-text-field--outlined >>> fieldset {
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