<template>
	<div>
		<v-row justify="center" align="center" style="height: 100vh;">
			<v-col cols="12">
				<v-form>
					<v-row class="mb-4" justify="center">
						<v-col class="text-center" cols="7">
							<v-avatar size="150" rounded="">
								<v-img contain :src="require('@/assets/img/logo_dr_movil.png')"></v-img>
							</v-avatar>
						</v-col>
						<v-col class="text-center" cols="7">
							<h1 class="font-weight-light mb-4">Bienvenido!</h1>
						</v-col>
					</v-row>
					<v-row justify="center">
						<v-col cols="7">
							<v-text-field v-model="user.email" type="email" append-icon="mdi-at" hide-details label="Email" outlined class="rounded-md"></v-text-field>
						</v-col>
					</v-row>
					<v-row justify="center">
						<v-col cols="7">
							<v-text-field @click:append="showPassword = !showPassword" v-model="user.password" :type="!showPassword ? 'password' : 'text'" :append-icon="!showPassword ? 'mdi-lock ': 'mdi-lock-open-variant'" hide-details label="Password" outlined></v-text-field>
						</v-col>
					</v-row>
					<v-row justify="center">
						<v-col cols="7">
							<v-btn @click="doLogin(user)" :disabled="!isCompleted" color="#2784FF" :dark="isCompleted" large elevation="0" block>Login</v-btn>
						</v-col>
					</v-row>
				</v-form>
			</v-col>
			<v-col class="text-center" cols="12">
				<span class="font-weight-light">¿No tienes una cuenta?
					<strong>
						<v-btn :to="{name: 'register'}" color="#2784FF" text>
							Registrate
						</v-btn>
					</strong>
				</span>
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

	import { mapActions } from 'vuex'

	export default {
		data(){
			return{
				user: {
					email: null,
					password: null
				},
				showPassword: false
			}
		},
		methods: {
			...mapActions({
				doLogin: 'login/doLogin'
			})
		},
		computed: {
			isCompleted: function(){

				if (this.user.email && this.user.password) {
					return true
				}

				return false
			}
		}
	}
</script>