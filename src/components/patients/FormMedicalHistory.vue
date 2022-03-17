<template>
	<v-row style="background-color: white" class="mt-2">
		<v-col cols="6">
			<v-textarea no-resize rows="4" label="Médicos" outlined counter maxlength="4000" class="elevation-0"></v-textarea>
		</v-col>
		<v-col cols="6">
			<v-textarea no-resize rows="4" label="Mentales" outlined counter maxlength="4000" class="elevation-0"></v-textarea>
		</v-col>
		<v-col cols="6">
			<v-textarea no-resize rows="4" label="Quirúrgicos" outlined counter maxlength="4000" class="elevation-0"></v-textarea>
		</v-col>
		<v-col cols="6">
			<v-textarea no-resize rows="4" label="Traumáticos" outlined counter maxlength="4000" class="elevation-0"></v-textarea>
		</v-col>
		<v-col cols="6">
			<v-textarea no-resize rows="4" counter maxlength="4000" label="Alérgicos" outlined class="elevation-0"></v-textarea>
		</v-col>
	</v-row>
</template>

<style scoped>
	.v-text-field--outlined >>> fieldset {
		border-color: rgba(228, 227, 227, 0.986);
		border-radius: 20px;
		background-color: #F9FAFF;
	}

</style>

<script>
	export default {

	}
</script>