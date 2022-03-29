<template>
		<v-row justify="center" align="center">
			<v-col class="text-center" justify="center" align-self="center" cols="6">
				<!-- <lottie :options="options" :height="600" :width="600"/> -->
				<v-img
					:src="require('@/assets/img/logo_dr_movil.png')"
					contain
					height="600"
					width="600"
				>
				</v-img>
			</v-col>
		</v-row>
</template>

<script>

	// import Lottie from 'vue-lottie';

	export default {
		components: {
			// 'lottie': Lottie
		},
		data(){
			return{
				options: {
					animationData: require('@/assets/animations/welcome-app.json'),
					loop: true
				}
			}
		}
	}
</script>