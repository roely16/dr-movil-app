<template>
	<v-row no-gutters>
		<v-col class="ma-0 pa-0">
			<Ad />
		</v-col>
		<v-col>
			<Form />
		</v-col>
	</v-row>
</template>

<style scoped>
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