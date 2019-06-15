<template>
	<div>
		<div class="W-cart-head" id="W-cart-head">
			<div class="W_register h">
				<a href="javascript:;" style="background-image:url(//static.wbiao.co/p/m/images/1/download_tips_2.png);background-size: 100% auto;background-position: center center;"
				 class="register">
				</a>
				<span class="sp1" id="closer"></span>
			</div>
			<header class="W_title">
				<ul class="clearfix">
					<li class="wb_title_middle wb_title">购物车</li>
					<li class="rewrite_right" v-show="editShow">
						<a href="javascript:void(0);" id="w-editAll" @click="editBtn()">{{edit}}</a>
					</li>
				</ul>
			</header>
			<div class="login-tips">登录后购物车的商品将保存到您账号中，<a href="javascript:;">现在登录</a></div>
		</div>
		<main>
			<div class="W-cart paddingTop80" id="W-cart">
				<!-- <div class="empty-status">
				<div class="icon icon-a-empty-cart"></div>
				<p>购物车是空的</p>
				<div class="btns-wrap">
					<div class="btns left"> <a href="javascript:;">逛逛首页</a></div>
					<div class="btns right"> <a href="javascript:;">查看收藏</a></div>
				</div>
			</div> -->
				<!-- ---------------------------商品-------------------- -->
				<div class="cart-content">
					<div class="shop-blocks editing" data-shop-code="7">
						<div class="goods">
							<div class="lines" v-for="item,index of goods" :key="index" data-cart-id="0">
								<div class="slide-wrap" style="touch-action: pan-y pinch-zoom;">
									<div class="slide-scroller clearfix" style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);">
										<div class="inner fl clearfix"><a href="/goods/61908" target="_self">
												<div class="img fl"> <img :src="item.imgUrl">
												</div>
												<div class="desc" v-show="show">
													<p class="words">{{item.text}}</p>
													<p class="specifications">橡胶 黑色</p>
													<p class="bottom clearfix"> <span class="price"><i>¥</i><i class="wbiaoPrice">{{item.newprice}}</i> <i>{{item.oldprice}}</i></span>
														<span class="quatity fr">x<span>{{item.num}}</span></span></p>
												</div>
											</a>
											<div class="editor" v-if="!show">
												<div class="calc clearfix"> <span class="minus calc-btns fl" @click="delNum(index,item.id)">-</span>
													<div class="val">{{item.num}}</div> <span class="plus calc-btns" @click="addNum(index,item.id)">+</span>
												</div> <button class="del" @click="moveGoods(item.id,index)">删除</button>
											</div>
										</div>
										<span class="cart-tik" @click="selectGoods(index)">
											<span class="normal" :class="{
												'on': allselect
											}"></span>
											<span class="icon-a-red-tik"></span>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
		<div class="W-cart-footer" id="W-cart-footer">
			<div class="footer-bar footer-bar-normal">
				<div class="footer-bar footer-bar-normal">
					<div class="left clearfix">
						<span class="cart-tik fl" @click="allselectBtn()">
							<span class="normal" :class="{
								'on': allselect
							}"></span>
							<i>全选</i>
						</span>
						<div class="detail fr">
							<p>总计:¥<span id="payableAmount">{{sum}}</span></p>
							<!-- <p>总额:¥<span id="goodsAmount">0</span></p> -->
						</div>
					</div> <button class="submit-btn fr">结算</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				editShow: true,
				editclass: '',
				finshclass: 'h',
				edit: '编辑全部',
				show: true,
				select: false,
				allselect: false,
				Num: 1,
				goods: [],
				sum:0

			}
		},
		// created() {
		// 	// let localgoods = JSON.parse(localStorage.getItem('goodsinfo'));
		// 	// localgoods.map(function(item) {
		// 	// 	console.log(item.gid);
		// 	// })
		// 	axios.get('https://www.easy-mock.com/mock/5cf5001e6e18ad42e9052ce1/example/watch-goods')
		// 	.then()
		// },
		methods: {
			editBtn() {
				if (this.show) {
					this.edit = '完成';
				} else {
					this.edit = '编辑完成';
				}
				this.show = !this.show;
			},
			selectGoods(i) {
				console.log(i)
			},
			allselectBtn() {
				this.sum = 0;
				this.allselect = !this.allselect
				let arrprice = [];
				if(this.allselect){
					this.goods.map((item)=>{
						let price = parseInt(item.newprice.replace(/[,¥]/g, ""))*1;
						this.sum += price*(item.num);
					})
				}
			},
			// -----------------修改数量--------------
			delNum(i, id) {
				let localgoods = JSON.parse(localStorage.getItem('goodsinfo'));
				//let gid = this.goods[num].id;
				//console.log(gid)
				localgoods.map((item) => {
					if (item.gid == id) {
						item.gnum--;
						if(item.gnum<1){
							item.gnum = 1;
						}
						this.goods[i].num = item.gnum
					}
				})
				localStorage.setItem('goodsinfo', JSON.stringify(localgoods));
				this.sum = 0;
				if(this.allselect){
					this.goods.map((item)=>{
						let price = parseInt(item.newprice.replace(/[,¥]/g, ""))*1;
						this.sum += price*(item.num);
					})
				}
			},
			addNum(i, id) {
				let localgoods = JSON.parse(localStorage.getItem('goodsinfo'));
				//let gid = this.goods[num].id;
				//console.log(gid)
				localgoods.map((item) => {
					if (item.gid == id) {
						item.gnum++;
						this.goods[i].num = item.gnum
					}
				});
				localStorage.setItem('goodsinfo', JSON.stringify(localgoods));
				this.sum = 0;
				if(this.allselect){
					this.goods.map((item)=>{
						let price = parseInt(item.newprice.replace(/[,¥]/g, ""))*1;
						this.sum += price*(item.num);
					})
				}
			},
			moveGoods(gid, i) {
				// 修改数据即可,M->V
				// 删除本地数据
				let localgoods = JSON.parse(localStorage.getItem('goodsinfo'));
				localgoods.map((item) => {
					if (gid == item.gid) {
						localgoods.splice(localgoods.indexOf(item), 1)
					}
				})
				localStorage.setItem('goodsinfo', JSON.stringify(localgoods));
				// 假删除
				this.goods.splice(i, 1);
			},
			getGoodsInfo() {
				axios.get('https://www.easy-mock.com/mock/5cf5001e6e18ad42e9052ce1/example/watch-goods')
					.then(this.getGoodsInfoSucc)
			},
			getGoodsInfoSucc(res) {
				res = res.data;
				//console.log(res)
				let localgoods = JSON.parse(localStorage.getItem('goodsinfo'));
				let data = res.List;
				//存储所有商品数据的数组
				let goodslist = []
				data.map(function(item) {
					item.List.map(function(it) {
						goodslist.push(it);
					})
				});
				// console.log(goodslist)
				//存储加入购物车的商品的数组
				let arr = [];
				goodslist.map(function(item) {
					localgoods.map(function(it) {
						if (item.id == it.gid) {
							arr.push(item)
						}
					})
				})
				localgoods.map(function(item) {
					arr.map((it) => {
						if (item.gid == it.id) {
							it.num = item.gnum;
						}
					})
				})
				this.goods = arr;
			}
		},
		mounted() {
			this.getGoodsInfo();
		},
		// computed:{
		// 	aaa:function(){
		// 		let a = 0;
		// 		this.allselect = !this.allselect
		// 		let arrprice = [];
		// 		if(this.allselect){
		// 			this.goods.map((item)=>{
		// 				let price = parseInt(item.newprice.replace(/[,¥]/g, ""))*1;
		// 				a += price*(item.num);
		// 			})
		// 		}
		// 		return  a
		// 	}
		// }
	}
</script>

<style>
	.on {
		background: red;
	}

	/* 头部 */
	.W-cart-head {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 10;
	}

	* {
		font-family: Helvetica, Tahoma, Arial, "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei", STXihei, STHeiti, Heiti, SimSun, sans-serif;
		margin: 0;
		padding: 0;
		font-size: 1em;
		-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
	}

	.h {
		display: none !important;
	}

	.W_register a {
		position: relative;
		display: block;
		height: 50px;
		width: 100%;
		background-color: #4a3131;
	}

	a,
	area,
	button,
	input,
	select {
		outline: 0;
		background-image: url(about:blank);
	}

	a {
		text-decoration: none;
		outline: 0;
		color: #666;
		border: none;
	}

	.W_register span.sp1 {
		position: absolute;
		display: block;
		top: 0;
		left: 0;
		width: 64px;
		height: 50px;
		z-index: 3;
	}

	.W_title {
		position: relative;
		width: 100%;
		height: 44px;
		line-height: 44px;
		max-width: 640px;
		margin: 0 auto;
		background: #fff;
		border-bottom: 1px solid #ddd;
	}

	.bxt,
	dd,
	dl,
	dt,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	header,
	input,
	li,
	ol,
	ul {
		overflow: hidden;
	}

	dd,
	dl,
	dt,
	li,
	ol,
	ul {
		list-style: none;
	}

	.W_title ul li.wb_title {
		position: absolute;
		top: 0;
		text-align: center;
		width: 100%;
		z-index: 1;
		margin-left: 0;
	}

	.W_title ul li {
		display: block;
		width: 44px;
		height: 44px;
		line-height: 44px;
		font-size: 16px;
		color: #444;
	}

	header.W_title .rewrite_right {
		right: 12px;
		font-size: 12px;
		width: auto;
	}

	.W_title .rewrite_right,
	.W_title .wb_more,
	.W_title .wb_right {
		position: absolute;
		right: 0;
		top: 0;
		z-index: 2;
	}

	.W_title .rewrite_right a {
		display: block;
	}

	.clearfix:after {
		content: "";
		display: block;
		clear: both;
	}

	.W-cart-head .login-tips {
		font-size: 12px;
		line-height: 28px;
		text-align: center;
		height: 28px;
		max-width: 640px;
		margin: 0 auto;
		background-color: #fff9ce;
	}

	.W-cart-head .login-tips a {
		color: #5781b4;
	}

	body {
		width: 100%;
		max-width: 640px;
		min-width: 320px;
		/* background-color: #f1f1f1; */
		color: #666;
		padding: 0;
		margin: 0 auto;
	}

	main {
		display: block;
		position: relative;
		overflow: hidden !important;
		width: 100%;
		max-width: 640px;
	}

	* {
		font-family: Helvetica, Tahoma, Arial, "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei", STXihei, STHeiti, Heiti, SimSun, sans-serif;
		margin: 0;
		padding: 0;
		font-size: 1em;
		-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
	}

	a {
		text-decoration: none;
		outline: 0;
		color: #666;
		border: none;
	}

	.W-cart.paddingTop80 {
		padding-top: 80px;
	}

	.W-cart {
		padding-top: 60px;
		padding-bottom: 130px;
	}

	.W-cart .empty-status {
		padding-top: 43px;
		text-align: center;
	}

	.W-cart .empty-status .icon {
		margin: 0 auto;
	}

	.icon-a-empty-cart {
		display: block;
		background-image: url(/public/sprites/a/a.png?20190423);
		background-position: -89px -89px;
		background-size: 443px;
		width: 82px;
		height: 84px;
	}

	.W-cart .empty-status>p {
		font-size: 14px;
		line-height: 20px;
		padding-top: 16px;
	}

	.W-cart .empty-status .btns-wrap {
		margin-top: 60px;
		text-align: center;
	}

	.W-cart .empty-status .btns-wrap .btns:first-child {
		margin-right: 18px;
		background-color: #d90000;
		color: #fff;
	}

	.W-cart .empty-status .btns-wrap .btns {
		display: inline-block;
		width: 100px;
		height: 32px;
		line-height: 32px;
		border: 1px solid #d90000;
		color: #d90000;
		font-size: 12px;
		-webkit-border-radius: 16px;
		-moz-border-radius: 16px;
		border-radius: 16px;
	}

	.W-cart .empty-status .btns-wrap .btns:first-child a {
		color: #fff;
	}

	.W-cart .empty-status .btns-wrap .btns a {
		color: #d90000;
	}

	/* -------------商品---------------- */
	.W-cart .shop-blocks .goods .lines {
		position: relative;
	}

	.W-cart .shop-blocks .goods .lines .slide-wrap {
		position: relative;
		height: 132px;
		width: 100%;
	}

	.W-cart .shop-blocks .goods .lines .slide-wrap .slide-scroller {
		position: absolute;
		z-index: 1;
		-webkit-tap-highlight-color: transparent;
		-webkit-transform: translateZ(0);
		-moz-transform: translateZ(0);
		-ms-transform: translateZ(0);
		-o-transform: translateZ(0);
		transform: translateZ(0);
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		width: -webkit-calc(100% + 120px);
		width: calc(100% + 120px);
	}

	.W-cart .shop-blocks .goods:last-child .inner {
		border-bottom: none;
	}

	.W-cart .shop-blocks .goods .inner {
		height: 132px;
		margin-left: 38px;
		border-top: 1px solid #ddd;
		border-bottom: 1px solid #ddd;
		width: -webkit-calc(100% - 120px - 38px);
		width: calc(100% - 120px - 38px);
	}

	.fl {
		float: left !important;
	}

	.W-cart .shop-blocks .goods .inner .img {
		position: relative;
		width: 98px;
		height: 98px;
		margin-top: 18px;
	}

	.W-cart .shop-blocks .goods .inner .img img {
		width: auto;
		height: 100%;
		margin: 0 auto;
	}

	main img {
		width: 100%;
		border: none;
		display: block;
	}

	.W-cart .shop-blocks .goods .inner .desc {
		position: relative;
		height: 98px;
		margin-top: 18px;
		margin-left: 107px;
	}

	.W-cart .shop-blocks .inner .desc .words {
		height: 32px;
		font-size: 12px;
		line-height: 16px;
		margin-right: 12px;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		color: #151515;
	}

	.W-cart .shop-blocks .inner .desc .specifications {
		color: #999;
		font-size: 10px;
		line-height: 10px;
		padding-top: 4px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.W-cart .shop-blocks .inner .desc .bottom {
		position: absolute;
		width: 100%;
		bottom: 0;
		left: 0;
		line-height: 16px;
	}

	.W-cart .shop-blocks .inner .price i:nth-child(1) {
		font-size: 12px;
		color: #333;
	}

	em,
	i {
		font-style: normal;
	}

	.W-cart .shop-blocks .inner .price i:nth-child(2) {
		font-size: 16px;
		color: #333;
	}

	.W-cart .shop-blocks .inner .price i:nth-child(3) {
		text-decoration: line-through;
		color: #ccc;
		font-size: 10px;
	}

	.W-cart .shop-blocks .inner .quatity {
		font-size: 14px;
		color: #999;
		margin-right: 12px;
	}

	.fr {
		float: right !important;
	}

	.clearfix:after {
		content: "";
		display: block;
		clear: both;
	}

	.W-cart .shop-blocks .inner .editor {
		display: none;
		position: relative;
		height: 127px;
		margin-left: 107px;
		padding-right: 60px;
	}

	.W-cart .shop-blocks .inner .editor .calc {
		position: relative;
		top: 13px;
		margin-right: 16px;
		border: 1px solid #ddd;
		height: 28px;
	}

	.W-cart .shop-blocks .inner .editor .calc span {
		display: inline-block;
		font-size: 18px;
		width: 40px;
		height: 28px;
		line-height: 28px;
		text-align: center;
		color: #979797;
	}

	.W-cart .shop-blocks .inner .editor .calc .val {
		display: block;
		margin: 0 40px;
		border-left: 1px solid #ddd;
		border-right: 1px solid #ddd;
		height: 28px;
		line-height: 28px;
		text-align: center;
		font-size: 14px;
	}

	.W-cart .shop-blocks .inner .editor .calc span:last-child {
		position: absolute;
		right: 0;
		top: 0;
	}

	.W-cart .shop-blocks .inner .editor .calc span {
		display: inline-block;
		font-size: 18px;
		width: 40px;
		height: 28px;
		line-height: 28px;
		text-align: center;
		color: #979797;
	}

	.W-cart .shop-blocks .inner .editor .del {
		border: none;
		position: absolute;
		right: 0;
		top: 0;
		height: 127px;
		width: 60px;
		color: #fff;
		background-color: #d90000;
		-webkit-border-radius: 0;
		-moz-border-radius: 0;
		border-radius: 0;
	}

	.W-cart .cart-tik {
		position: absolute;
		top: 0;
		left: 0;
		width: 38px;
		height: 100%;
	}

	.W-cart .cart-tik .normal {
		width: 14px;
		height: 14px;
		line-height: 14px;
		border: 1px solid #ccc;
		border-radius: 8px;
	}

	.W-cart .cart-tik>span {
		position: absolute;
		top: 50%;
		left: 50%;
		display: block;
		border-radius: 8px;
		-webkit-transform: translate(-50%, -50%);
		-moz-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		-o-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}

	.W-cart .cart-tik .icon-a-red-tik {
		display: block;
	}

	.W-cart .shop-blocks {
		margin-bottom: 12px;
		background-color: #fff;
	}

	/* editing样式 */
	/* 编辑中 */
	.W-cart .shop-blocks.editing .editor {
		display: block;
	}

	/* 原本 */
	/* .W-cart .shop-blocks.editing .desc {
		display: none;
	} */

	.W-cart .shop-blocks .inner .editor {
		/* display: none; */
		position: relative;
		height: 127px;
		margin-left: 107px;
		padding-right: 60px;
	}

	.W-cart .shop-blocks .inner .editor .calc {
		position: relative;
		top: 13px;
		margin-right: 16px;
		border: 1px solid #ddd;
		height: 28px;
	}

	.W-cart .shop-blocks .inner .editor .calc span {
		display: inline-block;
		font-size: 18px;
		width: 40px;
		height: 28px;
		line-height: 28px;
		text-align: center;
		color: #979797;
	}

	.W-cart .shop-blocks .inner .editor .calc .val {
		display: block;
		margin: 0 40px;
		border-left: 1px solid #ddd;
		border-right: 1px solid #ddd;
		height: 28px;
		line-height: 28px;
		text-align: center;
		font-size: 14px;
	}



	.W-cart .shop-blocks .inner .editor .calc span:last-child {
		position: absolute;
		right: 0;
		top: 0;
	}

	.W-cart .shop-blocks .inner .editor .calc span {
		display: inline-block;
		font-size: 18px;
		width: 40px;
		height: 28px;
		line-height: 28px;
		text-align: center;
		color: #979797;
	}

	/* -----------------------结算---------------- */
	.W-cart-footer {
		position: fixed;
		bottom: 45px;
		width: 100%;
		max-width: 640px;
		z-index: 200;
	}

	.W-cart-footer .footer-bar {
		position: relative;
		width: 100%;
		height: 46px;
		background-color: #fff;
	}

	.W-cart-footer .footer-bar .left {
		padding-right: 99px;
		border-top: 1px solid #ddd;
	}

	.W-cart-footer .cart-tik {
		position: absolute;
		left: 12px;
		top: 0;
		line-height: 46px;
		font-size: 14px;
	}

	.W-cart-footer .cart-tik .normal {
		display: inline-block;
		width: 14px;
		height: 14px;
		line-height: 14px;
		border: 1px solid #ccc;
		border-radius: 8px;
	}

	.W-cart-footer .cart-tik span {
		display: inline-block;
		vertical-align: middle;
	}

	.W-cart-footer .cart-tik .icon-a-red-tik {
		display: none;
	}

	.W-cart-footer .cart-tik i {
		margin-left: 6px;
	}

	.W-cart-footer .detail {
		padding-top: 6px;
		padding-right: 10px;
		text-align: right;
		font-size: 10px;
		color: #999;
	}

	.W-cart-footer .detail>p:nth-child(1) {
		font-size: 12px;
		color: #666;
	}

	.W-cart-footer .detail>p:nth-child(1) span {
		font-size: 18px;
		color: #d90000;
		margin-left: 2px;
	}

	.h {
		display: none !important;
	}

	.W-cart-footer .submit-btn {
		position: absolute;
		top: 0;
		right: 0;
		width: 99px;
		height: 100%;
		background-color: #d90000;
		color: #fff;
		border: none;
		font-size: 14px;
		-webkit-border-radius: 0;
		-moz-border-radius: 0;
		border-radius: 0;
		z-index: 3;
		border-top: 1px solid #d90000;
	}
</style>
