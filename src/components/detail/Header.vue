<template>
  <header class="W_title">
    <ul class="clearfix">
      <li class="wb_back user_custom">
        <a href="/" class="head-logo">
          <img src="//static.wbiao.co/p/m/images/1/head-logo.png" alt>
        </a>
      </li>
      <li class="wb_title_middle wb_goods_tab">
        <ul class="clearfix" id="wb_goods_tab">
          <li>
            <a href="javascript:void(0);" @click="msg=0" :class="{'on':msg===0}">商品</a>
          </li>
          <li>
            <a href="javascript:void(0);" @click="msg=1" :class="{'on':msg===1}">详情</a>
          </li>
          <li>
            <a href="javascript:void(0);" @click="msg=2" :class="{'on':msg===2}">评价</a>
          </li>
          <li>
            <a href="javascript:void(0);" @click="msg=3" :class="{'on':msg===3}">门店</a>
          </li>
        </ul>
      </li>
      <li class="wb_more">
        <a href="javascript:void(0);" class="to_more icon-a-nav02">···</a>
      </li>
    </ul>
  </header>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
    data(){
        return{
            msg:0
        }
    }
});
</script>
<style lang="scss" scoped>
.W_title {
    height: 44px!important;
}
.W_title {
    position: relative;
    width: 100%;
    line-height: 44px;
    max-width: 640px;
    margin: 0 auto;
    background: #fff;
    border-bottom: 1px solid #ddd;
}

.W_title ul {
    height: 44px;
    position: relative;
}
.W_title .user_custom {
    width: 71px;
}

.W_title .wb_back {
    position: absolute;
    left: 0;
    z-index: 2;
}
.W_title ul li {
    display: block;
    width: 44px;
    height: 44px;
    line-height: 44px;
    font-size: 16px;
    color: #444;
}
.W_title .head-logo {
    margin: 13px auto 0;
}

.W_title .head-logo {
    display: block;
    width: 48px;
    height: 24px;
}
.W_title .head-logo img {
    width: 100%;
}
body img {
    display: block;
}
.W_title ul .wb_goods_tab {
    margin-left: 26px;
}

.W_title ul .wb_goods_tab {
    text-align: center;
    margin-left: 0;
}
.W_title .wb_title_middle {
    width: auto;
    position: relative;
    margin-left: 44px;
}
.W_title ul {
    height: 44px;
    position: relative;
}
.W_title .wb_goods_tab ul li {
    width: 58px;
}
.W_title .wb_goods_tab ul li {
    width: 64px;
    display: inline-block;
}
.clearfix:after {
    content: "";
    display: block;
    clear: both;
}
.W_title .rewrite_right, .W_title .wb_more, .W_title .wb_right {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2;
    text-align: center;
}
.W_title .wb_goods_tab ul li a.on {
    font-weight: 700;
}
.W_title .wb_goods_tab ul li a.on {
    color: #333;
    border-bottom: 3px solid #333;
}

.W_title .wb_goods_tab ul li a {
    font-weight: 700;
}
.W_title .wb_goods_tab ul li a {
    display: inline-block;
    font-size: 14px;
    color: #666;
    line-height: 38px;
}
.W_title .wb_goods_tab ul li a {
    font-weight: 700;
}
.W_title .wb_goods_tab ul li a {
    display: inline-block;
    font-size: 14px;
    color: #666;
    line-height: 38px;
}
</style>
