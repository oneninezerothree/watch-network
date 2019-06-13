<template>
    <div>
        <Header></Header>
        <Nav></Nav>
        <Goods :list="goods"></Goods>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Header from '../components/list/Header.vue'
import Nav from '../components/list/Nav.vue'
import Goods from '../components/list/Goods.vue'
import axios from 'axios'
export default Vue.extend({
    data(){
        return{
            goods:[]
        }
    },
    components:{
        Header,
        Nav,
        Goods
    },
    methods:{
        getGoodsInfo(){
            axios.get('https://www.easy-mock.com/mock/5cf5001e6e18ad42e9052ce1/example/watch-goods')
            .then(this.getGoodsInfoSucc)
        },
        getGoodsInfoSucc(res){
            res = res.data;
            if(res.data){
                const data = res.data;
                // console.log(data);
                this.goods = data.List;
            }
        }
    },
    mounted(){
        this.getGoodsInfo();
		console.log(this.$route.query.id)
    }
})
</script>
<style lang="scss" scoped>

</style>
