import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
<<<<<<< HEAD
import MintUI from 'mint-ui'
Vue.use(MintUI);
=======
import './assets/style/iconfont.css';

>>>>>>> 86fdd75c9b984f0da5bbea1d100c1c7b3e071744
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')