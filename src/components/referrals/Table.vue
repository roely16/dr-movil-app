<template>
	<div>
		<v-data-table
			:headers="referrals.headers"
			:items="referrals.items"
			:items-per-page="10"
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

			<template v-slot:[`item.emergencia`]="{item}">
				<v-chip small :color="item.emergencia ? 'error' : 'info'">
					{{ item.emergencia ? 'SI' : 'NO' }}
				</v-chip>
			</template>

			<template v-slot:[`item.c_externa`]="{item}">
				<v-chip small :color="item.emergencia ? 'error' : 'info'">
					{{ item.emergencia ? 'SI' : 'NO' }}
				</v-chip>
			</template>

			<template v-slot:[`item.acciones`]="{item}">
				<v-btn @click="showDetail(item)" small icon color="blue-grey darken-1">
					<v-icon>
						mdi-badge-account-horizontal
					</v-icon>
				</v-btn>
			</template>

		</v-data-table>

		<Modal width="1000">
			<template #content>
				<Form></Form>
			</template>
		</Modal>
	</div>
</template>

<script>

	import { mapState, mapMutations } from "vuex"

	import Animation from '@/components/home/Animation'
	import Modal from '@/components/modal/Modal'
	import Form from '@/components/referrals/Form'

	export default {
		components: {
			Animation,
			Modal,
			Form
		},
		data(){
			return{
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
			...mapMutations({
				setShow: 'modal/setShow',
				setReferralDetail: 'referrals/setReferralDetail'
			}),
			showDetail(item){

				console.log(item)

				this.setReferralDetail(item)
				this.setShow(true)

			}
		},
		computed: {
			...mapState({
				loading: state => state.referrals.loading,
				referrals: state => state.referrals.referrals
			})
		}
	}
</script>