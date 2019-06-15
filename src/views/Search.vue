<template>
	<div class="search">
		<!-- 搜索框 -->
		<div class="W_top_search">
			<header class="W_title">
				<ul class="clearfix">
					<li class="wb_title_middle wb_search">
						<form action="" onsubmit="return false;"><span class="srh_icon icon-a-search01"></span> <input type="search"
							 class="input_search" placeholder="搜索商品" maxlength="30" v-model="change"><span v-if="searchBlock" class="clean_search"
							 @click="searchGoods()">
								<router-link :to="'/list/'+ change" class="icon-a-close02 iconfont">&#xe6e4;</router-link>
							</span></form>
					</li>
					<li class="rewrite_right">
						<router-link to="/" class="right_back">取消</router-link>
					</li>
				</ul>
			</header>
		</div>
		<!-- main区域 -->
		<main>
			<div class="W_search_shop">
				<section class="search_word search_history">
					<p class="search_tit">历史搜索<em class="fr clean_history">清空</em></p>
					<div class="word_line clearfix"><a href="/shoubiao.html?sf=2&amp;w=电子表" class="fl esp1">电子表</a></div>
				</section>
				<section class="search_word search_hot">
					<p class="search_tit">热门搜索</p>
					<div class="word_line clearfix"> <a class="fl" href="https://m.wbiao.cn/shoubiao.html?sf=3&amp;w=天梭力洛克">天梭力洛克</a>
						<a href="//m.wbiao.cn/shop/539/" class="fl">616父亲节礼物</a> <a class="fl" href="https://m.wbiao.cn/shoubiao.html?sf=3&amp;w=浪琴">浪琴</a>
						<a class="fl" href="https://m.wbiao.cn/shoubiao.html?sf=3&amp;w=欧米茄">欧米茄</a> <a class="fl" href="https://m.wbiao.cn/shoubiao.html?sf=3&amp;w=卡西欧">卡西欧</a>
						<a href="//m.wbiao.cn/dynamic/18030776852/" class="fl">人气好物榜</a> <a href="//m.wbiao.cn/dynamic/18020879632/"
						 class="fl">手表特卖</a> <a href="//m.wbiao.cn/goods/12914.html" class="fl">4000元正装表推荐</a> </div>
				</section>
				<section class="in_the_input h"></section>
			</div>
		</main>
		<!-- 最新消息 -->
		<section class="W_common_con" style="height: 50px;">
			<div class="con_box" style="right: -371px;">
				<div class="W_ntalk" style="display: block;"><i class="icon-d-right-kf" kf="CUSTOMER-SERVICE"></i>
					<div class="ntalk_txt cl hide_ntalk" style="display: none;"><i class="icon-d-kfgirl fl"></i><span class="kf_txt">618年中盛惠提前开抢</span></div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import Vue from 'vue'
	export default Vue.extend({
		data() {
			return {
				change: '',
				gids: [],
				searchBlock: false,
				keyword: ''
			}
		},
		methods: {
			searchGoods() {
				//遍历仓库数组数据，逐一匹配
				//console.log(this.$store.state.goodslist);
				// if (this.change) {
				// let data = this.$store.state.goodslist;
				// let reg = new RegExp(this.change, 'g');
				// let goods = [];
				// for (let i = 0; i <= data.length - 1; i++) {
				// 	if (reg.test(data[i].describe)) {
				// 		//遍历仓库数组数据,匹配后拿商品id
				// 		this.gids.push(data[i].gid * 1);
				// 	} else {
				// 		console.log('no')
				// 	}
				// }
				// console.log(goods);
				// this.gids = goods;
				//console.log(this.gids);
				// }
				
				// 传搜索关键字
				this.$store.state.keyword = this.change;
				//console.log(this.$store.state.keyword);
			}
		},
		watch: {
			change: function(change) {
				//console.log(this.change)
				if (change) {
					this.searchBlock = true;
				} else {
					this.searchBlock = false;
				}
			}
		}
	})
</script>

<style>
	/* -------------search------------------ */
	.W_top_search {
		position: fixed !important;
		top: 0;
		background: #fff;
		border-bottom: 0 !important;
		z-index: 2;
		width: 100%;
		min-width: 320px;
		max-width: 640px;
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

	a {
		text-decoration: none;
		outline: 0;
		color: #666;
		border: none;
	}

	a,
	area,
	button,
	input,
	select {
		outline: 0;
		background-image: url(about:blank);
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

	.W_title ul li.wb_search {
		margin-left: 12px;
		margin-right: 56px;
	}

	.W_title li.wb_search {
		height: 28px;
		line-height: 28px;
		margin-top: 8px;
		margin-right: 44px;
		border-radius: 100px;
		background: #f1f1f1;
	}

	.W_title .wb_title_middle {
		width: auto;
		position: relative;
		margin-left: 44px;
	}

	.W_title ul li {
		display: block;
		width: 44px;
		height: 44px;
		line-height: 44px;
		font-size: 16px;
		color: #444;
	}

	.W_title li.wb_search form {
		margin-top: -3.5px;
	}

	.W_title li.wb_search .icon-a-search01 {
		position: absolute;
		top: 8px;
		left: 10px;
	}

	.icon-a-search01 {
		display: block;
		background-image: url(/public/sprites/a/a.png?20190423);
		background-position: -138px -417.5px;
		background-size: 443px;
		width: 12px;
		height: 12px;
	}

	.W_title li.wb_search input {
		width: 90%;
		height: 32px;
		font-size: 12px;
		color: #333;
		background: #f1f1f1;
		padding-left: 32px;
		border: none;
		box-sizing: border-box;
	}

	.W_title li .clean_search {
		position: absolute;
		right: 0px;
		top: 0px;
		width: 30px;
		height: 28px;
		z-index: 99;
	}

	.W_title li .clean_search i {
		position: absolute;
		top: 7px;
		right: 6px;
	}

	.icon-a-close02 {
		display: block;
		background-image: url(/public/sprites/a/a.png?20190423);
		background-position: -391px -368px;
		background-size: 443px;
		width: 30px;
		height: 28px;
	}

	em,
	i {
		font-style: normal;
	}

	.W_title ul li.rewrite_right {
		margin-right: 8px;
		text-align: center;
	}

	.W_title .rewrite_right,
	.W_title .wb_more,
	.W_title .wb_right {
		position: absolute;
		right: 0;
		top: 0;
		z-index: 2;
	}

	.W_title ul li.rewrite_right a {
		color: #477db3;
		font-size: 14px;
	}

	.W_title .rewrite_right a {
		display: block;
	}

	.clearfix:after {
		content: "";
		display: block;
		clear: both;
	}

	/* --------main---------- */
	main {
		display: block;
		position: relative;
		overflow: hidden !important;
		width: 100%;
		max-width: 640px;
	}

	.W_search_shop {
		margin-top: 55px;
	}

	.W_search_shop p.search_tit {
		font-size: 12px;
		color: #999;
		margin-top: 14px;
		padding: 0 12px;
		margin-bottom: 12px;
	}

	.fr {
		float: right !important;
	}

	em,
	i {
		font-style: normal;
	}

	.W_search_shop .search_history .word_line {
		max-height: 76px;
		overflow: hidden;
	}

	.W_search_shop .search_word .word_line {
		padding: 0 12px;
	}

	.W_search_shop .search_word .word_line a {
		display: block;
		max-width: 100%;
		margin-right: 10px;
		margin-bottom: 10px;
		padding: 0 9px;
		height: 28px;
		line-height: 28px;
		border-radius: 100px;
		border: 1px solid #ddd;
		box-sizing: border-box;
		font-size: 12px;
		color: #333;
	}

	.esp1 {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}

	.clearfix:after {
		content: "";
		display: block;
		clear: both;
	}

	.W_search_shop p.search_tit {
		font-size: 12px;
		color: #999;
		margin-top: 14px;
		padding: 0 12px;
		margin-bottom: 12px;
	}

	.W_search_shop .search_word .word_line {
		padding: 0 12px;
	}

	.W_search_shop .search_hot .word_line a:nth-child(-n+3) {
		border-color: #cc3d3d;
		color: #cc3d3d;
	}

	.W_search_shop .search_word .word_line a {
		display: block;
		max-width: 100%;
		margin-right: 10px;
		margin-bottom: 10px;
		padding: 0 9px;
		height: 28px;
		line-height: 28px;
		border-radius: 100px;
		border: 1px solid #ddd;
		box-sizing: border-box;
		font-size: 12px;
		color: #333;
	}

	/* 最新消息 */
	.W_common_con {
		position: fixed;
		bottom: 60px;
		z-index: 999;
	}

	.W_common_con .con_box {
		position: absolute;
	}

	.W_ntalk {
		display: none;
		position: relative;
	}

	.W_ntalk .icon-d-right-kf {
		margin-bottom: 10px;
	}

	.icon-d-right-kf {
		display: block;
		background-image: url(/public/sprites/d/d.png?20190519);
		background-position: -306.5px 0;
		background-size: 448.5px;
		width: 40px;
		height: 40px;
	}

	.W_ntalk .ntalk_txt.hide_ntalk {
		right: 40px;
	}

	.W_ntalk .ntalk_txt {
		display: none;
		width: 170px;
		position: absolute;
		right: 50px;
		top: 0;
		height: 32px;
		background-color: rgba(0, 0, 0, .75);
		border-radius: 4px;
		padding: 3px 8px;
		-webkit-transition: right .3s cubic-bezier(.25, .46, .45, .94);
		-moz-transition: right .3s cubic-bezier(.25, .46, .45, .94);
		-ms-transition: right .3s cubic-bezier(.25, .46, .45, .94);
		-o-transition: right .3s cubic-bezier(.25, .46, .45, .94);
		transition: right .3s cubic-bezier(.25, .46, .45, .94);
	}

	.icon-d-kfgirl {
		display: block;
		background-image: url(/public/sprites/d/d.png?20190519);
		background-position: -351.5px -287px;
		background-size: 448.5px;
		width: 31.5px;
		height: 31.5px;
	}

	.W_ntalk .ntalk_txt .kf_txt {
		display: block;
		font-size: 13px;
		color: #fff;
		margin-left: 4px;
		height: 32px;
		line-height: 32px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
