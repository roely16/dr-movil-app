<template>
    <v-card class="pa-10 text-center">
        <v-card-text>
            <Animation :options="animation" :height="150"  />
        </v-card-text>
        <v-card-text>
            <span class="font-weight-light text-h6">
                {{ message }}
            </span>
        </v-card-text>
        <v-card-text>
            <v-btn @click="hide()" color="primary" text>
                ENTENDIDO
            </v-btn>
        </v-card-text>
    </v-card>
</template>

<script>

    import { mapState, mapMutations } from 'vuex'

    import Animation from '@/components/home/Animation'

    export default {
        components: {
            Animation
        },
        data(){
            return{
                animation: {
					animationData: require('@/assets/animations/info.json'),
					loop: false
				},
            }
        },
        methods: {
            ...mapMutations({
                hide: 'dialog/hide'
            })
        },
        computed: {
            ...mapState({
                show: state => state.dialog.show,
                title: state => state.dialog.title,
                message: state => state.dialog.message,
                type: state => state.dialog.type
            })
        }        
    }
</script>