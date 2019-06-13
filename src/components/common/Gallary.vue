<template>
    <div class="container"  @click.stop="handleGallaryClick">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <swiper-slide
                    v-for="(item,index) of imgs"
                    :key="index"
                >
                    <img :src="item" class="gallary-img">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props:{
        imgs:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return {
            swiperOptions:{
                pagination: {
                    el: '.swiper-pagination',
                    type : 'fraction',
                },
                observeParents: true,
                observer: true           
            }
        }
    },
    methods:{
        handleGallaryClick(){
            this.$emit('close')
        }
    }
})
</script>
<style lang="scss" scoped>
    .swiper-container{
        overflow: inherit!important;
    }
    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 99;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: #000;
        .wrapper{
            height: 0;
            width: 100%;
            padding-bottom: 100%;
            .gallary-img{
                width: 100%;
            }
            .swiper-pagination{
                color:#fff;
                bottom: -1rem;
            }
        }
    }
</style>
