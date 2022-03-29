<template>
	<div>
		<v-row style="background-color: white" class="mt-2">
			<v-col cols="3">
				<v-text-field :readonly="!editable" v-model="obstetric.gestas" type="number" label="Gestas" outlined hide-details class="elevation-0"></v-text-field>
			</v-col>
			<v-col cols="3">
				<v-text-field :readonly="!editable" v-model="obstetric.partos" type="number" label="Partos" outlined hide-details class="elevation-0"></v-text-field>
			</v-col>
			<v-col cols="3">
				<v-text-field :readonly="!editable" v-model="obstetric.abortos" type="number" label="Abortos" outlined hide-details class="elevation-0"></v-text-field>
			</v-col>
			<v-col cols="3">
				<v-text-field :readonly="!editable" v-model="obstetric.hijos_vivos" type="number" label="Hijos Vivos" outlined hide-details class="elevation-0"></v-text-field>
			</v-col>
			<v-col cols="3">
				<v-text-field :readonly="!editable" v-model="obstetric.hijos_muertos" type="number" label="Hijos Muertos" outlined hide-details class="elevation-0"></v-text-field>
			</v-col>
			<v-col cols="3">
				<v-text-field :readonly="!editable" v-model="obstetric.fur" type="number" label="FUR" outlined hide-details class="elevation-0"></v-text-field>
			</v-col>
			<v-col cols="3">
				<v-text-field :readonly="!editable" v-model="obstetric.cstp" type="number" label="CSTP" outlined hide-details class="elevation-0"></v-text-field>
			</v-col>
			
		</v-row>

		<v-divider class="mt-10 mb-10"></v-divider>
		
		<v-row>
			<v-col cols="12">
				<v-textarea :readonly="!editable" v-model="obstetric.otros" rows="6" no-resize label="Otros" outlined counter maxlength="4000" class="elevation-0"></v-textarea>
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
				obstetric: state => state.patients.obstetric
			})
		}
	}
</script>