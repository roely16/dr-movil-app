<template>
	<div>
		<v-row justify="center" align="center" class="text-center">

			<v-col v-if="type_user.clinica" cols="12">
				<span class="overline">
					Selecciona la clínica a la que perteneceras
				</span>
			</v-col>
			<v-col v-if="type_user.clinica" cols="12" md="8" lg="8" xl="8">
				<v-select v-model="new_user.clinica_id" hide-details :items="clinics" item-text="nombre" item-value="id" outlined></v-select>
			</v-col>

			<v-col v-if="type_user.servicio_salud" cols="12">
				<span class="overline">
					Selecciona el servicio de salud al que perteneces
				</span>
			</v-col>
			<v-col v-if="type_user.servicio_salud" cols="12" md="8" lg="8" xl="8">
				<v-select v-model="new_user.servicio_salud_id" hide-details :items="health_services" item-text="nombre" item-value="id" outlined></v-select>
			</v-col>

			<v-col cols="12">
				<span class="overline">
					Selecciona el puesto que desempeñaras
				</span>
			</v-col>
			<v-col cols="12" md="8" lg="8" xl="8">
				<v-select v-model="new_user.rol_id" :items="roles" item-text="nombre" item-value="id" outlined></v-select>
			</v-col>

		</v-row>
		<v-row justify="center">
			<v-col cols="12" md="8" lg="8" xl="8">
				<v-btn :disabled="(!new_user.clinica_id && !new_user.servicio_salud_id) || !new_user.rol_id" @click="setStep(3)" color="primary" large elevation="0" block>Continuar</v-btn>
			</v-col>
			<v-col cols="12" md="8" lg="8" xl="8">
				<v-btn @click="back()" large elevation="0" block>Regresar</v-btn>
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
				setStep: 'register/setStep',
				backStepOne: 'register/backStepOne'
			}),
			back(){
				this.backStepOne()
				this.setStep(1)
			}
		},
		computed: {
			...mapState({
				clinics: state => state.register.clinics,
				roles: state => state.register.roles,
				new_user: state => state.register.new_user,
				type_user: state => state.register.type_user,
				health_services: state => state.register.health_services
			})
		}
	}
</script>