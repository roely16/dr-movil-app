<template>
	<v-row no-gutters>
		<v-col cols="6" class="ma-0 pa-0 background_login">
			<Ad />
		</v-col>
		<v-col>
			<Form />
		</v-col>
	</v-row>
</template>

<style scoped>
	.background_login{
		background-color: rgb(166 211 65);
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