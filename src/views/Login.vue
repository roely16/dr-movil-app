<template>
	<v-row no-gutters>
		<v-col v-show="$vuetify.breakpoint.lg || $vuetify.breakpoint.md || $vuetify.breakpoint.xl" cols="12" sm="12" md="6" lg="6" class="ma-0 pa-0 background_login">
			<Ad />
		</v-col>
		<v-col cols="12" sm="12" md="6" lg="6">
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