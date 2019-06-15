<template>
    <div class="W_title">
        <ul class="clearfix">
            <router-link class="wb_title_middle wb_search_result" to="/search" tag="li">
                <i class="srh_icon iconfont">&#xe6e4;</i>
                <a class="search_work esp1">搜索商品</a>
                <span class="clean_search h">
                    <i class="icon-a-close02"></i>
                </span>
            </router-link>
        </ul>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>
<style lang="scss" scoped>
.W_title {
  position: relative;
  width: 100%;
  height: 2.75rem;
  line-height: 2.75rem;
  z-index: 9999;
  max-width: 40rem;
  margin: 0 auto;
  background: #fff;
  border-bottom: 1px solid #ddd;
  ul li.wb_search_result {
        height: 1.75rem;
        line-height: 1.75rem;
        margin-top: 0.5rem;
        margin-right: 0.375rem;
        background: #f1f1f1;
        border-radius: 6.25rem;
        font-size: 0.875rem;
        color: #333;
    }
}
.W_title .wb_search_result .search_work {
    position: relative;
    display: block;
    height: 100%;
    padding: 0 32px;
    font-size: 12px;
    color: #999;
}
.W_title .wb_search_result .srh_icon, .W_title li.wb_index_srearch .srh_icon {
    position: absolute;
    top: 0px;
    left: 11px;
    color :#999;
}
.clearfix:after {
    content: "";
    display: block;
    clear: both;
}
.W_title .wb_title_middle {
    width: auto;
    position: relative;
    margin-left: 0.8125rem;
}
</style>
