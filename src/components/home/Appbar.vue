<template>
	<v-app-bar height="100" color="#fff" elevation="0">
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

		<v-avatar size="100" class="mr-4" rounded>
			<v-img
				:src="require('@/assets/img/ave.png')"
				
				contain
			>
			</v-img>
		</v-avatar>
		<v-avatar size="60" class="mr-4" rounded>
			<v-img
				:src="require('@/assets/img/muni.png')"
				
				contain
			>
			</v-img>
		</v-avatar>
		<v-avatar size="80" class="mr-4" rounded>
			<v-img
				:src="require('@/assets/img/das.png')"
				
				contain
			>
			</v-img>
		</v-avatar>
		<v-avatar size="150" class="mr-4" rounded>
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
				this.$router.back()
			}
		},
		computed: {
			isGoBack: function(){
				return this.$route.meta.goBack
			},
			barTitle: function(){
				return this.$route.meta.title
			}
		}
	}
</script>
