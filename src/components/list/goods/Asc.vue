<template>
  <div class="W_gn_goods" id="W_gn_goods">
    <div class="commodity" v-if="list">
      <router-link class="item" v-for="item of list" :key="item.id" sale-status="1" shop-type="1" :to="'/detail/'+item.id" tag="a">
        <p class="p1">
          <img
            :src="item.imgUrl"
            alt
          >
        </p>
        <p class="p2 esp1">
          <em class="em_brand">{{item.name}}</em> {{item.title}}
        </p>
        <p class="p3">
          {{item.newprice}}
          <del>{{item.oldprice}}</del>
        </p>
        <p class="p4">
          <span>{{item.Management}}</span>
          <span>{{item.color}}</span>
        </p>
      </router-link>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
    props:{
        list:Array
    },
    mounted(){
    }
});
</script>
<style lang="scss" scoped>
.W_gn_goods .commodity {
  overflow: hidden;
  background: #f1f1f1;
}
.W_gn_goods .commodity a:nth-child(odd) {
    margin-right: 0;
}
.W_gn_goods .commodity a:nth-child(odd) {
    margin-right: 1.866%;
}

.W_gn_goods .commodity a {
    position: relative;
}
.W_gn_goods .commodity a {
    float: left;
    width: 49.067%;
    height: 320px;
    background: #fff;
    margin-top: 8px;
}
.W_gn_goods .commodity a p.p1 {
    position: relative;
    overflow: hidden;
    margin-top: 12px;
    height: 220px;
}

.W_gn_goods .commodity a p {
    padding: 0 12px;
    margin: 0 auto;
}
.W_gn_goods .commodity a p.p1 img {
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
    width: auto;
    height: 100%;
}

main img {
    width: 100%;
    border: none;
    display: block;
}
.W_gn_goods .commodity a p.p1 .yaofeng, .Wb_tj_goods .goods_list .g_img .yaofeng {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
}
.W_gn_goods .commodity a p.p1 .yaofeng img, .Wb_tj_goods .goods_list .g_img .yaofeng img {
    position: relative;
    width: 100%;
}
.W_gn_goods .commodity a p.p1 .yaofeng .yaofeng-price, .Wb_tj_goods .goods_list .g_img .yaofeng .yaofeng-price {
    position: absolute;
    right: 7%;
    bottom: 12%;
    color: #fff;
    font-size: 14px;
    padding-left: 8px;
    text-align: left;
}
.W_gn_goods .commodity a p.p1 .yaofeng .yaofeng-price i, .Wb_tj_goods .goods_list .g_img .yaofeng .yaofeng-price i {
    position: absolute;
    bottom: -1px;
    left: 0;
    transform: scale(.75);
}
.W_gn_goods .commodity a p.p2 {
    padding-top: 14px;
    font-size: 12px;
    color: #666;
}

.W_gn_goods .commodity a p {
    padding: 0 12px;
    margin: 0 auto;
}
.esp1 {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.W_gn_goods .commodity a p.p2 .em_brand {
    font-weight: 700;
    color: #333;
}
em, i {
    font-style: normal;
}
.W_gn_goods .commodity a p.p3 {
    font-size: 16px;
    color: #333;
    line-height: 12px;
    padding: 8px 12px;
}
.W_gn_goods .commodity a p del {
    color: #ccc;
    font-size: 12px;
    margin-left: 4px;
}
.W_gn_goods .commodity a p.p4 {
    line-height: 10px;
}
.W_gn_goods .commodity a p.p4 span:first-child {
    color: #cc9952;
}

.W_gn_goods .commodity a p.p4 span {
    border-radius: 2px;
    border: 1px solid #cc9952;
    font-size: 10px;
    line-height: 10px;
    text-align: center;
    padding: 2px 3px 1px;
    display: inline-block;
}
.W_gn_goods .commodity a p.p4 span:nth-child(2n) {
    border: 1px solid #cc5252;
    color: #cc5252;
    margin-left: 0.225rem;
}
.W_gn_goods .commodity a .tag {
    width: 50px;
    height: 50px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
}
.W_gn_goods .commodity a .tag img {
    width: 100%;
    height: auto;
}
.ding{
    height: 4rem;
}
</style>

