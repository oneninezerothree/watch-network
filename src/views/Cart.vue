<template>
    <div class="cart">
			<cartHead></cartHead>
			<cartMain></cartMain>
		</div>
</template>
<script>
	import cartHead from '../components/cart/head.vue';
	import cartMain from '../components/cart/main.vue';
	
export default {
  name: 'cart',
  components: {
		cartHead,
		cartMain
  }
}
</script>
<style>
</style>