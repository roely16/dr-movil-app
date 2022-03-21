<template>
	<v-row no-gutters dense>
		<v-col class="background ma-0 pa-0">
			<Ad animation_name="lock.json" />
		</v-col>
		<v-col>
			<Form />
		</v-col>
	</v-row>
</template>

<style>
	.background{
		background: linear-gradient(-45deg, #8AEDF6, #60A2F5, #8AEDF6, #60A2F5);
		background-size: 400% 400%;
		animation: gradient 15s ease infinite;
		min-height: 100vh;
	}
</style>

<script>

	import Ad from '@/components/login/Ad'
	import Form from '@/components/register/Form'

	export default {
		components: {
			Ad,
			Form
		}
	}
</script>