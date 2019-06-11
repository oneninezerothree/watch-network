<template>
      <div>
          <Header></Header>
          <Main 
            :list='List'
            :like="Like"
            :country="country"
            :hot='hot'
          ></Main>
      </div>
</template>
<script>
import Header from '../components/choice/Header.vue'
import Main from '../components/choice/Main.vue'
import axios from 'axios'
export default {
  name: 'choice',
  data(){
    return{
      List:[],
      Like:[],
      country:[],
      hot:[]
    }
  },
  components: {
      Header,
      Main
  },
  methods:{
    getChoiceInfo(){
      axios.get("https://www.easy-mock.com/mock/5cf5001e6e18ad42e9052ce1/example/watch-fenlei")
      .then(this.getChoiceInfoSucc)
    },
    getChoiceInfoSucc(res){
      res = res.data;
      if(res.data){
        const data = res.data;
        // console.log(data);
        this.List = data.List;
        this.Like = data.Like;
        this.country = data.country;
        this.hot = data.hot;
      }
    }
  },
  mounted(){
        this.getChoiceInfo();
    },
}
</script>
<style>
</style>