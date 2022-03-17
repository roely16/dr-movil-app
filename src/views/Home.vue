<template>
	<div>
		<Sidebar />
		<Appbar />

		<v-container fluid class="home">
			<router-view></router-view>
		</v-container>

	</div>
</template>

<style>
	.home{
		background-color: #F9FAFF;
	}
</style>

<script>

	import Sidebar from '@/components/home/Sidebar'
	import Appbar from '@/components/home/Appbar'

	export default {
		name: 'Home',
		components: {
			Sidebar,
			Appbar,
		}
	}
</script>
