<template>
	<div>
		<v-dialog
			v-model="show"
			:width="width"
			@click:outside="setShow(false)"
			@keydown.esc="setShow(false)"
			:fullscreen="fullscreen"
			scrollable
			hide-overlay
			transition="dialog-bottom-transition"
		>
			<slot name="content"></slot>
		</v-dialog>
	</div>
</template>

<script>

	import { mapMutations, mapState } from "vuex"

	export default {
		props: {
			fullscreen: {
				type: Boolean,
				default: false
			},
			width: String
		},
		methods: {
			...mapMutations({
				setShow: 'modal/setShow'
			})
		},
		computed: {
			...mapState({
				show: state => state.modal.show
			})
		}

	}
</script>