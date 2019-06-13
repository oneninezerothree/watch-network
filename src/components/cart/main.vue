<template>
	<main>
		<div class="W-cart paddingTop80" id="W-cart">
			<div class="empty-status">
				<div class="icon icon-a-empty-cart"></div>
				<p>购物车是空的</p>
				<div class="btns-wrap">
					<div class="btns left"> <a href="https://m.wbiao.cn">逛逛首页</a></div>
					<div class="btns right"> <a href="https://mu.wbiao.cn/member/collection">查看收藏</a></div>
				</div>
			</div>
			<div class="cart-content"></div>
		</div>
	</main>
</template>

<script>
	export default{}
</script>

<style>
	body {
		width: 100%;
		max-width: 640px;
		min-width: 320px;
		/* background-color: #f1f1f1; */
		color: #666;
		padding: 0;
		margin: 0 auto;
	}main {
    display: block;
    position: relative;
    overflow: hidden!important;
    width: 100%;
    max-width: 640px;
}* {
    font-family: Helvetica,Tahoma,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei",STXihei,STHeiti,Heiti,SimSun,sans-serif;
    margin: 0;
    padding: 0;
    font-size: 1em;
    -webkit-tap-highlight-color: rgba(255,255,255,0);
}a {
    text-decoration: none;
    outline: 0;
    color: #666;
    border: none;
}
.W-cart.paddingTop80 {
    padding-top: 80px;
}.W-cart {
    padding-top: 60px;
    padding-bottom: 130px;
}.W-cart .empty-status {
    padding-top: 43px;
    text-align: center;
}.W-cart .empty-status .icon {
    margin: 0 auto;
}.icon-a-empty-cart {
    display: block;
    background-image: url(/public/sprites/a/a.png?20190423);
    background-position: -89px -89px;
    background-size: 443px;
    width: 82px;
    height: 84px;
}.W-cart .empty-status>p {
    font-size: 14px;
    line-height: 20px;
    padding-top: 16px;
}.W-cart .empty-status .btns-wrap {
    margin-top: 60px;
    text-align: center;
}.W-cart .empty-status .btns-wrap .btns:first-child {
    margin-right: 18px;
    background-color: #d90000;
    color: #fff;
}.W-cart .empty-status .btns-wrap .btns {
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
}.W-cart .empty-status .btns-wrap .btns:first-child a {
    color: #fff;
}.W-cart .empty-status .btns-wrap .btns a {
    color: #d90000;
}
</style>
