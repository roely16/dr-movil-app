<template>
	<div>
		<v-row justify="center" align="center" style="height: 100vh;">
			<v-col cols="12">
				<v-form>
					<v-row class="mb-4" justify="center">
						<v-col class="text-center" cols="7">
							<v-avatar size="100" rounded="">
								<v-img :src="require('@/assets/img/medicine.png')"></v-img>
							</v-avatar>
						</v-col>
						<v-col class="text-center" cols="7">
							<h1 class="font-weight-light">Bienvenido!</h1>
							<span class="font-weight-light">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, reprehenderit.
							</span>
						</v-col>
					</v-row>
					<v-row justify="center">
						<v-col cols="7">
							<v-text-field type="email" append-icon="mdi-at" hide-details label="Email" outlined class="rounded-md"></v-text-field>
						</v-col>
					</v-row>
					<v-row justify="center">
						<v-col cols="7">
							<v-text-field type="password" append-icon="mdi-lock" hide-details label="Password" outlined></v-text-field>
						</v-col>
					</v-row>
					<v-row justify="center">
						<v-col cols="7">
							<v-btn @click="doLogin()" color="#2784FF" dark large elevation="0" block>Login</v-btn>
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
	export default {
		methods: {
			doLogin(){
				console.log('go to home')
				this.$router.push({ name: 'home' })
			}
		}
	}
</script>