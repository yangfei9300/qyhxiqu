(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-dati-dati"],{2320:function(t,i,e){t.exports=e.p+"static/datibottom.jpg"},"46d1":function(t,i,e){"use strict";var n=e("7277"),s=e.n(n);s.a},"6bbb":function(t,i,e){"use strict";e("6a54"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("5c47"),e("0506");var n={data:function(){return{title:"Hello",screenHeightPx:0,img1:0,img2:0,startTime:0,nowTime:0,miaoshu:30,tiIndex:0,tiList:[],dingshiqi:null,allTiCount:0,daan:""}},onLoad:function(){var t=uni.getSystemInfoSync(),i=t.screenWidth,e=t.screenHeight;console.log("屏幕的原始高");var n=750/i,s=n*e;this.screenHeightPx=s,console.log(n,i,e,s);var a=Math.floor(Date.now()/1e3);this.startTime=a,this.getAllTi()},methods:{submitTo:function(){var t=this,i={answer:this.daan,uuid:uni.getStorageSync("userId")};this.$axios.axios("POST",this.$paths.apiputAnswer,i).then((function(i){1==i.code?(console.log("提交成功"),t.nextQuestion(),t.daan=""):t.$tools.showToast(i.info)})).catch((function(t){console.log("错误回调",t)}))},nextQuestion:function(){if(this.tiIndex==this.tiList.length-1)return uni.redirectTo({url:"/pages/result/result"}),!1;this.miaoshu=30,this.tiIndex=this.tiIndex+1;var t=Math.floor(Date.now()/1e3);this.startTime=t},getAllTi:function(){var t=this,i=uni.getStorageSync("userId");if(!i)return this.$tools.showToast("用户信息不存在,请先登录"),setTimeout((function(t){uni.reLaunch({url:"/pages/index/index"})}),1e3),!1;var e={uuid:uni.getStorageSync("userId")};this.$axios.axios("POST",this.$paths.getQuestion,e).then((function(i){1==i.code?(t.tiList=i.data.test,t.tiIndex=i.data.a_answer,t.tiIndex>=t.tiList.length-1&&uni.redirectTo({url:"/pages/result/result"})):t.$tools.showToast(i.info)})).catch((function(t){console.log("错误回调",t)}))},imgload:function(t,i){console.log("阿萨德",t,i),1==i&&(this.img1=t.detail.height/2),2==i&&(this.img2=t.detail.height/2),this.img1>0&&this.img2>0&&(console.log("默认高",this.screenHeightPx),console.log("img1",this.img1),console.log("img2",this.img2))}}};i.default=n},7277:function(t,i,e){var n=e("941b");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=e("967d").default;s("6edc89ce",n,!0,{sourceMap:!1,shadowMode:!1})},"7d60":function(t,i,e){"use strict";e.r(i);var n=e("6bbb"),s=e.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=s.a},"941b":function(t,i,e){var n=e("c86c");i=n(!1),i.push([t.i,".cenbterbg[data-v-7208fc00]{background-image:url(/static/centerlogin.jpg);background-size:100% 100%}.inputview[data-v-7208fc00]{border:1px solid #c9c9c9;width:%?650?%;padding:%?25?% %?25?%;border-radius:%?15?%}.btns[data-v-7208fc00]{\r\n\t/* background-color:     #E17535; */background-color:#e7942e;color:#fff;height:%?100?%;width:%?650?%;border-radius:%?15?%;text-align:center;line-height:%?100?%}.textawa[data-v-7208fc00]{border:1px solid #c9c9c9;padding:%?25?% %?25?%;border-radius:%?15?%;width:%?690?%}.btns1[data-v-7208fc00]{\r\n\t/* background-color:     #E17535; */background-color:#e7942e;color:#fff;\r\n\t/* height: 70rpx; */\r\n\t/* width: 250rpx; */border-radius:%?15?%;text-align:center;line-height:%?90?%;color:#fff;font-weight:700}",""]),t.exports=i},a135:function(t,i,e){"use strict";e.r(i);var n=e("bcd4"),s=e("7d60");for(var a in s)["default"].indexOf(a)<0&&function(t){e.d(i,t,(function(){return s[t]}))}(a);e("46d1");var o=e("828b"),c=Object(o["a"])(s["default"],n["b"],n["c"],!1,null,"7208fc00",null,!1,n["a"],void 0);i["default"]=c.exports},a1e8:function(t,i,e){t.exports=e.p+"static/datitop.jpg"},bcd4:function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){}));var n=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",[n("v-uni-view",{staticClass:"colonn"},[n("v-uni-image",{staticClass:"w-750",attrs:{src:e("a1e8"),mode:"widthFix"},on:{load:function(i){arguments[0]=i=t.$handleEvent(i),t.imgload(i,1)}}}),n("v-uni-view",{staticClass:"colonn w-750 cenbterbg  center_center",style:{height:t.screenHeightPx-t.img1-t.img2+"rpx"}},[n("v-uni-scroll-view",{style:{height:t.screenHeightPx-t.img1-t.img2+"rpx"},attrs:{"scroll-y":!0}},[t.tiList.length>0?n("v-uni-view",{staticClass:"colonn p-all-30"},[n("v-uni-view",{staticClass:"h-20"}),n("v-uni-view",{staticClass:"roww rowsb duiqi"},[n("v-uni-view",{staticClass:"yincang1"},[t._v("倒计时"+t._s(t.miaoshu)+"秒")]),n("v-uni-view",{staticClass:"fs-40"},[t._v("考生请作答")]),n("v-uni-view",{staticClass:"yincang1",staticStyle:{color:"red"}},[t._v("倒计时"+t._s(t.miaoshu)+"秒")])],1),n("v-uni-view",{staticClass:"h-20"}),n("v-uni-view",{staticClass:"colonn w-690"},[n("v-uni-view",[t._v("第"+t._s(t.tiIndex+1)+"题      ."+t._s(t.tiList[t.tiIndex].name)+"(\n\t\t\t\t\t\t"+t._s(1==t.tiList[t.tiIndex].type?"中等题":"困难题")+"\n\t\t\t\t\t\t"+t._s(t.tiList[t.tiIndex].score)+"分\n\t\t\t\t\t\t)")])],1),n("v-uni-view",{staticClass:"h-20"}),n("v-uni-view",[n("v-uni-textarea",{staticClass:"textawa",attrs:{maxlength:"100000","auto-height":!0,placeholder:"请作答"},model:{value:t.daan,callback:function(i){t.daan=i},expression:"daan"}})],1),n("v-uni-view",{staticClass:"h-40"}),n("v-uni-view",{staticClass:"btns1",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.submitTo.apply(void 0,arguments)}}},[t._v("下一题")])],1):t._e()],1)],1),n("v-uni-image",{staticClass:"w-750",attrs:{src:e("2320"),mode:"widthFix"},on:{load:function(i){arguments[0]=i=t.$handleEvent(i),t.imgload(i,2)}}})],1)],1)},s=[]}}]);