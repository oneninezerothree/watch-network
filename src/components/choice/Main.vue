<template>
  <div>
    <div class="W_gnTab_nav" id="tabnav01" ref="wrapper" style="touch-action: none;">
      <div
        class="scroll_wrap"
      >
        <ul>
          <li @click="msg=0" :class="{'on':msg===0}">
            <a href="javascript:;">推荐</a>
          </li>
          <li @click="msg=1" :class="{'on':msg===1}">
            <a href="javascript:;" >顶级品牌</a>
          </li>
          <li  @click="msg=2" :class="{'on':msg===2}">
            <a href="javascript:;">奢华品牌</a>
          </li>
          <li  @click="msg=3" :class="{'on':msg===3}">
            <a href="javascript:;">高级品牌</a>
          </li>
          <li  @click="msg=4" :class="{'on':msg===4}">
            <a href="javascript:;">轻奢时尚</a>
          </li>
          <li  @click="msg=5" :class="{'on':msg===5}">
            <a href="javascript:;">年轻潮牌</a>
          </li>
          <li  @click="msg=6" :class="{'on':msg===6}">
            <a href="javascript:;">国产智能</a>
          </li>
          <li  @click="msg=7" :class="{'on':msg===7}">
            <a href="javascript:;">表带</a>
          </li>
          <li @click="msg=8" :class="{'on':msg===8}">
            <a href="javascript:;">维修保养</a>
          </li>
          <li class="not_goods--category"  @click="msg=9" :class="{'on':msg===9}">
            <a href="javascript:;">二手商城</a>
          </li>
        </ul>
      </div>
      <div
        class="iScrollVerticalScrollbar iScrollLoneScrollbar"
        style="overflow: hidden; pointer-events: none;"
      >
        <div
          class="iScrollIndicator"
        ></div>
      </div>
    </div>
    <div class="W_right_floor" id="W_right_floor" ref="wrapper" style="touch-action: none;">
      <div
        class="scroll_wrap"
      >
        <div class="W_gnTab_content" id="tabcon01">
          <div class="gnTabs_block" v-show="msg===0">
            <div class="act_img">
              <a>
                <img src="//image7.wbiao.co/mall/bfd85a4aea674bd4bdcbb2a99d25011f.jpg" alt>
              </a>
            </div>
            <p class="hot_tit">猜你喜欢</p>
            <div class="sort_list sort_list_01">
              <ul class="clearfix">
                <router-link  tag="li" v-for="item of like" :key="item.id" :to="'/list/'+item.name">
                  <a>
                    <p class="p_img">
                      <img :src="item.imgUrl" alt>
                    </p>
                    <p class="p_txt">{{item.name}}</p>
                  </a>
                </router-link>
              </ul>
            </div>
            <p class="hot_tit">国际馆</p>
            <div class="sort_list sort_list_01">
              <ul class="clearfix">
                <li v-for="item of country" :key="item.id">
                  <a>
                    <p class="p_img">
                      <img :src="item.imgUrl" alt>
                    </p>
                    <p class="p_txt">{{item.name}}</p>
                  </a>
                </li>
              </ul>
            </div>
            <p class="hot_tit">热门品牌</p>
            <div class="sort_list sort_list_01">
              <ul class="clearfix">
                <li v-for="item of hot" :key="item.key">
                  <a>
                    <p class="p_img">
                      <img :src="item.imgUrl" alt>
                    </p>
                    <p class="p_txt">{{item.name}}</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="gnTabs_block" v-show="msg===1">
            <div class="sort_list sort_list_02">
              <div class="act_img">
                <a>
                  <img src="//image7.wbiao.co/mall/32cc9ac208804ab988812cdd70e8a466.jpg" alt>
                </a>
              </div>
              <ul class="clearfix">
                <li>
                  <a>
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/42511ec184ef4d7ebe4a48e989dcba3e.jpg" alt>
                    </p>
                    <p class="p_txt esp1">江诗丹顿</p>
                  </a>
                </li>
                <li>
                  <a>
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/7222a73d4b54414389825b6596fa53da.jpg" alt>
                    </p>
                    <p class="p_txt esp1">宝玑</p>
                  </a>
                </li>
                <li>
                  <a>
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/45190020f73b467f946f85433c0ccdaf.jpg" alt>
                    </p>
                    <p class="p_txt esp1">爱彼</p>
                  </a>
                </li>
                <li>
                  <a>
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/c04b2a71cda946a7903ff7eb27eeb508.jpg" alt>
                    </p>
                    <p class="p_txt esp1">积家</p>
                  </a>
                </li>
                <li>
                  <a>
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/1a8d5c9b180f4cf9899e8ca7a60e2700.jpg" alt>
                    </p>
                    <p class="p_txt esp1">宝珀</p>
                  </a>
                </li>
                <li>
                  <a>
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/f313175cced9480292354c601b98f42d.jpg" alt>
                    </p>
                    <p class="p_txt esp1">亨利慕时</p>
                  </a>
                </li>
                <li>
                  <a>
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/54a7049f530549f7a493b032dd2a8122.jpg" alt>
                    </p>
                    <p class="p_txt esp1">豪朗时</p>
                  </a>
                </li>
                <li>
                  <a>
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/db876085325f4d4a96d77a49cbacdb95.jpg" alt>
                    </p>
                    <p class="p_txt esp1">伯爵</p>
                  </a>
                </li>
                <li>
                  <a>
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/ddbf86e451074f95aa2b8f5f4809e11b.jpg" alt>
                    </p>
                    <p class="p_txt esp1">百达翡丽</p>
                  </a>
                </li>
                <li>
                  <a>
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/76ea7665eafb4fe1804b7f82eb1b4981.jpg" alt>
                    </p>
                    <p class="p_txt esp1">朗格</p>
                  </a>
                </li>
                <li>
                  <a>
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/fd3162839bda456e9d42d60ee91f4a74.jpg" alt>
                    </p>
                    <p class="p_txt esp1">宇舶</p>
                  </a>
                </li>
                <li>
                  <a>
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/7269d518ef7f477eb891a59a84a85339.jpg" alt>
                    </p>
                    <p class="p_txt esp1">芝柏</p>
                  </a>
                </li>
                <li>
                  <a>
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/29d8ffba8d1d43f69367ddedbff76911.jpg" alt>
                    </p>
                    <p class="p_txt esp1">格拉苏蒂∙原创</p>
                  </a>
                </li>
                <li>
                  <a>
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/d7bcdb84b0434b6582dc1c2664fc617e.jpg" alt>
                    </p>
                    <p class="p_txt esp1">法穆兰</p>
                  </a>
                </li>
                <li>
                  <a>
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/0a053d2f6cf542969068b3d582f93a73.jpg" alt>
                    </p>
                    <p class="p_txt esp1">雅典</p>
                  </a>
                </li>
                <li>
                  <a>
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/58e9bfa0dfb0406e983e97052a42a7d5.jpg" alt>
                    </p>
                    <p class="p_txt esp1">雅克德罗</p>
                  </a>
                </li>
                <li>
                  <a>
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/f4cbd84f0d0a477d9000e824bc972a84.jpg" alt>
                    </p>
                    <p class="p_txt esp1">播威</p>
                  </a>
                </li>
                <li>
                  <a>
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/2e32fca56eca42e89ef0368c38d442bc.jpg" alt>
                    </p>
                    <p class="p_txt esp1">罗杰杜彼</p>
                  </a>
                </li>
                <li>
                  <a>
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/b0fde1bcb2db4cb7858e17a0352e86a0.jpg" alt>
                    </p>
                    <p class="p_txt esp1">帕玛强尼</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="gnTabs_block" v-show="msg===2">
            <div class="sort_list sort_list_02">
              <div class="act_img">
                <a>
                  <img src="//image7.wbiao.co/mall/854d7c9679ce4f6aa741ab4d1dfc35b7.jpg" alt>
                </a>
              </div>
              <ul class="clearfix">
                <li>
                  <a>
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/9ae6f2087b884d4b8d51fd62bb7967f3.jpg" alt>
                    </p>
                    <p class="p_txt esp1">劳力士</p>
                  </a>
                </li>
                <li>
                  <a>
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/f2cc31ae4c91408ca4feacd0106380fc.jpg" alt>
                    </p>
                    <p class="p_txt esp1">欧米茄</p>
                  </a>
                </li>
                <li>
                  <a>
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/5f826b1470dd43ddb1690e86bd376f45.jpg" alt>
                    </p>
                    <p class="p_txt esp1">库尔沃</p>
                  </a>
                </li>
                <li>
                  <a>
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/ca4a7bc269ea42fb89d4295230c73407.jpg" alt>
                    </p>
                    <p class="p_txt esp1">万国</p>
                  </a>
                </li>
                <li>
                  <a>
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/84823ee563fb43de9353be8b557724fd.jpg" alt>
                    </p>
                    <p class="p_txt esp1">柏高</p>
                  </a>
                </li>
                <li>
                  <a>
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/942b55969fdc454b9c5ed3e69267a2a6.jpg" alt>
                    </p>
                    <p class="p_txt esp1">拓天马</p>
                  </a>
                </li>
                <li>
                  <a>
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/f1aa292df2a3469a8f5f17cc7c3b667b.jpg" alt>
                    </p>
                    <p class="p_txt esp1">百年灵</p>
                  </a>
                </li>
                <li>
                  <a>
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/ffa3f20be2df47559f02e262bf8280e5.jpg" alt>
                    </p>
                    <p class="p_txt esp1">卡洛夫</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=38">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/a52fbd04d46a46f894f733fd044abea0.jpg" alt>
                    </p>
                    <p class="p_txt esp1">世纪</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=44">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/da35aded9e6942cbb591bd496f1d4093.jpg" alt>
                    </p>
                    <p class="p_txt esp1">萧邦</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=43">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/3a7e56063da24cceafee43f4117e9297.jpg" alt>
                    </p>
                    <p class="p_txt esp1">真力时</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=253">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/6a7ba5df9ffb4369b24e77222eaa7b94.jpg" alt>
                    </p>
                    <p class="p_txt esp1">宝格丽</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=289">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/a883361122cb4077acd11f7d9cbfdd3b.jpg" alt>
                    </p>
                    <p class="p_txt esp1">宝齐莱</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=46">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/e700bc9a0a324683914ad114742dfa2f.jpg" alt>
                    </p>
                    <p class="p_txt esp1">昆仑</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=30">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/d6ec2758d3cf4d4b8c1d93ab7799473e.jpg" alt>
                    </p>
                    <p class="p_txt esp1">卡地亚</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=36">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/7c9b96dad8234e9f96a8aca27b5b0f72.jpg" alt>
                    </p>
                    <p class="p_txt esp1">沛纳海</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=39">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/997425239865491da79cfe74f507f83b.jpg" alt>
                    </p>
                    <p class="p_txt esp1">瑞宝</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="gnTabs_block" v-show="msg===3">
            <div class="sort_list sort_list_02">
              <div class="act_img">
                <a href="//m.wbiao.cn/shop/539/">
                  <img src="//image7.wbiao.co/mall/4330692a42be43849f38b160973d9152.jpg" alt>
                </a>
              </div>
              <ul class="clearfix">
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=51">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/5eb7bc79998e455e829ae037f0ecf6cc.jpg" alt>
                    </p>
                    <p class="p_txt esp1">浪琴</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=48">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/af3a306ff02e4fa38ca7b2ac1184441a.jpg" alt>
                    </p>
                    <p class="p_txt esp1">爱宝时</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=35">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/5f7dbc05a84842158a8a254a476234c4.jpg" alt>
                    </p>
                    <p class="p_txt esp1">帝舵</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=1035">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/013bc3838cbd4a83a5ece086f7742a78.jpg" alt>
                    </p>
                    <p class="p_txt esp1">东方星</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=45">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/03432d241fde4913b9d8b32a434e1fcc.jpg" alt>
                    </p>
                    <p class="p_txt esp1">泰格豪雅</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=295">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/f9ff0f70f65b44cda9fa960d38eef2f6.jpg" alt>
                    </p>
                    <p class="p_txt esp1">豪利时</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=58">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/3388409c64764f10ae97325f4b756775.jpg" alt>
                    </p>
                    <p class="p_txt esp1">菲拉格慕</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=28">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/5f935a191727431ba243e713141eb25d.jpg" alt>
                    </p>
                    <p class="p_txt esp1">莫勒</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=1046">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/54d54b744eb34e24865f3500b51a0c22.png" alt>
                    </p>
                    <p class="p_txt esp1">罗贝罗班</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=32">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/bc17e15327e74c4297b9eb54c6ed64d4.jpg" alt>
                    </p>
                    <p class="p_txt esp1">艾美达</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=42">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/b8259a3fc4e948f090392cbd4295f79e.jpg" alt>
                    </p>
                    <p class="p_txt esp1">艾美</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=31">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/e081b570675e4299b1843b78943f4d79.jpg" alt>
                    </p>
                    <p class="p_txt esp1">诺美纳</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=169">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/2266fd1473fe4bacaa8ca69482a60f28.jpg" alt>
                    </p>
                    <p class="p_txt esp1">爱马仕</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=76">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/03337a646c05401cab01a0b56e837a1d.jpg" alt>
                    </p>
                    <p class="p_txt esp1">GUCCI</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=288">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/79b0a5f05e0e4ae487fc8eb5ebc7e678.jpg" alt>
                    </p>
                    <p class="p_txt esp1">万宝龙</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=222">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/ad752362476e4d76898db047bbf28279.jpg" alt>
                    </p>
                    <p class="p_txt esp1">名士</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=67">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/afe43c2ff4464117913b2e2e140a2471.jpg" alt>
                    </p>
                    <p class="p_txt esp1">荣汉斯</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=54">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/75cee454776a4d229a1d432b5af306c1.jpg" alt>
                    </p>
                    <p class="p_txt esp1">康斯登</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=290">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/171cb348c1784f2cb109a5d3a251d58b.jpg" alt>
                    </p>
                    <p class="p_txt esp1">雷达</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=41">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/76d4df9395d54b8f84b17cae3306c62d.jpg" alt>
                    </p>
                    <p class="p_txt esp1">依百克</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=287">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/679579935c49424493e141819810a767.jpg" alt>
                    </p>
                    <p class="p_txt esp1">柏莱士</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=71">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/69094772598b407b9faad5357c6a2259.jpg" alt>
                    </p>
                    <p class="p_txt esp1">Alpina</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=40">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/beceae927785403a8f73068e3cb1e098.jpg" alt>
                    </p>
                    <p class="p_txt esp1">梵德宝</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=237">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/3641cb2f69c64e7c936e7e1378cc9319.jpg" alt>
                    </p>
                    <p class="p_txt esp1">蕾蒙威</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="gnTabs_block" v-show="msg===4">
            <div class="sort_list sort_list_02">
              <div class="act_img">
                <a href="//m.wbiao.cn/shop/44/">
                  <img src="//image7.wbiao.co/mall/171c76f077224f25bafc62511b9cde36.jpg" alt>
                </a>
              </div>
              <ul class="clearfix">
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=47">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/7f57124ff8af4ef5bdb64a64ba4d0366.jpg" alt>
                    </p>
                    <p class="p_txt esp1">天梭</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=53">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/93cf8b36835f401ea1f055524ab15641.jpg" alt>
                    </p>
                    <p class="p_txt esp1">赫柏林</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=50">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/55a2175cec144a2f9f1ef90fb8a35b3e.jpg" alt>
                    </p>
                    <p class="p_txt esp1">美度</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=49">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/1d9b14b21916484f9d32cbf35f36ecbc.jpg" alt>
                    </p>
                    <p class="p_txt esp1">迪沃斯</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=56">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/0359c75697494a378fa9216fb059a5b4.jpg" alt>
                    </p>
                    <p class="p_txt esp1">西铁城</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=55">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/2197f6836668436f805e3faf9cc2c5f5.jpg" alt>
                    </p>
                    <p class="p_txt esp1">汉米尔顿</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=86">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/90bde8c375bd47f48b57ca7286fdf40b.jpg" alt>
                    </p>
                    <p class="p_txt esp1">东方双狮</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=74">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/93898cd9f5b84ac598c7b70b231b36ee.jpg" alt>
                    </p>
                    <p class="p_txt esp1">CK</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=77">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/85aa0547a58f413d924c647b866b8737.jpg" alt>
                    </p>
                    <p class="p_txt esp1">精工</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=292">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/3ee671aae591433381e1ddc256f83dc6.jpg" alt>
                    </p>
                    <p class="p_txt esp1">雪铁纳</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=236">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/f302b00e92c542b09291b0cf48fec854.jpg" alt>
                    </p>
                    <p class="p_txt esp1">摩凡陀</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=52">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/8dac501fd58346829ca1d63dba9ed415.jpg" alt>
                    </p>
                    <p class="p_txt esp1">爱罗</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=81">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/79437d90cad747ca81f4ebd5cdb65e69.jpg" alt>
                    </p>
                    <p class="p_txt esp1">sevenFriday</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=78">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/651629fb6bb34956ae0c3decbc4dd9ff.jpg" alt>
                    </p>
                    <p class="p_txt esp1">阿玛尼</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=342">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/7fc3f77478b14e32b79c30c39526e14e.jpg" alt>
                    </p>
                    <p class="p_txt esp1">豪度</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=265">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/e3d07a70b81f461bb225df2509f2af3e.jpg" alt>
                    </p>
                    <p class="p_txt esp1">时度</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=402">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/02c22419127e46dc8e89464c53a6c167.jpg" alt>
                    </p>
                    <p class="p_txt esp1">雷米格</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=66">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/4b4049456fc64cafb828cab8010bdf63.jpg" alt>
                    </p>
                    <p class="p_txt esp1">梅花</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=61">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/424d59326eab4938bbd68b8a7d9e91f9.jpg" alt>
                    </p>
                    <p class="p_txt esp1">优立时</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=175">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/c7d0aa43a89642d2b8ced0f41cb3c30c.jpg" alt>
                    </p>
                    <p class="p_txt esp1">英纳格</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=62">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/296930d5ca5b493fa9abf943aeaaefe9.jpg" alt>
                    </p>
                    <p class="p_txt esp1">瑞士军表</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=70">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/cbb0e3dc70594f8ba360f84c79527437.jpg" alt>
                    </p>
                    <p class="p_txt esp1">依波路</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=60">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/c6de5bfb44574635961f530162bd50a3.jpg" alt>
                    </p>
                    <p class="p_txt esp1">PILO &amp; CO GENEVE</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=63">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/2cd0b3f426784ddd97d7d362781f722a.jpg" alt>
                    </p>
                    <p class="p_txt esp1">DVH</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=57">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/34713f67970d4646aedd92c5278b45c0.jpg" alt>
                    </p>
                    <p class="p_txt esp1">特工</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=298">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/30881b0ac4a448ea8a1d1346ab48b076.jpg" alt>
                    </p>
                    <p class="p_txt esp1">查梅斯</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=306">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/794ecba852d74580a07390d8f64baae1.jpg" alt>
                    </p>
                    <p class="p_txt esp1">哈伯曼</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=268">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/2e9ed91775454dd7bce23f01b4c5e58b.jpg" alt>
                    </p>
                    <p class="p_txt esp1">摩纹</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=291">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/3e45167afdac4e65b36894487b3caad4.jpg" alt>
                    </p>
                    <p class="p_txt esp1">波尔</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="gnTabs_block" v-show="msg===5">
            <div class="sort_list sort_list_02">
              <div class="act_img">
                <a href="//m.wbiao.cn/shop/18/">
                  <img src="//image7.wbiao.co/mall/e2b73a6c7f9e47199724a93267980a6b.jpg" alt>
                </a>
              </div>
              <ul class="clearfix">
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=72">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/b10d70fd3f1b42eba2ff2d58f4076633.jpg" alt>
                    </p>
                    <p class="p_txt esp1">卡西欧</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=90">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/1eb2ad704c1e4725a3b0f2eaa6911e69.jpg" alt>
                    </p>
                    <p class="p_txt esp1">玛莎拉蒂</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=1039">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/6382785d17b442a491161580cb1d93b6.jpg" alt>
                    </p>
                    <p class="p_txt esp1">恒圆</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=80">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/1d105e52e2654132b1060a2455d0bbab.jpg" alt>
                    </p>
                    <p class="p_txt esp1">驰客</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=59">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/f6504365b1cd4450a0b6a01a70bd3d43.jpg" alt>
                    </p>
                    <p class="p_txt esp1">天铭</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=255">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/610227c11ed64ead86d923b48fab88a6.jpg" alt>
                    </p>
                    <p class="p_txt esp1">斯沃琪</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=68">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/3a4f83955f8448f0a1809da4f187151a.jpg" alt>
                    </p>
                    <p class="p_txt esp1">雍加毕索</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=75">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/38053f5369f149f8a7936b98327b9da3.jpg" alt>
                    </p>
                    <p class="p_txt esp1">雅克利曼</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=91">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/867dca52bfc54fc0be50a3b4dbd0aa1d.jpg" alt>
                    </p>
                    <p class="p_txt esp1">天美时</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=1045">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/ffd2971738704bb0b477817a738c02f6.jpg" alt>
                    </p>
                    <p class="p_txt esp1">威利默克</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=92">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/b7a9aa4348b145da8e99bf9057edae06.jpg" alt>
                    </p>
                    <p class="p_txt esp1">三宅一生</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=79">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/10a27ea18b2642a1a55955cb1c69eac3.jpg" alt>
                    </p>
                    <p class="p_txt esp1">MINI</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=84">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/29d5eb6ed26c443ba09339e029d0027e.jpg" alt>
                    </p>
                    <p class="p_txt esp1">CIGA DESIGN</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=395">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/39dbe0fcb66141db9e811f6f4ba8d6d3.jpg" alt>
                    </p>
                    <p class="p_txt esp1">AVI-8</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=367">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/e2f68979158640e883197d98396a11ac.jpg" alt>
                    </p>
                    <p class="p_txt esp1">dufa</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=398">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/abde96d33fc94e518d239886187f1319.jpg" alt>
                    </p>
                    <p class="p_txt esp1">法斯蒂纳</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=1044">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/9de7fae6647148bea39875d76dfac6b0.jpg" alt>
                    </p>
                    <p class="p_txt esp1">天势</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=397">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/07ddcbaf5d25471bac2a454a9cda7530.jpg" alt>
                    </p>
                    <p class="p_txt esp1">积爵</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=1047">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/2e76525da904412dbbb70d1a685cf603.jpg" alt>
                    </p>
                    <p class="p_txt esp1">奥尼卡</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=399">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/183795bfe1a94111a145402422644395.jpg" alt>
                    </p>
                    <p class="p_txt esp1">卡天龙</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=383">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/4dfc006f88ae415e9a70484a67e1257b.jpg" alt>
                    </p>
                    <p class="p_txt esp1">JEEP</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=346">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/497f614d2ddc469882f7e07d2428f30d.jpg" alt>
                    </p>
                    <p class="p_txt esp1">罗蒂诗蔓</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=88">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/da4c1ede76604711ac0f61e48c610ae2.jpg" alt>
                    </p>
                    <p class="p_txt esp1">雅柏</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=378">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/f8cc1e182d2b4ecbb9bd46dfc2cbb9d4.jpg" alt>
                    </p>
                    <p class="p_txt esp1">诺帝卡</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=98">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/8a927e4b4d5d485b8ed39abe096792a0.jpg" alt>
                    </p>
                    <p class="p_txt esp1">SWISS MILITARY HANOWA瑞士军表</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=269">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/f7e9d7755ee24ee493f0cc757a29c91e.jpg" alt>
                    </p>
                    <p class="p_txt esp1">名爵</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=1040">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/1a4d419d1c2746e288dcdb8dd08c7a30.jpg" alt>
                    </p>
                    <p class="p_txt esp1">ANICORN</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=317">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/93d9040cb6e44d158db4aa2cdc69e465.jpg" alt>
                    </p>
                    <p class="p_txt esp1">萨克莱斯</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="gnTabs_block" v-show="msg===6">
            <div class="sort_list sort_list_02">
              <div class="act_img">
                <a href="//m.wbiao.cn/shanghai-watches/">
                  <img src="//image7.wbiao.co/mall/2153691488cd4eca81c3e4924987c245.jpg" alt>
                </a>
              </div>
              <ul class="clearfix">
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=93">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/95242dc7c1a14f759253dc1aacda200b.jpg" alt>
                    </p>
                    <p class="p_txt esp1">飞亚达</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=95">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/059547e4c93e41c4a032beb01fc958dd.jpg" alt>
                    </p>
                    <p class="p_txt esp1">海鸥</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=99">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/05ffe9cac3f04e9c9183b906084b9003.jpg" alt>
                    </p>
                    <p class="p_txt esp1">上海</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=106">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/6df3f3a5a1554acfb1c3cd44848dbb30.jpg" alt>
                    </p>
                    <p class="p_txt esp1">佳明</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=305">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/8e5640eec3cc42fcba585922ddd44b52.jpg" alt>
                    </p>
                    <p class="p_txt esp1">孔雀</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=102">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/ca005569198d4cfbb14bd60e18246501.jpg" alt>
                    </p>
                    <p class="p_txt esp1">廊桥表</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=100">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/b80233af6d5f428d8f82a6545e905016.jpg" alt>
                    </p>
                    <p class="p_txt esp1">华为</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=103">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/c6d387c692b8484985ec1d17e9fb98e7.jpg" alt>
                    </p>
                    <p class="p_txt esp1">颂拓</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=113">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/f79ca04d33104de8b2244c7239c62c40.jpg" alt>
                    </p>
                    <p class="p_txt esp1">唯路时</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/shoubiao.html?pc=101">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/4074b02a8a284db3915a24f4b37b637c.jpg" alt>
                    </p>
                    <p class="p_txt esp1">尖刀</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="gnTabs_block" v-show="msg===7">
            <div class="sort_list sort_list_02">
              <div class="act_img">
                <a href="//m.wbiao.cn/shop/8/">
                  <img src="//image7.wbiao.co/mall/2cd6616318014693b28bcf6fbf0d591f.jpg" alt>
                </a>
              </div>
              <ul class="clearfix">
                <li>
                  <a href="https://m.wbiao.cn/peijian/biaodai/?pc=107">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/ed770fa6782c4c9ea62d9ee9607de0f4.jpg" alt>
                    </p>
                    <p class="p_txt esp1">积优</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/peijian/biaodai/?pc=109">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/addbf17f6b4d451797578358846be35d.jpg" alt>
                    </p>
                    <p class="p_txt esp1">奇美拉</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/peijian/biaodai/?pc=111">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/f38dc911d4274c9793cc2ac84af917c2.jpg" alt>
                    </p>
                    <p class="p_txt esp1">欧时浩</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/peijian/biaodai/?pc=1008">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/0643c819d1ee4316b79e5735379c4b48.jpg" alt>
                    </p>
                    <p class="p_txt esp1">海奕施</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/peijian/biaodai/?pc=1010">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/c216719af6a649658616ab72dce3df25.png" alt>
                    </p>
                    <p class="p_txt esp1">赫柏林</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/peijian/biaodai/?pc=1011">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/08ce210dc28b47a7bb7b8d293e1db8c2.png" alt>
                    </p>
                    <p class="p_txt esp1">迪沃斯</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="gnTabs_block" v-show="msg===8">
            <div class="sort_list sort_list_02">
              <div class="act_img">
                <a href>
                  <img src="//image7.wbiao.co/mall/20937c800e76411695eb7d04a3fc17a2.jpg" alt>
                </a>
              </div>
              <ul class="clearfix">
                <li>
                  <a href="https://m.wbiao.cn/card.html?pc=1028">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/e5fe0ae7a54043158494322f4fb6a8f9.png" alt>
                    </p>
                    <p class="p_txt esp1">配件更换</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/card.html?pc=1027">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/67810c1b8771496a901fd5ec40033a5c.png" alt>
                    </p>
                    <p class="p_txt esp1">故障维修</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/card.html?pc=1026">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/5bbd75b5cba84ea8ad274d0ba362ae25.png" alt>
                    </p>
                    <p class="p_txt esp1">手表保养</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/card.html?pc=1025">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/165117ff93814c5fbe64d5b6af93d088.jpg" alt>
                    </p>
                    <p class="p_txt esp1">电池服务</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="gnTabs_block" v-show="msg===9">
            <div class="act_img">
              <a href>
                <img src="//image7.wbiao.co/mall/6445f5d6688949f8acd3731d27b4041a.png" alt>
              </a>
            </div>
            <p class="hot_tit">二手商城</p>
            <div class="sort_list sort_list_01">
              <ul class="clearfix">
                <li>
                  <a href="https://m.wbiao.cn/wbshare/recovery/message/?from=m_xb_tb">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/58fd80a904f24f048486d4ee663786a2.png" alt>
                    </p>
                    <p class="p_txt">回收</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/wbshare/new/5">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/caa7aa97ec5f426abfa9947b126f1e6e.png" alt>
                    </p>
                    <p class="p_txt">鉴定</p>
                  </a>
                </li>
                <li>
                  <a href="//m.wbiao.cn/dynamic/18071892299/">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/855b168de552484c9cb260bc98ed20e1.png" alt>
                    </p>
                    <p class="p_txt">求购</p>
                  </a>
                </li>
                <li>
                  <a href="//m.wbiao.cn/dynamic/18071322540/">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/0df3b30495cb43bfa89d82444a01205c.png" alt>
                    </p>
                    <p class="p_txt">租赁</p>
                  </a>
                </li>
                <li>
                  <a href="https://m.wbiao.cn/wbshare/new/2/?from=m_xb_tb">
                    <p class="p_img">
                      <img src="//image7.wbiao.co/mall/07765ca65259472d99872b6e2ed461b1.png" alt>
                    </p>
                    <p class="p_txt">竞拍</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="ding"></div>
      </div>
      <div
        class="iScrollVerticalScrollbar iScrollLoneScrollbar"
        style="overflow: hidden; pointer-events: none;"
      >
        <div
          class="iScrollIndicator"
          style="transition-duration: 0ms; display: block; height: 8px; transform: translate(0px, 0px) translateZ(0px); transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);"
        ></div>
      </div>   
    
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import BScroll from 'better-scroll'
export default Vue.extend({
    props:{
        list:Array,
        like:Array,
        country:Array,
        hot:Array
    },
    data(){
        return{
            msg:0
        }
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper,{click: true});
    },
});
</script>
<style lang="scss" scoped>
.W_gnTab_nav {
  display: inline-block;
  float: left;
  border-right: 1px solid #ddd;
  height: 100%;
}
.W_gnTab_nav .scroll_wrap {
  min-height: 101%;
}
.W_gnTab_nav ul {
  width: auto;
  border-bottom: 0;
  display: inline-block;
}
.W_gnTab_nav ul li {
  height: auto;
  float: none;
  flex: 1;
  display: block;
  text-align: center;
  border-bottom: 1px solid #f0f0f0;
}
.W_gnTab_nav ul li.on a {
  background: #515151;
  color: #fff;
  border-radius: 100px;
  border-bottom: 0;
}
.W_gnTab_nav ul li a {
  width: 61px;
  display: block;
  line-height: 22px;
  font-size: 12px;
  margin: 13px 11px;
  color: #666;
  padding: 0;
}

.W_right_floor {
    height: 100%;
    position: absolute;
    left: 83px;
    right: 0;
}
.W_right_floor .scroll_wrap {
    width: 100%!important;
    position: absolute;
    z-index: 1;
    transform: translateZ(0);
    user-select: none;
    min-height: 101%;
}
.W_gnTab_content .sort_list a .p_img {
    width: 60px;
    height: 60px;
    margin: 0 auto 3px;
    overflow: hidden;
    position: relative;
}
.W_gnTab_content .sort_list a .p_img img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
.W_gnTab_content .sort_list a .p_txt {
    color: #666;
    font-size: 12px;
    height: 18px;
}
.W_gnTab_content .sort_list_01 a .p_img {
    border-radius: 50%;
}
.W_right_floor .act_img a {
    display: block;
    margin: 9px 12px;
}
img {
    width: 100%;
    border: none;
    display: block;
}
.W_gnTab_content .gnTabs_block .hot_tit {
    font-size: 12px;
    line-height: 36px;
    color: #999;
    text-align: center;
    margin-bottom: 8px;
}
.W_gnTab_content .gnTabs_block .hot_tit:before {
    margin-right: 8px;
}
.W_gnTab_content .gnTabs_block .hot_tit:after {
    margin-left: 8px;
}
.W_gnTab_content .gnTabs_block .hot_tit:after, .W_gnTab_content .gnTabs_block .hot_tit:before {
    display: inline-block;
    content: "";
    width: 20px;
    height: 1px;
    background: #ededed;
    margin-bottom: 3.5px;
}
.W_gnTab_content .sort_list ul li {
    display: block;
    float: left;
    width: 33.33%;
    text-align: center;
    margin-bottom: 26px;
}
.clearfix:after {
    content: "";
    display: block;
    clear: both;
}
.ding{
    height: 20rem;
}
</style>
