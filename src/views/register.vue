<template>
  <div id="register">
    <!-- 头部 -->
    <div class="header">
      <mt-header fixed>
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
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
        <input type="number" placeholder="短信验证码" id="note_code" maxlength="6">
        <a href="javascript:void(0);" id="send_code">发送验证码</a>
      </p>
      <p class="password">
        <input type="password" placeholder="设置密码" id="setpassword">
      </p>
      <a href="javascript:void(0);" class="nextBtn" id="register">注&nbsp;&nbsp;册</a>
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
    };
  },
  created() {
    this.createdCode();
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
      const random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 
         'S','T','U','V','W','X','Y','Z');
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
          let instance = Toast('请输入验证码');
            setTimeout(() => {
          instance.close();
        }, 2000);
      } else if (this.picLyanzhengma.toUpperCase() != this.checkCode) {
          let instance = Toast('验证码输入错误');
            setTimeout(() => {
          instance.close();
           }, 2000);
        this.createdCode(); //刷新验证码
        this.picLyanzhengma = "";
      } else {
        //输入正确时
        this.isCode = true
      }
    },
    // 验证所输入手机号是否正确
    checkPhone() {
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
        this.createdCode(); //刷新验证码
        this.phone = "";
      }
    },
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
    p.note a {
      width: 90px;
      height: 44px;
      line-height: 44px;
      font-size: 12px;
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

