<template>
  <div class="W_search_nav">
    <nav class="wb_tab">
      <ul class="clearfix">
        <li @click="toggleTab(0,$event,'def')" :class="{ on:0==current}">
          <router-link tag="a" :to="{name:'def'}" href="javascript:void(0);">综合排序</router-link>
        </li>
        <li @click="toggleTab(1,$event,'desc')" :class="{ on:1==current}">
          <router-link tag="a" :to="{name:'desc'}" href="javascript:void(0);">销量优先</router-link>
        </li>
        <li @click="toggleTab(2,$event,'asc')" :class="{ on:2==current}">
          <router-link tag="a" :to="{name:'asc'}" href="javascript:void(0);">价格排序</router-link>
        </li>
      </ul>
    </nav>
    <router-view :list='list'></router-view>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
    props:{
        list:Array
    },
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    toggleTab(index, e, s) {
      this.current = index;
      this.$emit("childByValue", s);
    }
  },
});
</script>
<style lang="scss" scoped>
.W_search_nav {
  width: 100%;
  max-width: 640px;
  background: #fff;
  margin: 0 auto;
  transition: top 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.W_search_nav nav.wb_tab {
  width: 100%;
  height: 44px;
  border-bottom: 1px solid #f1f1f1;
  background: #fff;
}
.W_search_nav nav.wb_tab li {
  width: 25%;
  position: relative;
}

.W_search_nav nav.wb_tab li {
  width: 33.33%;
  display: block;
  overflow: hidden;
  float: left;
  text-align: center;
}
.W_search_nav nav.wb_tab li.on a {
  color: #d90000;
}

.W_search_nav nav.wb_tab li a {
  font-size: 12px;
  color: #999;
  line-height: 44px;
  display: block;
}
.W_search_nav nav.wb_tab li {
  width: 25%;
  position: relative;
}

.W_search_nav nav.wb_tab li {
  width: 33.33%;
  display: block;
  overflow: hidden;
  float: left;
  text-align: center;
}
.clearfix:after {
  content: "";
  display: block;
  clear: both;
}
</style>
