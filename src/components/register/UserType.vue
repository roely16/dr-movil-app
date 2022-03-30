<template>
	<div>
		<v-row justify="center">
			<v-col cols="6" v-for="(type, key) in types_user" :key="key">
				<v-badge
					bordered
					color="success"
					icon="mdi-check"
					overlap
					:value="type.select"
				>
					<v-card :color="type.select ? '#f0f0f0' : null" @click="setTypeUser(type)" max-width="300">
						<v-card-text class="text-center">
							<v-img
								height="100"
								contain
								:src="require('@/assets/img/' + type.icono)"
							></v-img>
						</v-card-text>
						<v-card-text class="overline text-center">
							{{ type.nombre }}
						</v-card-text>
					</v-card>
				</v-badge>
			</v-col>
		</v-row>
		<v-row justify="center">
			<v-col cols="8">
				<v-btn :disabled="!type_user.select" @click="continueStep()" :dark="type_user.select" color="#2784FF" large elevation="0" block>Continuar</v-btn>
			</v-col>
		</v-row>
	</div>
</template>

<script>

	import { mapMutations, mapActions, mapState } from "vuex"

	export default {
		methods: {
			...mapMutations({
				setStep: 'register/setStep',
				setTypeUser: 'register/setTypeUser'
			}),
			...mapActions({
				fetchTypesUser: 'register/fetchTypesUser',
				fetchData: 'register/fetchData'
			}),
			continueStep(){

				this.fetchData()
				this.setStep(2)

			}
		},
		computed: {
			...mapState({
				types_user: state => state.register.types_user,
				type_user: state => state.register.type_user
			})
		},
		mounted(){
			this.fetchTypesUser()
		}
	}
</script>