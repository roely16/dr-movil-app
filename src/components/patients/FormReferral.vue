<template>
	<v-row style="background-color: white" class="mt-2">
		<v-col cols="12" md="6" lg="6" xl="6">
			<v-textarea v-model="reference_sheet.resumen_evolucion" rows="4" no-resize label="Resumen de la evolución" outlined counter maxlength="4000" class="elevation-0"></v-textarea>
		</v-col>
		<v-col cols="12" md="6" lg="6" xl="6">
			<v-textarea v-model="reference_sheet.tratamiento" rows="4" no-resize label="Tratamiento brindado" outlined counter maxlength="4000" class="elevation-0"></v-textarea>
		</v-col>
		<v-col cols="12" md="6" lg="6" xl="6">
			<v-textarea v-model="reference_sheet.diagnostico" rows="4" no-resize label="Diagnóstico" outlined counter maxlength="4000" class="elevation-0"></v-textarea>
		</v-col>
		<v-col cols="12" md="6" lg="6" xl="6">
			<v-textarea v-model="reference_sheet.recomendaciones" rows="4" no-resize label="Recomendaciones" outlined counter maxlength="4000" class="elevation-0"></v-textarea>
		</v-col>
	</v-row>
</template>

<script>
	import { mapState } from 'vuex'

	export default {
		computed: {
			...mapState({
				reference_sheet: state => state.patients.reference_sheet
			})
		}
	}
</script>