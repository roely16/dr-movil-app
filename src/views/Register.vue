<template>
	<v-row no-gutters dense>
		<v-col cols="6" class="ma-0 pa-0 background">
			<Ad animation_name="lock.json" />
		</v-col>
		<v-col>
			<Form />
		</v-col>
	</v-row>
</template>

<style>
	.background{
		background-color: rgb(166 211 65);
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
		},
		data(){
			return{
				e1: null
			}
		}
	}
</script>