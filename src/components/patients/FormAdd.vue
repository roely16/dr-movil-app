<template>
	<v-form v-model="valid" @submit.prevent="register()" ref="form">
		<v-card color="#fff">
			<Header title="Nuevo Paciente" />

			<v-toolbar
				dark
				flat
			>	
				<v-tabs
					dark
					background-color="#77be00"
					v-model="tab"
				>
					<v-tabs-slider color="white"></v-tabs-slider>

					<v-tab
						v-for="(tab, i) in tabs"
						:key="i"
						:value="tab.nombre"
					>
						{{ tab.nombre }}
					</v-tab>
				</v-tabs>
			</v-toolbar>
			<v-card-text style="height: 700px">
				<component v-bind:is="currentTab"></component>
			</v-card-text>

			<v-card-actions>
				<v-row dense>
					<v-col>
						<v-btn :disabled="saving" :loading="saving" type="submit" class="mr-4" elevation="0" large :dark="!saving" color="#2784FF">
							Guardar
						</v-btn>
						<v-btn :disabled="saving" @click="setShow(false)" elevation="0" large color="grey lighten-2">
							Cancelar
						</v-btn>
					</v-col>						
				</v-row>
			</v-card-actions>
		</v-card>
	</v-form>
</template>

<style scoped>
	.v-text-field--outlined >>> fieldset {
		border-color: rgba(228, 227, 227, 0.986);
		border-radius: 20px;
	}
</style>

<script>

	import { mapMutations, mapState, mapActions } from "vuex"

	import Header from '@/components/modal/Header'

	export default {
		components: {
			Header
		},
		data(){
			return{
				valid: true
			}
		},
		methods: {
			...mapMutations({
				setShow: 'modal/setShow',
				setTab: 'patients/setTab'
			}),
			...mapActions({
				registerPatient: 'patients/registerPatient'
			}),	
			register(){

				this.$refs.form.validate()

				if (this.valid) {
					
					this.registerPatient()
				}
				
			}
		},
		computed: {
			...mapState({
				tabs: state => state.patients.tabs,
				saving: state => state.patients.saving
			}),
			tab: {
				set(value){
					this.setTab(value)
				},
				get(){
					return this.$store.state.patients.tab
				}
			},
			currentTab: function(){

				const name = this.tabs[this.tab].componente

				const AsyncComponent = () => ({
					component: import('@/components/patients/' + name),				
				})
	
				return AsyncComponent

			}
		}
	}
</script>