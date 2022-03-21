<template>
	<lottie :options="options" :width="width" :height="height"></lottie>
</template>

<script>

	import Lottie from 'vue-lottie';

	export default {
		props: {
			options: Object,
			width: Number,
			height: Number
		},
		components: {
			'lottie': Lottie
		}
	}
</script>