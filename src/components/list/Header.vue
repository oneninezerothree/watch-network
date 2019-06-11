<template>
  <header class="W_title">
    <ul class="clearfix">
      <li class="wb_back user_custom">
        <a href="/" class="head-logo">
          <img src="//static.wbiao.co/p/m/images/1/head-logo.png" alt>
        </a>
      </li>
      <li class="wb_title_middle wb_search_result">
        <i class="srh_icon icon-a-search01 iconfont">&#xe6e4;</i>
        <a class="search_work esp1">搜索商品</a>
        
      </li>
      <li class="wb_more">
        <a class="iconfont">&#xe771;</a>
      </li>
    </ul>
  </header>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>
<style lang="scss" scoped>
.W_title {
    position: relative;
    width: 100%;
    height: 44px;
    line-height: 44px;
    max-width: 640px;
    margin: 0 auto;
    background: #fff;
    border-bottom: 1px solid #ddd;
}
.W_title {
    height: auto!important;
}

.W_title {
    border-bottom: 0!important;
}
.W_title ul {
    height: 44px;
    position: relative;
    overflow: hidden;
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
    margin: 6px auto 0;
    display: block;
    width: 51px;
    height: 24px;
}
.W_title .head-logo img {
    width: 100%;
}
.W_title ul li.wb_search_result {
    margin-right: 45px;
}

.W_title ul li.wb_search_result {
    height: 28px;
    line-height: 28px;
    margin-top: 8px;
    margin-right: 6px;
    margin-left: 64px;
    background: #f1f1f1;
    border-radius: 100px;
    font-size: 14px;
    color: #333;
    width: 265px;
}
.W_title .wb_title_middle {
    margin-left: 66px;
}
.W_title .wb_title_middle {
    width: auto;
    position: relative;
    margin-left: 44px;
}
.W_title .wb_search_result .srh_icon, .W_title li.wb_index_srearch .srh_icon {
    position: absolute;
    top: 1px;
    left: 11px;
    width: 15px;
    height: 15px;
    color: #333;
    z-index: 16;   
}


.W_title .wb_search_result .search_work {
    position: relative;
    display: block;
    height: 100%;
    padding: 0 32px;
    font-size: 12px;
    color: #999;
}

.esp1 {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.W_title li .clean_search {
    position: absolute;
    right: 0;
    top: 0;
    width: 30px;
    height: 28px;
    z-index: 99;
    color: #333;
}

.h {
    display: none!important;
}
.W_title li .clean_search i {
    position: absolute;
    top: 7px;
    right: 6px;
}
.W_title .rewrite_right, .W_title .wb_more, .W_title .wb_right {
    position: absolute;
    right: -5px;
    top: 0;
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

.clearfix:after {
    content: "";
    display: block;
    clear: both;
}

</style>
