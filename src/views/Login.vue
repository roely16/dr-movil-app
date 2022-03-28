<template>
	<v-row no-gutters>
		<v-col cols="6" class="ma-0 pa-0">
			<Ad />
		</v-col>
		<v-col>
			<Form />
		</v-col>
	</v-row>
</template>

<style scoped>
	.background{
		background: linear-gradient(-45deg, #00599b, #60A2F5, #8AEDF6, #00599b);
		background-size: 400% 400%;
		animation: gradient 15s ease infinite;
		min-height: 100vh;
	}
</style>

<script>

	import Ad from '@/components/login/Ad'
	import Form from '@/components/login/Form'

	export default {
		components: {
			Ad,
			Form
		}
	}
</script>