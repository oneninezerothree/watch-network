<template>
  <div>
    <div class="pr_coice">
      <div class="coice_content clearfix">
        <div class="coice_content_title fl">已选</div>
        <div class="coice_content_cont fl">
          <span class="coice_content_cont_cont">真皮 蓝色 牛皮</span>
          <span class="coice_content_cont_num">{{this.num}}</span>个
        </div>
        <div class="icon-a-goods-more fr" @click="getInfo">···</div>
      </div>
    </div>
    <div class="tc_container tc_container_choice" v-show="isShow" style="display:block;">
      <div class="tc_bg"></div>
      <div class="tc_content tc_bottom">
        <div class="choice_content">
          <div class="choice_content_a">
            <div class="choice_content-a_img">
              <img
                src="//image7.wbiao.co/shop/b375d2dced5644f6b5d46806cf16d2e8.jpg?x-oss-process=image/resize,w_95,h_95"
                alt
              >
            </div>
            <div class="choice_content-a_title">
              <div class="choice_content-a_title_price">￥5770</div>
              <div class="choice_content-a_title_bian" data-index="42471">
                <span>商品编号：42471</span>
                <span>有现货</span>
              </div>
            </div>
            <div class="choice_content-a_ico icon-a-close01" @click="close">X</div>
          </div>
          <div class="choice_content_b">
            <div class="choice_content_b_title">款式</div>
            <div class="choice_content_b_content">
              <span class="colour">
                <a href="/goods/42471.html">真皮 蓝色 牛皮</a>
              </span>
            </div>
            <div class="choice_content_b_num">
              <div class="choice_content_b_num_a">购买数量</div>
              <div class="choice_content_b_num_b">
                <span class="fl reduce boder_colour" @click="btn_minute">-</span>
                <input
                  type="text"
                  value="1"
                  class="cont fl"
                  id="count"
                  v-model.number="num"
                  onkeyup="this.value=this.value.replace(/[^\d]/g,'') "
                  onafterpaste="this.value=this.value.replace(/[^\d]/g,'')"
                >
                <span class="fl plus" @click="num++">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
    data(){
        return{ 
            num : '1',
            isShow : false
        }
    },
  methods: {
    getInfo() {
        this.isShow = !this.isShow;
        console.log(this.isShow);
    },
    close(){
        this.isShow = false;
    },
    btn_minute(){
        var num = this.num;
        if (num >= 2) {
            num = num - 1;
            this.num = num;
        }
    }
  },
  watch:{
	  'num':function(newVal){
		  this.$store.state.num = newVal;
		  // console.log(this.$store.state.num);
	  }
  }
});
</script>
<style lang="scss" scoped>
.pr_coice {
  width: 100%;
  padding-left: 3%;
  padding-right: 3%;
  background-color: #fff;
  margin-bottom: 12px;
}
.pr_coice > .coice_content {
  width: 100%;
  padding-top: 5px;
  padding-bottom: 3px;
  line-height: 32px;
}
.pr_coice > .coice_content > .coice_content_title {
  width: 12%;
  font-size: 14px;
  color: #666;
}
.pr_coice > .coice_content > .coice_content_cont {
  width: 70%;
  font-size: 14px;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 700;
}
.icon-a-goods-more {
  display: block;
  text-align: right;
  height: 32px;
}
.clearfix:after {
  content: "";
  display: block;
  clear: both;
}


.tc_container {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    display: none;
    max-width: 640px;
}
.tc_container>.tc_bg {
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
}
.tc_container>.tc_bottom {
    bottom: 0!important;
}

.tc_container>.tc_content {
    width: 100%;
    height: 60%;
    max-height: 60%;
    position: absolute;
    bottom: -60%;
    z-index: 99;
    background: #fff;
    text-align: center;
    transition: bottom .3s cubic-bezier(.25,.46,.45,.94);
}
.choice_content {
    width: 94%;
    padding: 0 3%;
}
.choice_content .choice_content_a:nth-child(1) {
    width: 100%;
    display: block;
    position: relative;
}
.choice_content .choice_content_a .choice_content-a_img {
    position: absolute;
    left: 0;
    top: -2.7rem;
    border: 1px solid #ddd;
    padding: .2em;
    background-color: #fff;
    border-radius: .2em;
    width: 4.88rem;
}
.choice_content .choice_content_a .choice_content-a_img img {
    width: auto;
    height: 4.88rem;
    vertical-align: top;
    margin: 0 auto;
    max-width: 4.88rem;
}
.choice_content .choice_content_a .choice_content-a_title {
    width: 100%;
    margin-left: 6rem;
    text-align: left;
}
.choice_content .choice_content_a .choice_content-a_title .choice_content-a_title_price {
    color: #d90000;
    font-size: 16px;
    font-weight: 700;
    margin-top: .65rem;
}
.choice_content .choice_content_a .choice_content-a_title .choice_content-a_title_bian {
    color: #999;
    font-size: 12px;
    margin-top: 5px;
}
.choice_content .choice_content_a .choice_content-a_ico {
    position: absolute;
    top: 2px;
    right: -6px;
    margin-top: 3px;
}
.choice_content .choice_content_b {
    width: 100%;
    display: inline-block;
    margin-top: 8%;
    height: 13.5rem;
    overflow-y: scroll;
}
.choice_content .choice_content_b .choice_content_b_title {
    text-align: left;
    color: #999;
    font-size: 14px;
}
.choice_content .choice_content_b .choice_content_b_content {
    width: 100%;
    margin-top: 15px;
    text-align: left;
}
.choice_content .choice_content_b .choice_content_b_content span {
    color: #999;
    font-size: 12px;
    padding: 3px 6px;
    border: 1px solid #f1f1f1;
    display: inline-block;
    margin-right: 2px;
    margin-bottom: 10px;
    border-radius: 4px;
    max-width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.choice_content .choice_content_b .choice_content_b_content .colour {
    background-color: #d90000;
    color: #fff;
    border: 1px solid #d90000;
}

.choice_content .choice_content_b .choice_content_b_content span {
    color: #999;
    font-size: 12px;
    padding: 3px 6px;
    border: 1px solid #f1f1f1;
    display: inline-block;
    margin-right: 2px;
    margin-bottom: 10px;
    border-radius: 4px;
    max-width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.choice_content .choice_content_b .choice_content_b_content .colour a {
    color: #fff;
}
.choice_content .choice_content_b .choice_content_b_num {
    width: 100%;
    display: inline-block;
    margin-top: 8px;
    text-align: left;
}
.choice_content .choice_content_b .choice_content_b_num_a {
    color: #999;
    font-size: 14px;
}
.choice_content .choice_content_b .choice_content_b_num_b {
    width: 100%;
    display: inline-block;
    margin-top: 10px;
}
.choice_content .choice_content_b .choice_content_b_num .choice_content_b_num_b .boder_colour {
    border: 1px solid #ccc;
    color: #ccc;
}
.choice_content .choice_content_b .choice_content_b_num .choice_content_b_num_b .reduce {
    border-right: 0!important;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
}

.choice_content .choice_content_b .choice_content_b_num_b span {
    display: inline-block;
    width: 1.91rem;
    height: 1.44rem;
    text-align: center;
    border: 1px solid #999;
    font-size: .75rem;
    line-height: 1.44rem;
    vertical-align: top;
}
.choice_content .choice_content_b .choice_content_b_num .choice_content_b_num_b .cont {
    outline: 0;
    display: inline-block;
    width: 5rem;
    height: 1.44rem;
    text-align: center;
    font-size: .75rem;
    line-height: 1.44rem;
    vertical-align: top;
    color: #000;
    font-weight: 700;
    border: 1px solid #999;
}
.choice_content .choice_content_b .choice_content_b_num .choice_content_b_num_b .plus {
    border-left: 0;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
}

.choice_content .choice_content_b .choice_content_b_num_b span {
    display: inline-block;
    width: 1.91rem;
    height: 1.44rem;
    text-align: center;
    border: 1px solid #999;
    font-size: .75rem;
    line-height: 1.44rem;
    vertical-align: top;
}
</style>
