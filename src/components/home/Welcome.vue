<template>
	<div>
		<v-row justify="center" align="center">
			<v-col cols="12">
				<lottie :options="options" :height="600" :width="600"/>
			</v-col>
		</v-row>
	</div>
</template>

<script>

	import Lottie from 'vue-lottie';

	export default {
		components: {
			'lottie': Lottie
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