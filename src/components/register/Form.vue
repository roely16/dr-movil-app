<template>
	<v-row justify="center" align="center" class="container">
		<v-col cols="12">
			<v-row>
				<v-col>
					<v-btn @click="goBack()" color="#2784FF" text>
						<v-icon left>
							mdi-arrow-left
						</v-icon>
						Regresar
					</v-btn>
				</v-col>
			</v-row>
			<v-form>
				<v-row class="mb-4" justify="center">
					<v-col class="text-center" cols="7">
						<v-avatar size="100" rounded="">
							<v-img :src="require('@/assets/img/medicine.png')"></v-img>
						</v-avatar>
					</v-col>
					<v-col class="text-center" cols="7">
						<h1 class="font-weight-light">Regístrate ahora!</h1>
					</v-col>
				</v-row>	
				<v-row justify="center">
					<v-col cols="7">
						<v-text-field type="text" append-icon="mdi-account-circle" hide-details label="Nombres" outlined class="rounded-md"></v-text-field>
					</v-col>
					<v-col cols="7">
						<v-text-field type="text" append-icon="mdi-account-circle" hide-details label="Apellidos" outlined class="rounded-md"></v-text-field>
					</v-col>
					<v-col cols="7">
						<v-text-field type="email" append-icon="mdi-at" hide-details label="Email" outlined class="rounded-md"></v-text-field>
					</v-col>
					<v-col cols="7">
						<v-text-field type="phone" append-icon="mdi-cellphone" hide-details label="Teléfono" outlined class="rounded-md"></v-text-field>
					</v-col>
					<v-col cols="7">
						<v-text-field type="password" append-icon="mdi-lock" hide-details label="Contraseña" outlined class="rounded-md"></v-text-field>
					</v-col>
					<v-col cols="7">
						<v-text-field type="password" append-icon="mdi-lock" hide-details label="Repite la contraseña" outlined class="rounded-md"></v-text-field>
					</v-col>
				</v-row>
				<v-row justify="center">
					<v-col cols="7">
						<v-btn @click="doLogin()" color="#2784FF" dark large elevation="0" block>Registrarse</v-btn>
					</v-col>
				</v-row>
			</v-form>
		</v-col>
	</v-row>
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
	export default {
		methods: {
			goBack(){
				this.$router.back()
			}
		}
	}
</script>