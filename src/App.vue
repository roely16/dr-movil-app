<template>
	<v-app>
		<v-main>
			<router-view/>
			<Dialog />
		</v-main>
	</v-app>
</template>

<script>

	import Dialog from '@/components/dialog/Dialog'

	export default {
		name: 'App',
		components: {
			Dialog
		},
		data: () => ({
			
		}),
	};
</script>
