<template>
<<<<<<< HEAD
  <div id="app">
      <router-view/>
      <Footer></Footer>
=======
  <div id="app">	
    <router-view/>
    <Footer></Footer>
>>>>>>> 2f299886f47ae3836a13a3a76d1cd81546261863
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
