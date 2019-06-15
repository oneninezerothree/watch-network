<template>
  <div class="pr_carousel">
    <div class="swiper" v-if="bannerUrl">
      <swiper :options='swiperOption'>
        <swiper-slide v-for="(item,index) of bannerUrl" :key="index">
          <img :src="item">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination">
      </div>
      </swiper>
    </div>

    <div class="yaofeng">
      <img src="//image7.wbiao.co/mall/d1234d43092e4c9e8d0a284670206c72.png" alt>
      <span class="yaofeng-price">
        <i>¥</i>{{handprice}}
      </span>
    </div>
    <div class="tag">
      <img
        src="//image7.wbiao.co/shop/ee1b0a5efdf74b16b8a754f376eb6571.png?x-oss-process=image/resize,m_pad,w_80,h_80,color_ffffff"
        alt
      >
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
    props:{
        bannerUrl:Array,
        handprice:String
    },
    data(){
        return{
            bannerImg:[{
                id:'0001',
                imgUrl:'//image7.wbiao.co/shop/b375d2dced5644f6b5d46806cf16d2e8.jpg'
            },
            {
                id:'0002',
                imgUrl:'//image7.wbiao.co/shop/8200ea5366d647acb3b4559694d4fbcd.jpg'
            },
            {
                id:'0003',
                imgUrl:'//image7.wbiao.co/shop/c0fa22c052a2420da5715fd89fb1d273.jpg'
            },
            {
                id:'0004',
                imgUrl:'//image7.wbiao.co/shop/1e5b36b80bfe4a308aaff4554bf717d6.jpg'
            }
            ],
            swiperOption:{
                pagination:{
                    el:'.swiper-pagination'
                },
                loop:true
            }
        }
    }
});
</script>
<style lang="scss" scoped>
.pr_carousel {
    background-color: #fff;
    padding: 10px 8%;
    overflow: hidden;
    position: relative;
}
.pr_carousel .pr_carousel_content {
    position: relative;
    overflow: hidden;
}
.swiper-container-autoheight, .swiper-container-autoheight .swiper-slide {
    height: auto;
}
.W_detail a {
    display: block;
}
.pr_carousel img {
    width: auto;
    height: 350px;
    margin: 0 auto;
}
.pr_carousel .pr_carousel_page {
    width: 100%;
    height: 20px;
    text-align: center;
}
.pr_carousel .yaofeng {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 11;
    background-size: cover;
}
.pr_carousel .yaofeng img {
    width: 100%;
    height: 100%;
}
.pr_carousel .yaofeng .yaofeng-price {
    position: absolute;
    right: 7%;
    bottom: 12%;
    color: #fff;
    font-size: 36px;
}
.pr_carousel .yaofeng .yaofeng-price i {
    font-size: 16px;
}
.pr_carousel .tag {
    width: 80px;
    height: 80px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 100;
}
.pr_carousel .tag img {
    width: 100%;
    height: auto;
}

</style>
