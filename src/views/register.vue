<template>
  <div id="register">
    <!-- 头部 -->
    <div class="header">
      <mt-header fixed>
        <router-link to="/" slot="left">
          <mt-button icon="back" @click="prev"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <!-- 主体内容 -->
    <div class="reg_content">
      <div class="register_title">
        <h2>注册万表会员</h2>
        <p>
          有账号?
          <router-link to="/login" tag="a">去登录</router-link>
        </p>
      </div>
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
<<<<<<< HEAD
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
          @click="Sendcode"
        >
      </p>
      <p class="password">
        <input
          type="password"
          placeholder="设置密码"
          id="setpassword"
          v-model="password"
          @blur="checkPassword"
        >
      </p>
      <a href="javascript:void(0);" class="nextBtn" id="register" @click="register">注&nbsp;&nbsp;册</a>
=======
        <input type="number" placeholder="短信验证码" id="note_code" maxlength="6">
        <a href="javascript:void(0);" id="send_code">发送验证码</a>
      </p>
      <p class="password">
        <input type="password" placeholder="设置密码" id="setpassword">
      </p>
      <a href="javascript:void(0);" class="nextBtn" id="register">注&nbsp;&nbsp;册</a>
>>>>>>> 6fe59c23427b830cdb4e16d32f753f4d983ea581
      <p class="register_agreement">
        点击注册意味着阁下同意
        <a href="https://mu.wbiao.cn/member/protocol">《万表用户协议》</a>
      </p>
    </div>
    <router-view/>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
<<<<<<< HEAD
import $ from "jquery";
import { Toast } from "mint-ui";
import axios from "../assets/js/axios";
import { setCookie ,getCookie } from "../assets/js/cookie.js";
export default Vue.extend({
  data() {
    return {
      btntxt: "重新发送",
      sendcode: "",//..输入的手机验证码
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
=======
import {Toast} from 'mint-ui';
export default Vue.extend({
  data() {
    return {
      code: "",
      checkCode: "",
      phone:"",//..输入的手机号码
      picLyanzhengma: "" ,//..输入的验证码
      isPhone:false ,//验证码开关
      isPass:false ,//验证码开关
      isCode:false ,//验证码开关
>>>>>>> 6fe59c23427b830cdb4e16d32f753f4d983ea581
    };
  },
  created() {
    this.createdCode();
  },
  methods: {
<<<<<<< HEAD
    prev() {
      this.$router.go(-1);
    },
=======
>>>>>>> 6fe59c23427b830cdb4e16d32f753f4d983ea581
    // 图片验证码
    createdCode() {
      // 先清空验证码输入
      this.code = "";
      this.checkCode = "";
      this.picLyanzhengma = "";
      // 验证码长度
      const codeLength = 4;
      // 随机数
<<<<<<< HEAD
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
=======
      const random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 
         'S','T','U','V','W','X','Y','Z');
>>>>>>> 6fe59c23427b830cdb4e16d32f753f4d983ea581
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
<<<<<<< HEAD
        let instance = Toast("请输入验证码");
        setTimeout(() => {
          instance.close();
        }, 2000);
      } else if (this.picLyanzhengma.toUpperCase() != this.checkCode) {
        let instance = Toast("验证码输入错误");
        setTimeout(() => {
          instance.close();
        }, 2000);
=======
          let instance = Toast('请输入验证码');
            setTimeout(() => {
          instance.close();
        }, 2000);
      } else if (this.picLyanzhengma.toUpperCase() != this.checkCode) {
          let instance = Toast('验证码输入错误');
            setTimeout(() => {
          instance.close();
           }, 2000);
>>>>>>> 6fe59c23427b830cdb4e16d32f753f4d983ea581
        this.createdCode(); //刷新验证码
        this.picLyanzhengma = "";
      } else {
        //输入正确时
<<<<<<< HEAD
        this.isCode = true;
=======
        this.isCode = true
>>>>>>> 6fe59c23427b830cdb4e16d32f753f4d983ea581
      }
    },
    // 验证所输入手机号是否正确
    checkPhone() {
<<<<<<< HEAD
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
=======
      const reg = /^1[3456789]\d{9}$/;//验证码手机正则
      if (this.phone == '') {
          let instance = Toast('请输入手机号码');
            setTimeout(() => {
          instance.close();
        }, 2000);
      } else if (reg.test(this.phone)) {
          //输入正确时
        this.isPhone = true
      } else {
        let instance = Toast('手机号码输入错误');
            setTimeout(() => {
          instance.close();
           }, 2000);
>>>>>>> 6fe59c23427b830cdb4e16d32f753f4d983ea581
        this.createdCode(); //刷新验证码
        this.phone = "";
      }
    },
<<<<<<< HEAD
    // 验证所输入密码是否正确
    checkPassword() {
      if (this.password == "") {
        let instance = Toast("请输入密码");
        setTimeout(() => {
          instance.close();
        }, 2000);
      } else if (this.password.length >= 6 && this.password.length <= 18) {
        //输入正确时
        this.isPass = true;
      } else {
        let instance = Toast("密码长度为6-18位");
        setTimeout(() => {
          instance.close();
        }, 2000);
        this.password = "";
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
        var $model_Id = "158043";
        //您的验证码是#code# 随机的6位数
        var $tpl_value = "%23code%23%3D" + this.numRandom();
        //截取后面6位数验证码
        var registerCode = $tpl_value.substring($tpl_value.length-6, $tpl_value.length)
        // console.log($tpl_value,code)
        //获取AppKey（需要申请）
        var $AppKey = "4b8ffc2250ee865b433bae234a8954ac";
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
            setCookie("registerCode", registerCode, 60);//把验证码存到cookie
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
    // 验证所输入手机验证码是否正确
    checkPCode() {
      var registerCode = getCookie('registerCode')//获取注册的手机验证码
      if (this.sendcode == registerCode ) {
        //输入正确时
        this.isPCode = true;
      } else {
        let instance = Toast("手机验证码不匹配");
        setTimeout(() => {
          instance.close();
        }, 2000);
        
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
    // 点击注册
    async register() {
      if (this.isCode && this.isPass && this.isPhone && this.isPCode) {
        // 验证通过，跳转登录页面
        const { g, p } = axios;
        const data = await g({
          url:
            "https://www.apiopen.top/createUser?key=00d91e8e0cca2b76f515926a36db68f5&phone=" +
            this.phone +
            "&passwd=" +
            this.password
        });
        // console.log(data)
        this.$router.push({ path: "/login" });
      }
    }
=======
>>>>>>> 6fe59c23427b830cdb4e16d32f753f4d983ea581
  }
});
</script>

<style lang="scss" >
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
#register {
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
    }
  }

  .reg_content {
    padding: 0 7.5%;
    p {
      position: relative;
      margin-top: 22px;
      height: 44px;
      background: #fff;
      border-bottom: 1px solid #ededed;
      margin-bottom: 20px;
      font-size: 14px;
      color: #333;
      input {
        width: 100%;
        height: 100%;
        border: none;
        padding-left: 2.6%;
        outline: 0;
      }
    }
    .register_agreement {
      text-align: center;
      color: #999;
      border-bottom: none !important;
      a {
        color: #ccaa7a;
      }
    }
    .nextBtn {
      height: 44px;
      background: #ccc;
      width: 100%;
      display: block;
      margin: 40px auto 0;
      text-align: center;
      line-height: 44px;
      font-size: 16px;
      color: #ccaa7a;
      background-image: linear-gradient(-180deg, #3a3a3a 0, #1c1c1c 100%);
      box-shadow: 0 6px 4px 0 rgba(0, 0, 0, 0.1);
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
<<<<<<< HEAD
    p.note #send_code {
      width: 90px;
      height: 44px;
      line-height: 44px;
      font-size: 14px;
=======
    p.note a {
      width: 90px;
      height: 44px;
      line-height: 44px;
      font-size: 12px;
>>>>>>> 6fe59c23427b830cdb4e16d32f753f4d983ea581
      color: #999;
      text-align: center;
      position: absolute;
      top: 0;
      right: 0;
    }

    .register_title {
      text-align: center;
      h2 {
        margin: 25px 0 0;
        font-size: 24px;
        color: #666;
      }
      p {
        position: relative;
        margin-top: 22px;
        height: 44px;
        background: #fff;
        border-bottom: 1px solid #ededed;
        margin-bottom: 20px;
        font-size: 14px;
        color: #ccc;
        border-bottom: none !important;
        a {
          color: #999;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>

