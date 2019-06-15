<template>
  <div class="home">
		<indexhead></indexhead>
		<indexmain></indexmain>
  </div>
</template>

<script>
	
// @ is an alias to /src
import indexhead from '../components/home/index-head.vue'
import indexmain from '../components/home/index-main.vue'

export default { 
  name: 'home',
  components: {
		indexhead,
		indexmain
  },
	// mounted(){
	// 	let goodsarr = [];
	// 	localStorage.setItem('goodsinfo',JSON.stringify(goodsarr));
	// }
}
</script>
