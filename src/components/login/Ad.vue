<template>
	<v-row style="min-height: 100vh" justify="center" align="center">
		<v-col cols="12">
			<lottie :options="options" :height="400" :width="400"/>
		</v-col>
	</v-row>
</template>

<style>
	/* .background{
		background: linear-gradient(-45deg, #8AEDF6, #60A2F5, #8AEDF6, #60A2F5);
		background-size: 400% 400%;
		animation: gradient 15s ease infinite;
		height: 100vh;
	} */
</style>

<script>

	import Lottie from 'vue-lottie';

	export default {
		props: {
			animation_name: {
				type: String,
				default: 'doctor-app.json'
			}
		},
		components: {
			'lottie': Lottie
		},
		data(){
			return{
				options: {
					animationData: require('@/assets/animations/' + this.animation_name),
					loop: true
				}
			}
		}

	}
</script>