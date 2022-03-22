<template>
	<div>
		<v-row align="center">
			<v-col cols="4">
				<v-text-field outlined label="Buscar" append-icon="mdi-magnify" hide-details class="elevation-0"></v-text-field>
			</v-col>
		</v-row>
		<v-row>
			<v-col>
				<Table />
			</v-col>
		</v-row>
	</div>
</template>

<style scoped>
	.v-text-field--outlined >>> fieldset {
		border-color: rgba(228, 227, 227, 0.986);
		border-radius: 20px;
		background-color: #fff;
	}
</style>

<script>

	import { mapActions} from 'vuex'

	import Table from '@/components/referrals/Table'

	export default {
		components: {
			Table
		},
		methods: {
			...mapActions({
				fetchReferrals: 'referrals/fetchReferrals'
			})
		},
		mounted(){
			this.fetchReferrals()
		}
	}
</script>