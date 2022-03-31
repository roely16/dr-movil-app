<template>
	<v-row justify="center" align="center" class="pl-5 pr-5">
		<v-col cols="12">
			<v-row class="mt-4">
				<v-col>
					<v-btn @click="goBack()" color="#2784FF" text>
						<v-icon left>
							mdi-arrow-left
						</v-icon>
						Regresar
					</v-btn>
				</v-col>
			</v-row>

            <v-row justify="center">
                <v-col class="text-center" cols="12">
                    <v-avatar size="150" rounded="">
                        <v-img contain :src="require('@/assets/img/logo_dr_movil.png')"></v-img>
                    </v-avatar>
                </v-col>
                <v-col class="text-center" cols="7">
                    <h1 class="font-weight-light">Regístrate ahora!</h1>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="12">
                    <v-stepper outlined v-model="step">
                        <v-stepper-header class="elevation-0">
                            <v-stepper-step
                                :complete="step > 1"
                                step="1"
                            >
                                Tipo de Usuario
                            </v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step
                                :complete="step > 2"
                                step="2"
                            >
                                Asignación de clínica
                            </v-stepper-step>

                            <v-divider></v-divider>

                            <v-stepper-step
                                :complete="step > 3"
                                step="3"
                            >
                                Datos Personales
                            </v-stepper-step>
                        </v-stepper-header>
                        <v-divider></v-divider>
                        <v-stepper-items>
                            <v-stepper-content step="1">
                                <UserType />
                            </v-stepper-content>
                            <v-stepper-content step="2">
                                <Selection />
                            </v-stepper-content>
                            <v-stepper-content step="3">
                                 <Information />
                            </v-stepper-content>
                        </v-stepper-items>
                    </v-stepper>
                </v-col>
            </v-row>
		</v-col>
	</v-row>
</template>

<script>

	import { mapState, mapMutations } from 'vuex'

    import UserType from '@/components/register/UserType'
	import Selection from '@/components/register/Selection'
	import Information from '@/components/register/Information'

	export default {
		components: {
			Selection,
			Information,
            UserType
		},
		methods: {
			goBack(){
				this.$router.back()
			},
            ...mapMutations({
                resetNewUser: 'register/resetNewUser'
            })
		},
        computed: {
            ...mapState({
                step: state => state.register.step,
                new_user: state => state.register.new_user
            })
        },
        mounted(){
            this.resetNewUser()
        }
        
	}
</script>