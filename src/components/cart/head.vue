<template>
	<div class="W-cart-head" id="W-cart-head">
		<div class="W_register h"><a href="//m.wbiao.cn/topics/app-download/" style="background-image:url(//static.wbiao.co/p/m/images/1/download_tips_2.png);background-size: 100% auto;background-position: center center;"
			 class="register"></a><span class="sp1" id="closer"></span></div>
		<header class="W_title">
			<ul class="clearfix">
				<li class="wb_title_middle wb_title">购物车</li>
				<li class="rewrite_right"> <a href="javascript:void(0);" class="h" id="w-editAll">编辑全部</a> <a href="javascript:void(0);"
					 class="h" id="w-editFinish">完成</a> </li>
			</ul>
		</header>
		<div class="login-tips">登录后购物车的商品将保存到您账号中，<a href="https://mu.wbiao.cn/member/login/?referrer=https://m.wbiao.cn/cart">现在登录</a></div>
	</div>
</template>

<script>
	export default {}
</script>

<style>
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
</style>
