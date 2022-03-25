<template>
	<div>
		<v-row justify="center">
			<v-col cols="6">
				<v-text-field v-model="new_user.nombres" type="text" append-icon="mdi-account-circle" hide-details label="Nombres" outlined class="rounded-md"></v-text-field>
			</v-col>
			<v-col cols="6">
				<v-text-field v-model="new_user.apellidos" type="text" append-icon="mdi-account-circle" hide-details label="Apellidos" outlined class="rounded-md"></v-text-field>
			</v-col>
			<v-col cols="6">
				<v-text-field v-model="new_user.email" type="email" append-icon="mdi-at" hide-details label="Email" outlined class="rounded-md"></v-text-field>
			</v-col>
			<v-col cols="6">
				<v-text-field v-model="new_user.telefono" type="phone" append-icon="mdi-cellphone" hide-details label="Teléfono" outlined class="rounded-md"></v-text-field>
			</v-col>
			<v-col cols="6">
				<v-text-field v-model="new_user.password" @click:append="showPassword = !showPassword" :type="!showPassword ? 'password' : 'text'" :append-icon="!showPassword ? 'mdi-lock' : 'mdi-lock-open-variant'" hide-details label="Contraseña" outlined class="rounded-md"></v-text-field>
			</v-col>
			<v-col cols="6">
				<v-text-field v-model="new_user.repeat_password" @click:append="showRepeatPassword = !showRepeatPassword" :type="!showRepeatPassword ? 'password' : 'text'" :append-icon="!showRepeatPassword ? 'mdi-lock' : 'mdi-lock-open-variant'" hide-details label="Repite la contraseña" outlined class="rounded-md"></v-text-field>
			</v-col>
		</v-row>
		<v-row justify="center">
			<v-col cols="8" class="mt-10">
				<v-btn @click="registerNewUser()" color="#2784FF" dark large elevation="0" block>Registrarse</v-btn>
			</v-col>
			<v-col cols="8">
				<v-btn @click="setStep(1)" large elevation="0" block>Regresar</v-btn>
			</v-col>
		</v-row>
	</div>
</template>

<style scoped>

	.container {
		height: 100vh
	}
	.v-text-field--outlined >>> fieldset {
		border-color: rgba(228, 227, 227, 0.986);
		border-radius: 20px;
		background-color: #F9FAFF;
	}

</style>

<script>
	
	import { mapMutations, mapState, mapActions } from "vuex"
	
	export default {
		data(){
			return{
				showPassword: false,
				showRepeatPassword: false
			}
		},
		methods: {
			...mapMutations({
				setStep: 'register/setStep'
			}),
            ...mapActions({
                registerNewUser: 'register/registerNewUser'
            })
		},
		computed: {
			...mapState({
				new_user: state => state.register.new_user
			})
		}
	}
</script>
