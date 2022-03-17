<template>
	<v-app-bar height="100" color="#fff" elevation="0">
		<v-toolbar-title>
			<v-btn small text>
				<v-icon>
					mdi-arrow-left
				</v-icon>
			</v-btn>
			<span class="text-h5">
				<strong>
					Lista de Pacientes
				</strong>
			</span>
		</v-toolbar-title>

		<v-spacer></v-spacer>

		<v-btn x-large class="mr-4" icon>
			<v-icon>mdi-bell</v-icon>
		</v-btn>
		<v-avatar>
			<v-img :src="require('@/assets/img/medical-care.png')"></v-img>
		</v-avatar>

	</v-app-bar>
</template>

<script>
	export default {
		name: 'Sidebar',
		
	}
</script>
