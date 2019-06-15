<template>
	<div class="detail_footer">
		<div class="detail_footer_content">
			<li>
				<p class="clickService detail_footer_ico icon-a-ntalk-goods CUSTOMER-SERVICE iconfont" service-code="wx_1000_1515726307656">&#xe673;</p>
				<p class="p2">客服</p>
			</li>
			<router-link to="/cart" tag="li">
				<a class="detail_footer_ico icon-d-goodscart iconfont">
					&#xe606;
					<i style="display:none;"></i>
				</a>
				<a class="p2">购物车</a>
			</router-link>
			<li class="detail_footer_purchase js_purchase">立即购买</li>
			<li class="detail_footer_cart js_cart" @click="addCart">加入购物车</li>
		</div>
	</div>
</template>
<script lang="ts">
	import Vue from "vue";
	import {
		MessageBox
	} from 'mint-ui'
	export default Vue.extend({
		methods: {
			addCart() {
				let res = JSON.parse(localStorage.getItem('goodsinfo'))?JSON.parse(localStorage.getItem('goodsinfo')):[] ;
				let goodsobj = {
					gid: this.$route.params.id,
					gnum: this.$store.state.num
				};
				var num;
				if (res[0]) {
					let isHaveGoods= res.find(item=>item.gid == goodsobj.gid);
					if(!isHaveGoods){
						res.push(goodsobj)
						localStorage.setItem('goodsinfo', JSON.stringify(res));
						MessageBox('成功加入购物车');
					}else{
						MessageBox('已有此商品！');
					}
					// res.find(function(item) {
					// 	if (item.gid != goodsobj.gid) {
					// 		res.push(goodsobj);
					// 		localStorage.setItem('goodsinfo', JSON.stringify(res));
					// 		console.log('1')
					// 		MessageBox('成功加入购物车');
					// 	}else {
					// 		MessageBox('已有此商品！');
					// 	}
					// })
				} else {
					res.push(goodsobj);
					localStorage.setItem('goodsinfo', JSON.stringify(res))
					MessageBox('成功加入购物车');
				}
			}
		},

	});
</script>
<style lang="scss" scoped>
	.detail_footer {
		width: 100%;
		position: fixed;
		bottom: 0;
		background-color: #fff;
		z-index: 100;
		max-width: 640px;
		border: .5px solid #f1f1f1;
	}

	.detail_footer>.detail_footer_content {
		width: 100%;
		position: relative;
	}

	.detail_footer>.detail_footer_content li {
		float: left;
		width: 13%;
		text-align: center;
	}

	.detail_footer>.detail_footer_content .detail_footer_ico {
		width: 21px;
		height: 21px;
		display: block;
		margin: 8px auto 0 auto;
		position: relative;
	}

	.detail_footer>.detail_footer_content .p2 {
		font-size: 10px;
		color: #666;
		line-height: 20px;
		display: block;
	}

	.detail_footer>.detail_footer_content .detail_footer_ico i {
		width: 14px;
		height: 14px;
		line-height: 14px;
		text-align: center;
		font-size: 10px;
		color: #fff;
		background: #d90000;
		border-radius: 50%;
		border: 1px solid #fff;
		position: absolute;
		top: -3px;
		right: -8px;
		display: none;
	}

	.detail_footer>.detail_footer_content .detail_footer_purchase {
		width: 30%;
		float: right !important;
		height: 50px;
		text-align: center;
		line-height: 50px;
		font-size: 14px;
		color: #fff;
		background: #d90000;
		border-top: .5px solid #d90000;
	}

	.detail_footer>.detail_footer_content .detail_footer_cart {
		width: 30%;
		float: right !important;
		height: 50px;
		text-align: center;
		line-height: 50px;
		font-size: 14px;
		color: #666;
		border-left: 1px solid #f1f1f1;
	}
</style>
