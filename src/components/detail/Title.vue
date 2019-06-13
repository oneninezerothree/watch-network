<template>
  <div class="pr_title">
    <div class="price">
      <div class="price_a">
        <span class="price_a_jiage">
          <i class="wbPrice">{{newprice}}</i>
        </span>
        <span class="price_b_jiage">{{oldprice}}</span>
        <span class="price_a_bargain fr">
          <p class="ico iconfont icon-d-goods-xin detail_footer_ico3" data-index>&#xe711;</p>
          <p class="txt">收藏</p>
        </span>
      </div>
    </div>
    <div class="title">
      <span class="title_b share_text">{{text}}</span>
    </div>
    <div class="lead">
      <span>自营 /</span> {{adv}}
    </div>
    <div class="price">
      <div class="price_b">
        <span class="price_b_ico icon-a-goods-logo h"></span>
        <span class="price_text">顺丰包邮</span>
        <span class="price_b_sale fr"><span>销售：</span>{{Sales}}</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props:{
    text:String,
    adv:String,
    newprice:String,
    oldprice:String,
    handprice:String,
    Sales:String
  }
});
</script>
<style lang="scss" scoped>
.pr_title {
    width: 100%;
    background-color: #fff;
    margin-bottom: 12px;
    padding: 8px 0 0 0;
}
.pr_title>.price {
    padding-top: 8px;
}
.pr_title>.price>.price_a {
    display: inline-block;
    width: 100%;
    vertical-align: middle;
    margin-bottom: 5px;
}
.pr_title>.price>.price_a .price_a_jiage {
    font-size: 28px;
    color: #d90000;
    margin-right: 5px;
    font-weight: 700;
}
.pr_title>.price>.price_a .price_b_jiage {
    font-size: 14px;
    color: #ccc;
    text-decoration: line-through;
    line-height: 25px;
}
.pr_title>.price>.price_a .price_a_bargain {
    background: #fff;
    font-size: 10px;
    color: #999;
    text-align: center;
}
.pr_title>.price>.price_a .price_a_bargain .ico {
    margin: 0 auto;
}
.pr_title>.title, .brand, .lead, .price {
    width: 94%;
    margin-left: 3%;
    margin-right: 3%;
}
.pr_title>.title>.title_b {
    font-size: 16px;
    color: #666;
    line-height: 20px;
    font-weight: 700;
    white-space: normal;
    word-break: break-all;
    word-wrap: break-word;
}
.pr_title>.lead {
    font-size: 12px;
    color: #d90000;
    padding: 2px 0;
    line-height: 20px;
    font-weight: 700;
}
.pr_title>.lead span {
    color: #999;
    font-weight: 400;
}
.pr_title>.price {
    padding-top: 8px;
}
.pr_title>.price>.price_b {
    margin-bottom: 2px;
    width: 100%;
    display: inline-block;
    vertical-align: middle;
}
.pr_title>.price>.price_b .price_b_ico {
    display: inline-block;
    vertical-align: middle;
}
.pr_title>.price>.price_b .price_text {
    font-size: 14px;
    color: #ccc;
    line-height: 25px;
}
.pr_title>.price>.price_b .price_b_sale {
    font-size: 14px;
    color: #ccc;
    line-height: 25px;
}
.fr {
    float: right!important;
}

</style>
