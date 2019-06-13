<template>
  <div id="login">
    <!-- 头部 -->
    <div class="header">
      <mt-header fixed>
        <router-link to="/mine" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <router-link to="/register" slot="right">
          <mt-button>注册</mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="login_content">
      <mt-navbar v-model="selected">
        <mt-tab-item id="tab1">手机登录</mt-tab-item>
        <mt-tab-item id="tab2">账号登录</mt-tab-item>
      </mt-navbar>

      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="tab1">
          <div class="user_logins">
            <div class="box">
              <p class="phone">
                <input
                  maxlength="13"
                  type="tel"
                  onkeyup="value=value.replace(/[^\d\s]/g,'')"
                  placeholder="手机号"
                  class="phone_num"
                >
              </p>
              <p class="identify">
                <input maxlength="4" type="text" placeholder="图形验证码" id="imgCaptcha">
                <img
                  src="/pub/captcha2?w=88&amp;h=38&amp;81140653"
                  onclick="this.src='/pub/captcha2?w=88&amp;h=38&amp;'+Math.random();"
                  alt="验证码"
                  title="看不清？点击更换另一个验证码。"
                >
              </p>
              <p class="note">
                <input
                  maxlength="6"
                  onkeyup="value=value.replace(/[^\d]/g,'')"
                  type="tel"
                  placeholder="短信验证码"
                  class="note_code"
                >
                <a href="javascript:void(0);" id="sendCode">获取验证码</a>
              </p>
            </div>
            <a href="javascript:void(0);" class="login" id="mobile_login">登&nbsp;&nbsp;录</a>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab2">
          <div class="psd_logins h">
            <div class="box account">
              <p class="phone">
                <input type="text" placeholder="手机号/会员名/邮箱" id="userName">
              </p>
              <p class="phone">
                <input type="password" placeholder="请输入密码" id="userPsd">
                <i class="icon-a-eye"></i>
              </p>
              <p class="identify h">
                <input type="text" placeholder="请输入图形验证码">
                <img
                  src="/pub/captcha?w=98&amp;h=38&amp;41865263"
                  onclick="this.src='/pub/captcha?w=98&amp;h=38&amp;'+Math.random();"
                  alt="验证码"
                  title="看不清？点击更换另一个验证码。"
                >
              </p>
            </div>
            <a href="javascript:void(0);" class="login" id="user_login">登&nbsp;&nbsp;录</a>
            <a
              href="/member/forgetpsd?referrer=https://mu.wbiao.cn/member/register?referrer=https://mu.wbiao.cn/member/register?referrer=https://mu.wbiao.cn/member"
              class="forget_pass"
            >忘记密码?</a>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      selected: "tab1"
    };
  }
});
</script>

<style lang="scss">
body{
    background-color:white
}
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
#login {
  width: 100%;
  height: auto;
  .header {
    height: 40px;
    .mint-header {
      background-color: white !important;
      .mintui {
        color: black !important;
        font-size: 20px !important;
      }
      .mint-button-text {
        color: black !important;
      }
    }
  }
  .login_content{
      margin-top: 50px
  }
  .mint-tab-item {
    font-size: 24px !important;
    color: #ccc;
  }
  .is-selected {
    color: black !important;
    border-bottom: none !important;
    font-weight: 800;
    font-size: 24px !important;
  }
  .mint-tab-item-label {
    font-size: 24px !important;
  }
  .mint-tab-container {
    padding: 0 7.5% !important;
    .box {
      margin-top: 31px;
      background: #fff;
      p {
        height: 44px;
        border-bottom: 1px solid #ededed;
        position: relative;
        margin-bottom: 25px;
        color: #333;
        input,
        span {
          font-size: 14px;
          height: 44px;
          border: none;
          outline: 0;
          float: left;
        }
      }
      p.identify img {
        float: left;
        width: 90px;
        margin-top: 3px;
        position: absolute;
        height: 41px;
        right: 0;
        top: 0;
        overflow: hidden;
        font-size: 14px
      }
      p.note a {
        width: 90px;
        float: left;
        height: 44px;
        line-height: 44px;
        font-size: 12px;
        color: #999;
        text-align: center;
        position: absolute;
        top: 0;
        right: 0;
      }
    }
    a.login {
      width: 100%;
      margin: 45px auto 0;
      line-height: 44px;
      background: #aaa;
      font-size: 16px;
      font-family: PingFangSC-Regular;
      text-align: center;
      display: block;
      height: 44px;
      color: #ccaa7a;
      background-image: linear-gradient(-180deg, #3a3a3a 0, #1c1c1c 100%);
    }
    .forget_pass {
      display: block;
      margin-top: 25px;
      text-align: center;
      font-size: 12px;
      color: #999;
    }
  }
}
</style>

