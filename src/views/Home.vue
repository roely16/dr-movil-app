<template>
	<div>
		<Sidebar />
		<Appbar />

		<v-container fluid class="home">
			<Welcome v-if="isHome" />
			<router-view else></router-view>
		</v-container>

	</div>
</template>

<style>
	.home{
		/* background-color: #F9FAFF; */
	}
</style>

<script>

	import Sidebar from '@/components/home/Sidebar'
	import Appbar from '@/components/home/Appbar'
	import Welcome from '@/components/home/Welcome'

	export default {
		name: 'Home',
		components: {
			Sidebar,
			Appbar,
			Welcome
		},
		computed: {
			isHome: function(){
				
				if (this.$route.name != 'home') {
					
					return false

				}

				return true
			}
		}
	}
</script>
