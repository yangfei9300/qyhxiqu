(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-fenshus-fenshus"],{"0be2":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"colonn"},[n("v-uni-image",{staticClass:"w-750",attrs:{src:i("a1e8"),mode:"widthFix"},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.imgload(e,1)}}}),n("v-uni-view",{staticClass:"colonn w-750 cenbterbg  center_center",style:{height:t.screenHeightPx-t.img1-t.img2+"rpx"}},[n("v-uni-view",{staticClass:"h-0"}),n("v-uni-view",{staticClass:"roww center_center duiqi h-100"},[n("v-uni-view",{staticClass:"fs-40 fw-700 h-100",staticStyle:{"line-height":"100rpx"}},[t._v("得分记录")])],1),n("v-uni-view",{staticClass:"h-30"}),n("v-uni-scroll-view",{style:{height:t.screenHeightPx-t.img1-t.img2-200+"rpx"},attrs:{"scroll-y":!0}},[n("v-uni-view",{staticClass:"colonn p-all-30"},[t._l(t.userList,(function(e,i){return[n("v-uni-view",{staticClass:"roww rowsa fw-700 p-bottom-40",staticStyle:{color:"#000000"}},[n("v-uni-view",{staticClass:"w-100 cebtees"},[t._v(t._s(i+1)+".")]),n("v-uni-view",{staticClass:"w-208 cebtees"},[t._v(t._s(e.username))]),n("v-uni-view",{staticClass:"w-208 cebtees"},[t._v(t._s(e.score))])],1)]}))],2)],1)],1),n("v-uni-image",{staticClass:"w-750",attrs:{src:i("2320"),mode:"widthFix"},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.imgload(e,2)}}})],1)],1)},s=[]},"1d10":function(t,e,i){"use strict";i.r(e);var n=i("a950"),s=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=s.a},2320:function(t,e,i){t.exports=i.p+"static/datibottom.jpg"},"370b":function(t,e,i){var n=i("c86c");e=n(!1),e.push([t.i,".cenbterbg[data-v-55cc5938]{background-image:url(/static/centerlogin.jpg);background-size:100% 100%}.inputview[data-v-55cc5938]{border:1px solid #c9c9c9;width:%?650?%;padding:%?25?% %?25?%;border-radius:%?15?%}.btns[data-v-55cc5938]{\r\n\t/* background-color:     #E17535; */background-color:#e7942e;color:#fff;height:%?100?%;width:%?650?%;border-radius:%?15?%;text-align:center;line-height:%?100?%}.textawa[data-v-55cc5938]{border:1px solid #c9c9c9;padding:%?25?% %?25?%;border-radius:%?15?%;width:%?690?%}.btns1[data-v-55cc5938]{\r\n\t/* background-color:     #E17535; */\r\n\t/* background-color:#E7942E; */color:#fff;\r\n\t/* height: 70rpx; */\r\n\t/* width: 250rpx; */border-radius:%?15?%;text-align:center;line-height:%?70?%;color:#e7942e;font-weight:700}.type1[data-v-55cc5938]{font-size:%?40?%;height:%?90?%;border:%?5?% solid #e7942e;width:%?400?%;text-align:center;line-height:%?90?%;font-weight:700;color:#e7942e;border-radius:%?15?%;box-shadow:#e7942e 0 0 %?8?% %?5?%}.cebtees[data-v-55cc5938]{text-align:center}",""]),t.exports=e},5693:function(t,e,i){"use strict";var n=i("7f6b"),s=i.n(n);s.a},"7f6b":function(t,e,i){var n=i("370b");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=i("967d").default;s("7daf7d1d",n,!0,{sourceMap:!1,shadowMode:!1})},a1e8:function(t,e,i){t.exports=i.p+"static/datitop.jpg"},a950:function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("e966");var n={data:function(){return{title:"Hello",screenHeightPx:0,img1:0,img2:0,startTime:0,nowTime:0,miaoshu:30,tiIndex:1,userList:[]}},onLoad:function(){var t=uni.getSystemInfoSync(),e=t.screenWidth,i=t.screenHeight;console.log("屏幕的原始高");var n=750/e,s=n*i;this.screenHeightPx=s,console.log(n,e,i,s)},onShow:function(){this.getuserList()},methods:{markClick:function(t,e){uni.setStorageSync("dafenUser",e),uni.navigateTo({url:"/pages/xycz/xycz"})},getuserList:function(){var t=this,e={user_id:uni.getStorageSync("dafenUser").user_id},i=parseInt(uni.getStorageSync("readType"));if(2==i)var n=this.$paths.Api20241024getUserLScoreList;else if(1==i)n=this.$paths.Api20241024getUserLScoreList2;this.$axios.axios("POST",n,e).then((function(e){1==e.code?t.userList=e.data:t.$tools.showToast(e.info)})).catch((function(t){console.log("错误回调",t)}))},toInfo:function(t){if(1==t){var e=uni.getStorageSync("readType");1==e?uni.navigateTo({url:"/pages/comment/comment"}):uni.navigateTo({url:"/pages/xycz/xycz"})}else 2==t&&uni.navigateTo({url:"/pages/readSubject/readSubject"})},imgload:function(t,e){console.log("阿萨德",t,e),1==e&&(this.img1=t.detail.height/2),2==e&&(this.img2=t.detail.height/2),this.img1>0&&this.img2>0&&(console.log("默认高",this.screenHeightPx),console.log("img1",this.img1),console.log("img2",this.img2))}}};e.default=n},d9fd:function(t,e,i){"use strict";i.r(e);var n=i("0be2"),s=i("1d10");for(var o in s)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(o);i("5693");var a=i("828b"),c=Object(a["a"])(s["default"],n["b"],n["c"],!1,null,"55cc5938",null,!1,n["a"],void 0);e["default"]=c.exports}}]);