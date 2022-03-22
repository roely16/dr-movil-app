<template>
	<div>
		<v-card color="#fff">
			<Header title="Paciente Referido" />

			<v-card-text>
				<v-row>
					<v-col cols="6">
						<span class="overline">Nombre del Paciente:</span>
						<h2>
							{{ referral_detail.nombre }}
						</h2>
					</v-col>
					<v-col cols="3">
						<span class="overline">Edad:</span>
						<h2>
							{{ referral_detail.edad }}
						</h2>
					</v-col>
					<v-col cols="3">
						<span class="overline">Sexo:</span>
						<h2>
							{{ referral_detail.sexo }}
						</h2>
					</v-col>
					<v-col cols="6">
						<span class="overline">Dirección del Paciente:</span>
						<h2>
							{{ referral_detail.direccion }}
						</h2>
					</v-col>
				</v-row>

				<v-divider class="mb-4 mt-4"></v-divider>
				<v-row>
					<v-col cols="6">
						<v-textarea rows="4" no-resize label="Resumen de la evolución" outlined counter maxlength="4000" class="elevation-0"></v-textarea>
					</v-col>
					<v-col cols="6">
						<v-textarea rows="4" no-resize label="Tratamiento brindado" outlined counter maxlength="4000" class="elevation-0"></v-textarea>
					</v-col>
					<v-col cols="6">
						<v-textarea rows="4" no-resize label="Diagnóstico" outlined counter maxlength="4000" class="elevation-0"></v-textarea>
					</v-col>
					<v-col cols="6">
						<v-textarea rows="4" no-resize label="Recomendaciones" outlined counter maxlength="4000" class="elevation-0"></v-textarea>
					</v-col>
				</v-row>
			</v-card-text>
			<v-card-actions>
				<v-row dense>
					<v-col>
						<v-btn class="mr-4" elevation="0" large dark color="#2784FF">
							Guardar
						</v-btn>
						<v-btn @click="setShow(false)" elevation="0" large color="grey lighten-2">
							Cancelar
						</v-btn>
					</v-col>						
				</v-row>
			</v-card-actions>
		</v-card>
	</div>
</template>


<style scoped>

	.v-text-field--outlined >>> fieldset {
		border-color: rgba(228, 227, 227, 0.986);
		border-radius: 20px;
		background-color: #F9FAFF;
	}
	.v-autocomplete--outlined >>> fieldset {
		border-color: rgba(228, 227, 227, 0.986);
		border-radius: 20px;
		background-color: white;
	}

</style>

<script>

	import { mapMutations, mapState } from 'vuex'

	import Header from '@/components/modal/Header'
	
	export default {
		components: {
			Header
		},
		methods: {
			...mapMutations({
				setShow: 'modal/setShow'
			})
		},
		computed: {
			...mapState({
				referral_detail: state => state.referrals.referral_detail
			})
		}		
	}
</script>