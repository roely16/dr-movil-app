<template>
	<div>
		<v-row justify="center" align="center" class="text-center">
			<v-col cols="12">
				<span class="overline">
					Selecciona la clínica a la que perteneceras
				</span>
			</v-col>
			<v-col cols="8">
				<v-select v-model="new_user.clinica_id" hide-details :items="clinics" item-text="nombre" item-value="id" outlined></v-select>
			</v-col>
			<v-col cols="12">
				<span class="overline">
					Selecciona el puesto que desempeñaras
				</span>
			</v-col>
			<v-col cols="8">
				<v-select v-model="new_user.rol_id" :items="roles" item-text="nombre" item-value="id" outlined></v-select>
			</v-col>
		</v-row>
		<v-row justify="center">
			<v-col cols="8">
				<v-btn :disabled="!new_user.clinica_id || !new_user.rol_id" @click="setStep(2)" dark color="#2784FF" large elevation="0" block>Continuar</v-btn>
			</v-col>
		</v-row>
	</div>
</template>


<style scoped>

	.container {
		height: 100vh
	}
	.v-text-field--outlined >>> fieldset {
		border-radius: 20px;
		background-color: #F9FAFF;
	}

</style>

<script>
	import { mapState, mapMutations } from 'vuex'

	export default {
		methods: {
			...mapMutations({
				setStep: 'register/setStep'
			})
		},
		computed: {
			...mapState({
				clinics: state => state.register.clinics,
				roles: state => state.register.roles,
				new_user: state => state.register.new_user
			})
		}
	}
</script>