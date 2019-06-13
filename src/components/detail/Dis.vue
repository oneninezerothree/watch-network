<template>
  <div class="pr_distribution">
    <div class="distribution clearfix">
      <div class="distribution_title fl">配送</div>
      <div class="distribution_content fl">
        <div class="distribution_content_a">
          <span>有现货</span>
          <span class="black">免运费</span>
        </div>
        <div class="distribution_content_b">下单后16:45前支付，预计1-3个工作日内发货，支持货到付款</div>
      </div>
    </div>
    <div class="brand clearfix" id="brand">
      <a class="fl">
        <span class="brand_ico icon-d-goods-service2 iconfont">&#xe612;</span>
        <span class="brand_text brand_textTwo">正品保障</span>
      </a>
      <a class="fl">
        <span class="brand_ico icon-d-goods-service2 iconfont">&#xe612;</span>
        <span class="brand_text brand_textTwo">正规发票</span>
      </a>
      <a class="fl">
        <span class="brand_ico icon-d-goods-service2 iconfont">&#xe612;</span>
        <span class="brand_text brand_textTwo">假一赔三</span>
      </a>
      <a class="fl">
        <span class="brand_ico icon-d-goods-service2 iconfont">&#xe612;</span>
        <span class="brand_text brand_textTwo">7天退换</span>
      </a>
      <a class="fl">
        <span class="brand_ico icon-d-goods-service2 iconfont">&#xe612;</span>
        <span class="brand_text brand_textTwo">全球联保</span>
      </a>
      <a class="fl">
        <span class="brand_ico icon-d-goods-service2 iconfont">&#xe612;</span>
        <span class="brand_text brand_textTwo">免息分期</span>
      </a>
      <a class="fl">
        <span class="brand_ico icon-a-goods-service iconfont">&#xe642;</span>
        <span class="brand_text">实体店体验</span>
      </a>
      <a class="fl">
        <span class="brand_ico icon-a-goods-service iconfont">&#xe642;</span>
        <span class="brand_text">闪电发货</span>
      </a>
      <a class="fl">
        <span class="brand_ico icon-a-goods-service iconfont">&#xe642;</span>
        <span class="brand_text">货到付款</span>
      </a>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>
<style lang="scss" scoped>
.pr_distribution {
    width: 100%;
    padding-left: 3%;
    padding-right: 3%;
    background-color: #fff;
    margin-bottom: 12px;
}
.pr_distribution>.distribution {
    width: 100%;
    padding-top: 12px;
    padding-bottom: 8px;
    display: inline-block;
    border-bottom: 1px solid #f1f1f1;
}
.pr_distribution>.distribution>.distribution_title {
    width: 12%;
    font-size: 14px;
    color: #666;
    margin-top: 2px;
}
.pr_distribution>.distribution>.distribution_content {
    width: 80%;
    font-size: 14px;
    margin-top: 2px;
}
.pr_distribution>.distribution>.distribution_content>.distribution_content_a {
    font-size: 14px;
    color: #d90000;
    margin-bottom: 10px;
    font-weight: 700;
}
.pr_distribution>.distribution>.distribution_content>.distribution_content_a>.black {
    color: #333;
    margin-left: 5px;
}
.pr_distribution>.distribution>.distribution_content>.distribution_content_b {
    font-size: 11px;
    color: #999;
}
.clearfix:after {
    content: "";
    display: block;
    clear: both;
}
.pr_distribution>.brand {
    width: 88%;
    padding-left: 8%;
    padding-top: 0;
    padding-bottom: 12px;
}
.W_detail a {
    display: block;
}
.fl {
    float: left!important;
}
.pr_distribution>.brand .brand_ico {
    display: inline-block;
    margin-left: 7px;
    margin-right: 2px;
    vertical-align: middle;
}
.pr_distribution>.brand .brand_textTwo {
    color: #ccc;
}

.pr_distribution>.brand .brand_text {
    font-size: 12px;
    color: #999;
    line-height: 12px;
    vertical-align: middle;
}

</style>
