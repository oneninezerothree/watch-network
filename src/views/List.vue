<template>
    <div>
        <Header></Header>
        <Nav v-on:childByValue="childByValue" :list="goods"></Nav>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Header from '../components/list/Header.vue'
import Nav from '../components/list/Nav.vue'
import axios from 'axios'

export default Vue.extend({
    data(){
        return{
            goods:[],
            paixu:'def'
        }
    },
    components:{
        Header,
        Nav
    },
    methods:{
        childByValue:function (childValue) {
            // childValue就是子组件传过来的值
            this.paixu = childValue;
        },
        getGoodsInfo(){
            axios.get('https://www.easy-mock.com/mock/5cf5001e6e18ad42e9052ce1/example/watch-goods')
            .then(this.getGoodsInfoSucc)
        },
        getGoodsInfoSucc(res){
            res = res.data;
            var name = this.$route.params.name;
            this.$store.state.zhonglei = name;
            var paixu = this.paixu;
            var goods;
            if(res.List){
                const data = res.List;
                data.find(function(index){
                    //判断是什么表
                    if(index.category == name){
                        //存到仓库
                        goods = index.List;
                    }
                })
                this.$store.goods = goods;
                //在判断是什么排序方式
                //销量
                if(paixu == 'asc'){
                    this.$store.goods.sort(function(a,b){
                        var m= parseInt(a.newprice.replace(/[,¥]/g,"")); 

                        var n= parseInt(b.newprice.replace(/[,¥]/g,"")); 
                        // var m =  a.newprice;
                        // var n = b.newprice;
                        return m - n;
                    })
                    //价格
                }else if(paixu == 'desc'){
                    this.$store.goods.sort(function(a,b){
                        var m = a.Sales;
                        var n = b.Sales;
                        return n - m;
                    })                            
                }else{
                    this.$store.goods.sort(function(a,b){
                        var m = a.id;
                        var n = b.id;
                        return n - m;
                    }) 
                }
                this.goods = goods;
            }
        },
    },
    mounted(){
        this.getGoodsInfo();
        this.$store.state.isShowMfooter=false;
    },
    watch:{
        'paixu':function(newVal,oldVal){
            this.getGoodsInfo();
        }
    },
    deactivated () {
        this.$destroy(true)
    }
})
</script>
<style lang="scss" scoped>

</style>
