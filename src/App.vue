<template>
  <div id="app">
    <keep-alive exclude ="List,Detail">
      <router-view/>
    </keep-alive>
      <Footer></Footer>
  </div>
</template>

<script>
import Vue from 'vue';
import Footer from './components/Footer.vue'
export default {
    components :{
        Footer
    }
}
</script>

<style lang="scss">
*{margin: 0;padding: 0;}
ul{list-style: none;overflow: hidden;}
a{text-decoration: none;}
.fl{
  float: left;
}
.fr{
  float:right;
}
</style>
