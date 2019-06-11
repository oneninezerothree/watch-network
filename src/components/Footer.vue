<template>
  <div v-if="isShowMfooter" class="_3jvb2nTFcJZaKfGT3jLO-N">
    <div class="_2_zO9X158TTb_XBigSBXaa">
      <!-- 编程式导航 -->
      <a v-for="(t,index) in tabs" :key="index" @click="toggleTab(index,$event)" :class="{ active:index==current}"  class="vhHLSLSvFKDyfNbVNtOGV _1XFdFVvdIV2Kk5DvkemeIS" >
        <div class="_3qJAJgmwFK8XUy7QH5OT8t iconfont" :class="t.className" v-html="t.icon" ></div>
        <div class="_2q_OgZBvsix_vxRGtxelUo" v-text="t.name"></div>
      </a>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
export default({
  name: 'Footer',
  data(){
    return {
      current:0,
      tabs: [
        {
          // 选项卡的名字
          name: '首页',
          // 跳转路由
          url: 'home',
          // 图标
          className: '_2JMxUK2tV5fNkgpziy4SwV',
          icon : '&#xe677;'
        },
        {
          name: '选表',
          url: 'choice',
          className: '_26drFUnsVh-214x7eRutxe',
          icon : '&#xe771;'
        },
        {
          name: '购物车',
          url: 'cart',
          className: 'NofT5VOaEk7jwz6aM-096',
          icon : '&#xe606;'
        },
        {
          name: '我的',
          url: 'mine',
          className: 'NofT5VOaEk7jwz6aM-096',
          icon : '&#xe64a;'
        },
      ],
    }
  },
  methods:{
    toggleTab(index,e){
      this.current=index;
      // 编程式导航
      // router.push(...)
      this.$router.push({
        name: this.tabs[index].url
      })
    }
  },
  computed:{
    isShowMfooter(){
      // 从仓库获取值到组件
      return this.$store.state.isShowMfooter
    }
  }
})
</script>
<style lang="scss" scoped>
a{
  text-decoration: none;
}
._3jvb2nTFcJZaKfGT3jLO-N {
    background: #fafafa;
    position: fixed;
    z-index: 10;
    left: 0;
    right: 0;
    bottom: 0;
    left: constant(safe-area-inset-left) !important;
    left: env(safe-area-inset-left) !important;
    right: constant(safe-area-inset-right) !important;
    right: env(safe-area-inset-right) !important;
}
._3jvb2nTFcJZaKfGT3jLO-N ._2_zO9X158TTb_XBigSBXaa {
    display: flex;
}
.vhHLSLSvFKDyfNbVNtOGV {
    flex: 1 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 3.0625rem;
}
._3qJAJgmwFK8XUy7QH5OT8t {
    width: 1.875rem;
    height: 1.875rem;
    margin-top: 0.125rem;
    display: inline-block;
    text-align: center;
    line-height: 1.875rem;
}
._1XFdFVvdIV2Kk5DvkemeIS ._2q_OgZBvsix_vxRGtxelUo {
    color: #333;
}
._2q_OgZBvsix_vxRGtxelUo {
    color: #999;
    margin-bottom: 0.1875rem;
    font-size: 0.75rem;
    line-height: 0.875rem;
    transform-origin: 50% 0;
    transform: scale(0.83);
    width: 3rem;
    text-align: center;
    display: inline-block;
}
.active{
  color: red;
}

</style>
