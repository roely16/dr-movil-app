<template>
	<v-row class="background" justify="center" align="center" style="height: 100vh;">
		<v-col cols="12">
			<lottie :options="options" :height="400" :width="400"/>
		</v-col>
	</v-row>
</template>

<style>
	.background{
		background: linear-gradient(-45deg, #8AEDF6, #60A2F5, #8AEDF6, #60A2F5);
		background-size: 400% 400%;
		animation: gradient 15s ease infinite;
		height: 100vh;
	}
</style>

<script>

	import Lottie from 'vue-lottie';

	export default {
		
		components: {
			'lottie': Lottie
		},
		data(){
			return{
				options: {
					animationData: require('@/assets/animations/doctor-app.json'),
					loop: true
				}
			}
		}

	}
</script>