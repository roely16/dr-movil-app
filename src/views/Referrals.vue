<template>
	<div>
		<v-row align="center">
			<v-col cols="4">
				<v-text-field outlined label="Buscar" append-icon="mdi-magnify" hide-details class="elevation-0"></v-text-field>
			</v-col>
		</v-row>
		<v-row>
			<v-col>
				<v-data-table
					:headers="referrals.headers"
					:items="referrals.items"
					:items-per-page="5"
					class="elevation-0"
					hide-default-footer
					:loading="loading"
					loading-text=""
				>
					<template v-slot:no-data>
						<Animation :width="300" :height="300" :options="empty_animation"></Animation>
						<div class="mb-4">
							<span class="overline">
								No hay datos disponibles
							</span>
						</div>
					</template>

					<template v-slot:progress>
						<Animation :width="300" :height="300" :options="loading_animation"></Animation>
						<div class="mb-4 text-center">
							<span class="overline">
								Cargando...
							</span>
						</div>
					</template>

				</v-data-table>
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

	import {mapState, mapActions} from 'vuex'

	import Animation from '@/components/home/Animation'

	export default {
		components: {
			Animation
		},
		data(){
			return{
				headers: [],
				items: [],
				empty_animation: {
					animationData: require('@/assets/animations/empty.json'),
					loop: false
				},
				loading_animation: {
					animationData: require('@/assets/animations/loading.json'),
					loop: true
				}
			}
		},
		methods: {
			...mapActions({
				fetchReferrals: 'referrals/fetchReferrals'
			})
		},
		computed: {
			...mapState({
				loading: state => state.referrals.loading,
				referrals: state => state.referrals.referrals
			})
		},
		mounted(){
			this.fetchReferrals()
		}
	}
</script>