<template>
    <div class="cart">
			<cartMain></cartMain>
		</div>
</template>
<script>
	import cartMain from '../components/cart/main.vue';
	
export default {
  name: 'cart',
  components: {
		cartMain
  },
  created(){
	  this.$store.state.isShowMfooter=true;
  }
}
</script>
<style>
</style>