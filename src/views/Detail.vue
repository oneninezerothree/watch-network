<template>
    <div>
        <Header></Header>
        <Swiper :bannerUrl='bannerUrl' :handprice="handprice"></Swiper>
        <Title
         :text='text' 
         :adv='adv'
         :newprice="newprice"
         :oldprice="oldprice"
         :handprice="handprice"
         :Sales="Sales"
         ></Title>
        <Coice></Coice>
        <Dis></Dis>
        <Footer></Footer>
        <div class="ding"></div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Header from '../components/detail/Header.vue'
import Swiper from '../components/detail/Swiper.vue'
import Title from '../components/detail/Title.vue'
import Coice from '../components/detail/Coice.vue'
import Dis from '../components/detail/Dis.vue'
import Footer from '../components/detail/Footer.vue'
import axios from 'axios'
export default Vue.extend({
    data(){
        return{
            goods:'',
            bannerUrl:[],
            text:'',
            adv:'',
            newprice:"",
            oldprice:"",
            handprice:"",
            Sales:""
        }
    },
    components:{
        Header,
        Swiper,
        Title,
        Coice,
        Dis,
        Footer
    },
    methods:{
        getGoodsInfo(){
            axios.get('https://www.easy-mock.com/mock/5cf5001e6e18ad42e9052ce1/example/watch-goods')
            .then(this.getGoodsInfoSucc)
        },
        getGoodsInfoSucc(res){
            res = res.data;
            var id = this.$route.params.id;
            var zhonglei = this.$store.state.zhonglei;
			var reg = new RegExp(id, 'g');
            var goods;
            if(res.List){
                const data = res.List;
				if (id) {
					// goods = [];
					data.map(function(item) {
						// console.log(item);
						item.List.map(function(it) {
							if (reg.test(it.id)) {
								//遍历仓库数组数据,匹配后拿商品id
								// goods.push(it);
								goods = it;
							}
						})
					})
				}
                this.goods = goods;
                this.bannerUrl = goods.bannerUrl;
                this.adv = goods.adv;
                this.text = goods.text;
                this.newprice = goods.newprice;
                this.oldprice = goods.oldprice;
                this.handprice = goods.handprice;
                this.Sales = goods.Sales;
            }
        }
    },
    mounted(){
        this.getGoodsInfo();
		// this.$store.state.num = 1;
    },
    created(){
        // detail组件进场通知Mfooter组件删除
        this.$store.state.isShowMfooter = false;
		
    },
    deactivated () {
        this.$destroy(true)
    }
})
</script>
<style lang="scss" scoped>
.ding{
    height: 3rem;
}
</style>
