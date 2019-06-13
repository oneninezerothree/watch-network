import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShowMfooter:true,
		goodslist:[]
  },
  mutations: {
		
  },
  actions: {

  },
	getters: {
	getdata(state) {
   return state.goodslist;
  }
		
	}
})
