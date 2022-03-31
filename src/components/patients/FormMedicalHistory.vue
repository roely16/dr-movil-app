<template>
	<v-row style="background-color: white" class="mt-2">
		<v-col cols="12" md="6" lg="6" xl="6">
			<v-textarea :readonly="!editable" v-model="medical_history.medicos" no-resize rows="4" label="Médicos" outlined counter maxlength="4000" class="elevation-0"></v-textarea>
		</v-col>
		<v-col cols="12" md="6" lg="6" xl="6">
			<v-textarea :readonly="!editable" v-model="medical_history.mentales" no-resize rows="4" label="Mentales" outlined counter maxlength="4000" class="elevation-0"></v-textarea>
		</v-col>
		<v-col cols="12" md="6" lg="6" xl="6">
			<v-textarea :readonly="!editable" v-model="medical_history.quirurgicos" no-resize rows="4" label="Quirúrgicos" outlined counter maxlength="4000" class="elevation-0"></v-textarea>
		</v-col>
		<v-col cols="12" md="6" lg="6" xl="6">
			<v-textarea :readonly="!editable" v-model="medical_history.traumaticos" no-resize rows="4" label="Traumáticos" outlined counter maxlength="4000" class="elevation-0"></v-textarea>
		</v-col>
		<v-col cols="12" md="6" lg="6" xl="6">
			<v-textarea :readonly="!editable" v-model="medical_history.alergicos" no-resize rows="4" counter maxlength="4000" label="Alérgicos" outlined class="elevation-0"></v-textarea>
		</v-col>
	</v-row>
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
				medical_history: state => state.patients.medical_history
			})
		}
	}
</script>