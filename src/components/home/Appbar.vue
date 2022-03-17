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

		<v-btn x-large class="mr-4" icon>
			<v-icon>mdi-bell</v-icon>
		</v-btn>
		<v-menu offset-y>
			<template v-slot:activator="{ on, attrs }">
				<v-avatar v-bind="attrs" v-on="on">
					<v-img :src="require('@/assets/img/medical-care.png')"></v-img>
				</v-avatar>
			</template>
			<v-list>
				<v-list-item
					v-for="(item, index) in profile_menu"
					:key="index"
				>
					<v-list-item-title>{{ item.title }}</v-list-item-title>
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
