<template>
  <div id="app">
    <router-view></router-view>
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
</style>
