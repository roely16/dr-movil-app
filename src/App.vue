<template>
	<v-app>
		<v-main>
		<router-view/>
		</v-main>
	</v-app>
</template>

<style scoped>

	.v-text-field--outlined >>> fieldset {
		border-color: rgba(228, 227, 227, 0.986);
		border-radius: 20px;
		background-color: white;
	}
	.v-autocomplete--outlined >>> fieldset {
		border-color: rgba(228, 227, 227, 0.986);
		border-radius: 20px;
		background-color: white;
	}
	
</style>

<script>

export default {
	name: 'App',

	data: () => ({
		//
	}),
};
</script>
