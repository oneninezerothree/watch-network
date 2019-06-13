<template>
  <div id="login">
    <!-- 头部 -->
    <div class="header">
      <mt-header fixed>
        <router-link to="/" slot="left">
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
                  oninput="if(value.length>11)value=value.slice(0,11)"
                  type="number"
                  placeholder="手机号"
                  id="phone"
                  v-model="phone"
                  @blur="checkPhone"
                >
              </p>
              <p class="identify">
                <input
                  type="text"
                  placeholder="图形验证码"
                  id="identify_code"
                  maxlength="4"
                  v-model="picLyanzhengma"
                  @blur="checkLpicma"
                >
                <input class="img" type="button" @click="createdCode" v-model="checkCode">
              </p>
              <p class="note">
                <input
                  type="number"
                  placeholder="短信验证码"
                  id="note_code"
                  maxlength="6"
                  v-model="sendcode"
                  @blur="checkPCode"
                >
                <input
                  type="button"
                  id="send_code"
                  value="发送验证码"
                  :disabled="disabled"
                  v-if="disabled==false"
                  @click="Sendcode"
                >
                <input
                  type="button"
                  id="send_code"
                  :value="btntxt"
                  :disabled="disabled"
                  v-if="disabled==true"
                  @click="sendcode"
                >
              </p>
            </div>
            <a
              href="javascript:void(0);"
              class="login"
              id="mobile_login"
              @click="login"
            >登&nbsp;&nbsp;录</a>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab2">
          <div class="psd_logins">
            <div class="box account">
              <p class="phone">
                <input type="text" placeholder="手机号/会员名/邮箱" id="userName" v-model="phone">
              </p>
              <p class="phone">
                <input type="password" placeholder="请输入密码" id="userPsd" v-model="password">
                <i class="icon-a-eye"></i>
              </p>
              <p class="identify">
                <input
                  type="text"
                  placeholder="图形验证码"
                  id="identify_code"
                  maxlength="4"
                  v-model="picLyanzhengma"
                  @blur="checkLpicma"
                >
                <input class="img" type="button" @click="createdCode" v-model="checkCode">
              </p>
            </div>
            <a
              href="javascript:void(0);"
              class="login"
              id="user_login"
              @click="login1"
            >登&nbsp;&nbsp;录</a>
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
import $ from "jquery";
import { Toast } from "mint-ui";
import axios from "../assets/js/axios";
import { setCookie, getCookie } from "../assets/js/cookie.js";
export default Vue.extend({
  data() {
    return {
      selected: "tab1",
      btntxt: "重新发送",
      sendcode: "",
      time: 0,
      disabled: false,
      code: "",
      checkCode: "",
      password: "", //..输入的密码
      phone: "", //..输入的手机号码
      picLyanzhengma: "", //..输入的验证码
      isPhone: false, //手机号开关
      isPass: false, //密码开关
      isCode: false, //验证码开关
      isPCode: false //手机验证码开关
    };
  },
  created() {
    this.createdCode();
  },
  mounted() {
    /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
    if (getCookie("phone")) {
      this.$router.push("/");
    }
  },
  methods: {
    // 图片验证码
    createdCode() {
      // 先清空验证码输入
      this.code = "";
      this.checkCode = "";
      this.picLyanzhengma = "";
      // 验证码长度
      const codeLength = 4;
      // 随机数
      const random = new Array(
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      );
      for (let i = 0; i < codeLength; i++) {
        // 取得随机数的索引(0~35)
        let index = Math.floor(Math.random() * 36);
        // 根据索引取得随机数加到code上
        this.code += random[index];
      }
      // 把code值赋给验证码
      this.checkCode = this.code;
    },
    // 验证所输入验证码是否一致，不区分大小写
    checkLpicma() {
      this.picLyanzhengma.toUpperCase(); //取得输入的验证码并转化为大写
      if (this.picLyanzhengma == "") {
        let instance = Toast("请输入验证码");
        setTimeout(() => {
          instance.close();
        }, 2000);
      } else if (this.picLyanzhengma.toUpperCase() != this.checkCode) {
        let instance = Toast("验证码输入错误");
        setTimeout(() => {
          instance.close();
        }, 2000);
        this.createdCode(); //刷新验证码
        this.picLyanzhengma = "";
      } else {
        //输入正确时
        this.isCode = true;
      }
    },
    // 验证所输入手机号是否正确
    checkPhone() {
      const reg = /^1[345789]\d{9}$/; //验证码手机正则
      if (this.phone == "") {
        let instance = Toast("请输入手机号码");
        setTimeout(() => {
          instance.close();
        }, 2000);
      } else if (reg.test(this.phone)) {
        //输入正确时
        this.isPhone = true;
      } else {
        let instance = Toast("手机号码输入错误");
        setTimeout(() => {
          instance.close();
        }, 2000);
        this.createdCode(); //刷新验证码
        this.phone = "";
      }
    },

    // 发送验证码
    //手机验证发送验证码
    Sendcode() {
      const reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      if (this.phone == "") {
        let instance = Toast("手机号不能为空");
        setTimeout(() => {
          instance.close();
        }, 2000);
        return;
      }
      if (!reg.test(this.phone)) {
        let instance = Toast("请输入正确的手机号");
        setTimeout(() => {
          instance.close();
        }, 2000);
        return;
      } else {
        // 发送短信的接口

        //短信模板Id（需要申请，详情看上面申请步骤）
        var $model_Id = "158579";
        //您的验证码是#code# 随机的6位数
        var $tpl_value = "%23code%23%3D" + this.numRandom();
        //截取后面6位数验证码
        var loginCode = $tpl_value.substring(
          $tpl_value.length - 6,
          $tpl_value.length
        );
        //获取AppKey（需要申请）
        var $AppKey = "47fd7a0f19956bca07adb53e4c3bccb8";
        // 请求接口
        $.get({
          url: "http://v.juhe.cn/sms/send",
          data: {
            mobile: this.phone,
            tpl_id: $model_Id,
            tpl_value: $tpl_value,
            key: $AppKey
          },
          dataType: "jsonp",
          success: function(obj) {
            console.log(obj);
            setCookie("loginCode", loginCode, 60); //把验证码存到cookie
          }
        });
        let instance = Toast("发送成功");
        setTimeout(() => {
          instance.close();
        }, 2000);
        this.time = 60;
        this.disabled = true;
        this.timer();
      }
    },
    /**
     * 生成随机的6位数验证码
     */
    numRandom() {
      var num = "";
      for (var i = 0; i < 6; i++) {
        num += Math.floor(Math.random() * 10);
      }
      return num;
    },
    //60S倒计时
    timer() {
      if (this.time > 0) {
        this.time--;
        this.btntxt = this.time + "s后重新获取";
        setTimeout(this.timer, 1000);
      } else {
        this.time = 0;
        this.btntxt = "获取验证码";
        this.disabled = false;
      }
    },
    // 验证所输入手机验证码是否正确
    checkPCode() {
      var loginCode = getCookie("loginCode"); //获取登录的手机验证码
      if (this.sendcode == loginCode) {
        //输入正确时
        this.isPCode = true;
      } else {
        let instance = Toast("手机验证码不匹配");
        setTimeout(() => {
          instance.close();
        }, 2000);
      }
    },
    // 手机号码登录
    login() {
      if (this.isCode && this.isPhone && this.isPCode) {
        // 验证通过，跳转首页面
        setCookie("phone", this.phone, 1000 * 60);
        this.$router.push({ path: "/" });
      }
    },
    // 账号登录
    async login1() {
      if (this.phone == "" && this.password == "") {
        let instance = Toast("信息不能为空");
        setTimeout(() => {
          instance.close();
        }, 2000);
      } else {
        // 验证通过，跳转首页面
        const { g, p } = axios;
        const data = await g({
          url:
            "https://www.apiopen.top/login?key=00d91e8e0cca2b76f515926a36db68f5&phone=" +
            this.phone +
            "&passwd=" +
            this.password
        });
        console.log(data);
        if (data.data.code == 200 && this.isCode) {
          setCookie("phone", this.phone, 1000 * 60);
          this.$router.push({ path: "/" });
        } else {
          // 账号或密码错误
          let instance = Toast("账号或密码错误");
          setTimeout(() => {
            instance.close();
          }, 2000);
        }
      }
    }
  }
});
</script>

<style lang="scss">
body {
  background-color: white;
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
  .login_content {
    margin-top: 50px;
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
      .identify .img {
        width: 90px;
        margin-top: 3px;
        position: absolute;
        height: 41px;
        right: 0;
        top: 0;
        font-size: 22px;
        overflow: hidden;
        background: url("http://s4.sinaimg.cn/middle/6319918c4820361e752d3&690");
      }
      p.note #send_code {
        width: 90px;
        height: 44px;
        line-height: 44px;
        font-size: 14px;
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

