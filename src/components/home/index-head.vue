<template>
	<div>
		<section class="W_head">
			<div class="W_register h"><a href="###" style="background-image:url(//static.wbiao.co/p/m/images/1/download_tips_2.png);background-size: 100% auto;background-position: center center;"
				 class="register"></a><span class="sp1" id="closer"></span></div>
			<header class="W_title">
				<ul class="clearfix">
					<li class="wb_back user_custom"> <a href="###" class="head-logo"><img src="//static.wbiao.co/p/m/images/1/head-logo.png"
							 alt=""></a> </li>
					<li class="wb_title_middle wb_index_srearch all_search"> <router-link to="/search" class="to_search esp1"></router-link>购表享12期分期免息优惠<span
						 class="srh_icon icon-a-search01"></span></li>
					<li class="wb_right wb_right_kf CUSTOMER-SERVICE"><a href="javascript:void(0);" class="icon-d-ntalk"></a></li>
				</ul>
			</header>
		</section>
		<div class="W_head_interval W_config_head"></div>
	</div>
</template>

<script>
	import Vue from 'vue';
	export default Vue.extend({
		data() {
			return {}
		},
		methods:{
			seach(){
				console.log('ok');
			}
		}
	})
</script>

<style>
	.W_head {
		width: 100%;
		background: #fff;
		max-width: 640px;
		position: fixed;
		top: 0;
		z-index: 997;
		box-shadow: 2px 2px 1px #f2f2f2;
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

	.W_head .W_title {
		border-bottom: 0;
	}

	.W_title {
		height: auto !important;
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

	.W_title ul {
		height: 50px !important;
		position: relative;
	}

	dd,
	dl,
	dt,
	li,
	ol,
	ul {
		list-style: none;
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

	.W_head .W_title .wb_back {
		width: 71px;
	}

	.W_title .user_custom {
		width: 71px;
	}

	.W_title .wb_back {
		position: absolute;
		left: 0;
		z-index: 2;
	}

	.W_title ul li {
		display: block;
		width: 44px;
		height: 44px;
		line-height: 44px;
		font-size: 16px;
		color: #444;
	}

	.W_head .W_title .head-logo {
		margin: 10px auto 0;
		display: block;
		width: 48px;
		height: 24px;
	}

	a,
	area,
	button,
	input,
	select {
		outline: 0;
		background-image: url(about:blank);
	}

	.W_head .W_title .head-logo img {
		width: 100%;
		display: block;
	}

	.W_head .W_title li.wb_index_srearch {
		margin-top: 10px !important;
		margin-right: 45px;
	}

	.W_head .W_title .wb_index_srearch {
		margin-right: 6px;
		margin-left: 71px;
	}

	.W_title li.wb_index_srearch {
		height: 28px;
		margin-top: 8px;
		margin-right: 45px;
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

	.W_title li.wb_index_srearch .to_search {
		border: 0 !important;
	}

	.W_title li.wb_index_srearch .to_search {
		display: block;
		height: 26px;
		line-height: 26px;
		background: #f1f1f1;
		border-radius: 13px;
		font-size: 12px;
		color: #999;
		padding-left: 32px;
	}

	.esp1 {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}

	.W_title .wb_search_result .srh_icon,
	.W_title li.wb_index_srearch .srh_icon {
		position: absolute;
		top: 8px;
		left: 11px;
	}

	.icon-a-search01 {
		display: block;
		background-image: url(/public/sprites/a/a.png?20190423);
		background-position: -138px -417.5px;
		background-size: 443px;
		width: 12px;
		height: 12px;
	}

	.icon-d-ntalk {
		display: block;
		background-image: url(/public/sprites/d/d.png?20190519);
		background-position: -257.5px -98px;
		background-size: 448.5px;
		width: 44px;
		height: 44px;
	}

	.W_title .wb_right_kf {
		text-align: center;
		color: #333;
		font-size: 10px;
	}

	.W_title .rewrite_right,
	.W_title .wb_more,
	.W_title .wb_right {
		position: absolute;
		right: 0;
		top: 0;
		z-index: 2;
	}

	.clearfix:after {
		content: "";
		display: block;
		clear: both;
	}

	.W_config_head {
		height: 50px !important;
	}

	.W_head_interval {
		height: 90px;
		width: 100%;
	}
</style>
