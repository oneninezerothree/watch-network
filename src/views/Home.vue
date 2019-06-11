<template>
  <div class="home">
		<indexhead></indexhead>
		<indexmain></indexmain>
  </div>
</template>

<script>
	
// @ is an alias to /src
import indexhead from '@/components/index-head.vue'
import indexmain from '@/components/index-main.vue'

export default {
  name: 'home',
  components: {
		indexhead,
		indexmain
  }
}
</script>
