<template>
  <div id="my">
    <div class="top">
      <div class="header">
        <a id="icon-gear" class="icon">
          <span class="mui-icon mui-icon-gear-filled"></span>
        </a>
        <a href="##" class="head-info">
          <router-link to="/login" tag="a">
            <span class="mui-icon mui-icon-contact"></span>
          </router-link>
          <div class="head-login">
            <router-link to="/login" tag="a">
              <p class="p1">{{uname}}</p>
            </router-link>
            <p class="p2" @click="out">{{title}}</p>
          </div>
        </a>
      </div>
      <div class="member-nav">
        <a href="/member/profile/">
          <span class="mui-icon mui-icon-compose"></span>
          <span>个人资料</span>
        </a>
        <a href="/member/consignee/">
          <span class="mui-icon mui-icon-location"></span>
          <span>收货地址</span>
        </a>
        <a href="/member/collection/">
          <span class="mui-icon mui-icon-star"></span>
          <span>我的收藏</span>
        </a>
      </div>
    </div>
    <div class="profile" v-show="isShow">
      <p class="no-login">
        登录后将显示您的详细资料~
        <router-link to="/login" tag="a">马上登录&gt;</router-link>
      </p>
    </div>
    <div class="modules-floor order-floor">
      <a href="/member/order/#?nav=0" class="floor-top to-my-order">
        我的订单
        <span class="mui-icon mui-icon-arrowright"></span>
      </a>
      <div class="list-line clearfix">
        <a href="/member/order/#?nav=1">
          <span class="mui-icon-extra mui-icon-extra-card"></span> 待付款
        </a>
        <a href="/member/order/#?nav=2">
          <span class="mui-icon-extra mui-icon-extra-order"></span> 待发货
        </a>
        <a href="/member/order/#?nav=3">
          <span class="mui-icon-extra mui-icon-extra-express"></span> 待收货
        </a>
        <a href="/member/order/#?nav=4">
          <span class="mui-icon mui-icon-chatbubble"></span> 待评价
        </a>
      </div>
    </div>
    <div class="modules-floor">
      <a href="/member/order/#?nav=0" class="floor-top to-my-order">
        我的服务
        <span class="mui-icon-extra mui-icon-extra-custom">
          <a href="#" class="tip">联系万表</a>
        </span>
      </a>
      <div class="list-line clearfix">
        <a href="/member/order/#?nav=1">
          <span class="mui-icon-extra mui-icon-extra-outline"></span> 我的预售
        </a>
        <a href="/member/order/#?nav=2">
          <span class="mui-icon-extra mui-icon-extra-gift"></span> 我的礼品单
        </a>
        <a href="/member/order/#?nav=3">
          <span class="mui-icon-extra mui-icon-extra-card"></span> 售后服务
        </a>
        <a href="/member/order/#?nav=4">
          <span class="mui-icon-extra mui-icon-extra-gold"></span> 我的积分
        </a>
      </div>
      <div class="list-line clearfix">
        <a href="/member/order/#?nav=1">
          <span class="mui-icon-extra mui-icon-extra-topic"></span> 发票管理
        </a>
        <a href="/member/order/#?nav=2">
          <span class="mui-icon-extra mui-icon-extra-order"></span> 优惠券
        </a>
        <a href="/member/order/#?nav=3">
          <span class="mui-icon-extra mui-icon-extra-prech"></span> 余额
        </a>
        <a href="/member/order/#?nav=4">
          <span class="mui-icon mui-icon-flag"></span> 足迹
        </a>
      </div>
      <div class="list-line clearfix">
        <a href="/member/order/#?nav=1">
          <span class="mui-icon mui-icon-chatboxes"></span> 我的评论
        </a>
        <a href="/member/order/#?nav=2">
          <span class="mui-icon-extra mui-icon-extra-share"></span> 推荐
        </a>
        <a href="/member/order/#?nav=3">
          <span class="mui-icon mui-icon-personadd"></span> 手表管家
        </a>
        <a href="/member/order/#?nav=4">
          <span class="mui-icon-extra mui-icon-extra-dictionary"></span> 维修订单
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { delCookie, getCookie } from "../assets/js/cookie.js";
export default {
  data() {
    return {
      uname: "登录/注册",
      title: "登录享优惠",
      isShow: true
    };
  },
  mounted() {
    /*页面挂载获取cookie，如果存在uname的cookie，不需登录*/
    if (getCookie("phone")) {
      const username = getCookie("phone");
      this.uname = username;
      this.title = "退出账号";
      this.isShow = false;
    }
  },
  methods: {
    // 退出登录
    out() {
      delCookie("phone");
      this.$router.push("/login");
    }
  }
};
</script>
<style lang="scss">
#my {
  overflow: auto;
  margin-bottom: 40px;
}
.top {
  position: relative;
  width: 100%;
  height: 206px;
  background-image: url(//static.wbiao.co/p/m/images/1/member-bg.png);
  background-size: cover;
  background-color: #1e1e1e;
  .header {
    position: relative;
    height: 154px;
    .icon {
      position: absolute;
      color: #ccc;
      top: 10px;
      left: 90%;
      .mui-icon {
        font-size: 28px;
      }
    }
    .head-info {
      position: absolute;
      width: 95%;
      margin-top: 45px;
      .head-login {
        display: inline-block;

        font-size: 12px;
        vertical-align: top;
        margin-top: 13px;
        .p1 {
          color: #fff !important;
          font-size: 16px;
          margin-bottom: 2px;
        }
        .p2 {
          color: #fff !important;
          font-size: 12px;
        }
      }
      .mui-icon {
        font-size: 68px;
        width: 68px;
        height: 68px;
        margin: 0 8px 0 24px;
        color: #ccc;
      }
    }
  }
  .member-nav {
    width: 100%;
    height: 52px;
    background: rgba(0, 0, 0, 0.4);
    a {
      position: relative;
      width: 33.33%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      float: left;
      color: #fff;
      font-size: 12px;
      text-align: center;
      line-height: 17px;
      .mui-icon {
        font-size: 20px;
      }
    }
    a:nth-child(2) {
      border-left: 1px solid rgba(211, 211, 211, 0.3);
      border-right: 1px solid rgba(211, 211, 211, 0.3);
    }
  }
}
.profile {
  width: 91.47%;
  margin: 0 auto;
  padding: 18px 0 10px;
  p {
    height: 28px;
    line-height: 28px;
    font-size: 12px;
    text-align: center;
  }
  p.no-login {
    background: #cc3d3d;
    color: #fff;
    a {
      color: #fff;
    }
  }
}
.modules-floor {
  margin-bottom: 8px;
  background: #fff;
  .to-my-order {
    display: block;
  }
  .floor-top {
    height: 44px;
    line-height: 44px;
    padding-right: 12px;
    margin-left: 12px;
    font-size: 14px;
    color: #333;
    border-bottom: 1px solid #f1f1f1;
    box-sizing: border-box;
    .mui-icon {
      float: right;
      margin-top: 10px;
    }
    .mui-icon-extra {
      font-size: 22px;
      margin-top: 5px;
      float: right;
      .tip {
        font-size: 14px;
      }
    }
  }
  .list-line {
    height: 80px;
    width: 100%;
  }
  .list-line a {
    width: 25%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    float: left;
    text-align: center;
    font-size: 12px;
    color: #333;
    background: white;
    .mui-icon {
      font-size: 24px;
    }
    .mui-icon-extra {
      font-size: 22px;
    }
  }
}
</style>



