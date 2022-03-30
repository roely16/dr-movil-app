<template>
	<div>
		<v-row justify="center">
			<v-col cols="6">
				<v-card @click="() => {}" min-height="150" max-height="150">
					<v-card-text class="text-center">
						<v-img
							width="50"
							:src="require('@/assets/img/hospital.png')"
						></v-img>
					</v-card-text>
					<v-card-text class="overline text-center">
						Centro de Salud
					</v-card-text>
				</v-card>
			</v-col>
			<v-col cols="6">
				<v-card @click="() => {}" min-height="150">
					<v-card-text class="text-center">
						<v-img
							width="90"
							:src="require('@/assets/img/logo_dr_movil.png')"
						></v-img>
					</v-card-text>
					<v-card-text class="overline text-center">
						Dr. Móvil
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
		<v-row justify="center">
			<v-col cols="8">
				<v-btn @click="setStep(2)" dark color="#2784FF" large elevation="0" block>Continuar</v-btn>
			</v-col>
		</v-row>
	</div>
</template>

<script>

	import { mapMutations } from "vuex"

	export default {
		methods: {
			...mapMutations({
				setStep: 'register/setStep'
			}),
		}
	}
</script>