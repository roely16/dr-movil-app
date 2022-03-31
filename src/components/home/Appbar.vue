<template>
	<v-app-bar height="100" color="#fff" elevation="0">
		<v-app-bar-nav-icon @click.stop="setShowSidebar(!show_sidebar)" v-if="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"></v-app-bar-nav-icon>
		<v-toolbar-title>
			<v-btn @click="goBack()" v-if="isGoBack" small text>
				<v-icon>
					mdi-arrow-left
				</v-icon>
			</v-btn>
			<span class="text-h5 font-weight-light">
				<strong>
					{{ barTitle }}
				</strong>
			</span>
		</v-toolbar-title>

		<v-spacer></v-spacer>
		
		<v-avatar :size="mobile ? 50 : 100" class="mr-4" rounded>
			<v-img
				:src="require('@/assets/img/ave.png')"
				
				contain
			>
			</v-img>
		</v-avatar>
		<v-avatar :size="mobile ? 30 : 60" class="mr-4" rounded>
			<v-img
				:src="require('@/assets/img/muni.png')"
				contain
			>
			</v-img>
		</v-avatar>
		<v-avatar :size="mobile ? 40 : 80" class="mr-4" rounded>
			<v-img
				:src="require('@/assets/img/das.png')"
				contain
			>
			</v-img>
		</v-avatar>
		<v-avatar :size="mobile ? 75 : 150" class="mr-4" rounded>
			<v-img
				:src="require('@/assets/img/gobierno.png')"
				contain
			>
			</v-img>
		</v-avatar>
		<v-menu offset-y>
			<template v-slot:activator="{ on, attrs }">
				<v-avatar v-bind="attrs" v-on="on">
					<v-img :src="require('@/assets/img/avatar.png')"></v-img>
				</v-avatar>
			</template>
			<v-list>
				<v-list-item
					v-for="(item, index) in profile_menu"
					:key="index"
					:to="{name: 'login'}"
				>
					<v-list-item-title >{{ item.title }}</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-menu>
		
	</v-app-bar>
</template>

<script>

	import { mapMutations, mapState } from "vuex"

	export default {
		name: 'appbar',
		data(){
			return{
				profile_menu: [
					{
						title: 'Salir'
					}
				]
			}
		},
		methods: {
			goBack(){

				this.$router.push(this.$route.meta.back_route)
			},
			...mapMutations({
				setShowSidebar: 'home/setShowSidebar'
			})
		},
		computed: {
			isGoBack: function(){
				return this.$route.meta.back_route
			},
			barTitle: function(){
				return this.$route.meta.title
			},
			mobile: function(){

				if (this.$vuetify.breakpoint.md || this.$vuetify.breakpoint.lg || this.$vuetify.breakpoint.xl) {
					return false
				}

				return true
			},
			...mapState({
				show_sidebar: state => state.home.show_sidebar
			})
		}
	}
</script>
