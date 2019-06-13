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
	import {
		mapGetters
	} from "vuex";
	export default {
		name: 'home',
		components: {
			indexhead,
			indexmain
		},
		computed: {
			...mapGetters(['getdata']),
		}
	}
</script>
