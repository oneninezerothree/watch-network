<template>
  <section class="W_search_nav">
    <nav class="wb_tab">
      <ul class="clearfix">
        <li v-for="(item,index) of tabs" :key="index" @click="toggleTab(index,$event)"  :class="{ on:index==current}" sort="item.paixu">
          <a href="javascript:void(0);">{{item.name}}</a>
        </li>
      </ul>
    </nav>
  </section>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
    data(){
        return{
            current:0,
            tabs:[
                {
                    paixu : 'def',
                    name : '综合排序'
                },
                {
                    paixu : 'desc',
                    name : '销量优先'
                },
                {
                    paixu : 'asc',
                    name : '价格排序'
                }
            ]
        }
    },
    methods:{
        toggleTab(index,e){
            this.current=index;
        }
    }
});
</script>
<style lang="scss" scoped>
.W_search_nav {
    width: 100%;
    max-width: 640px;
    background: #fff;
    margin: 0 auto;
    transition: top .3s cubic-bezier(.25,.46,.45,.94);
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
