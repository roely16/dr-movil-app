<template>
    <div>
        <v-dialog
            v-model="show"
            width="500"
            @click:outside="hide()"
			@keydown.esc="hide()"
        >
            <Error v-if="type === 'error'" />
            <Info v-if="type === 'info'" />
            <Success v-if="type === 'success'" />
        </v-dialog>
    </div>
</template>

<script>
    
    import { mapState, mapMutations } from 'vuex'

    import Error from '@/components/dialog/Error'
    import Info from '@/components/dialog/Info'
    import Success from '@/components/dialog/Success'

    export default {
        components: {
            Error,
            Info,
            Success
        },
        data(){
            return{
                animation: {
					animationData: require('@/assets/animations/error.json'),
					loop: false
				},
            }
        },
        methods: {
            ...mapMutations({
                setShow: 'dialog/setShow',
                hide: 'dialog/hide'
            })
        },
        computed: {
            ...mapState({
                type: state => state.dialog.type,
                show: state => state.dialog.show
            })
        }
    }
</script>