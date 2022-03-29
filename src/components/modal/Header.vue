<template>

	<v-app-bar
		color="#77be00"
		dark
		elevation="0"
	>	

		<v-toolbar-title>
			{{ title }}
		</v-toolbar-title>

		<v-spacer></v-spacer>

		<v-btn
			dark
			icon
			@click="setShow(false)"
		>
			<v-icon>mdi-close</v-icon>
		</v-btn>
	</v-app-bar>
		
</template>

<script>

	import { mapMutations } from "vuex"

	export default {
		props: {
			title: String
		},
		methods: {
			...mapMutations({
				setShow: 'modal/setShow'
			})
		}
	}
</script>