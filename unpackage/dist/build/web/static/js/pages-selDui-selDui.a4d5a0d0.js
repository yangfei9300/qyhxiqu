(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-selDui-selDui"],{"0159":function(t,e,i){"use strict";i.r(e);var n=i("89ad"),a=i("ad4a");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("506c");var c=i("828b"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"53fc2da6",null,!1,n["a"],void 0);e["default"]=r.exports},2320:function(t,e,i){t.exports=i.p+"static/datibottom.jpg"},"506c":function(t,e,i){"use strict";var n=i("8a80"),a=i.n(n);a.a},8586:function(t,e,i){var n=i("c86c");e=n(!1),e.push([t.i,".cenbterbg[data-v-53fc2da6]{background-image:url(/static/centerlogin.jpg);background-size:100% 100%}.inputview[data-v-53fc2da6]{border:1px solid #c9c9c9;width:%?650?%;padding:%?25?% %?25?%;border-radius:%?15?%}.btns[data-v-53fc2da6]{\r\n\t/* background-color:     #E17535; */background-color:#e7942e;color:#fff;height:%?100?%;width:%?650?%;border-radius:%?15?%;text-align:center;line-height:%?100?%}.textawa[data-v-53fc2da6]{border:1px solid #c9c9c9;padding:%?25?% %?25?%;border-radius:%?15?%;width:%?690?%}.btns1[data-v-53fc2da6]{\r\n\t/* background-color:     #E17535; */\r\n\t/* background-color:#E7942E; */color:#fff;\r\n\t/* height: 70rpx; */\r\n\t/* width: 250rpx; */border-radius:%?15?%;text-align:center;line-height:%?70?%;color:#e7942e;font-weight:700}.type1[data-v-53fc2da6]{font-size:%?40?%;height:%?90?%;border:%?5?% solid #e7942e;width:%?400?%;text-align:center;line-height:%?90?%;font-weight:700;color:#e7942e;border-radius:%?15?%;box-shadow:#e7942e 0 0 %?8?% %?5?%}",""]),t.exports=e},"89ad":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"colonn"},[n("v-uni-image",{staticClass:"w-750",attrs:{src:i("a1e8"),mode:"widthFix"},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.imgload(e,1)}}}),n("v-uni-view",{staticClass:"colonn w-750 cenbterbg  center_center",style:{height:t.screenHeightPx-t.img1-t.img2+"rpx"}},[n("v-uni-view",{staticClass:"colonn"},[n("v-uni-view",{staticClass:"type1",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.toRead(1)}}},[t._v("A队")]),n("v-uni-view",{staticClass:"h-100"}),n("v-uni-view",{staticClass:"type1",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.toRead(2)}}},[t._v("B队")]),n("v-uni-view",{staticClass:"h-100"}),n("v-uni-view",{staticClass:"type1",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.toRead(2)}}},[t._v("C队")])],1)],1),n("v-uni-image",{staticClass:"w-750",attrs:{src:i("2320"),mode:"widthFix"},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.imgload(e,2)}}})],1)],1)},a=[]},"8a80":function(t,e,i){var n=i("8586");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("967d").default;a("48059710",n,!0,{sourceMap:!1,shadowMode:!1})},"946e":function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{title:"Hello",screenHeightPx:0,img1:0,img2:0,startTime:0,nowTime:0,miaoshu:30,tiIndex:1}},onLoad:function(){var t=uni.getSystemInfoSync(),e=t.screenWidth,i=t.screenHeight;console.log("屏幕的原始高");var n=750/e,a=n*i;this.screenHeightPx=a,console.log(n,e,i,a)},methods:{toRead:function(t){uni.navigateTo({url:"/pages/selFangxiang/selFangxiang"})},imgload:function(t,e){console.log("阿萨德",t,e),1==e&&(this.img1=t.detail.height/2),2==e&&(this.img2=t.detail.height/2),this.img1>0&&this.img2>0&&(console.log("默认高",this.screenHeightPx),console.log("img1",this.img1),console.log("img2",this.img2))}}};e.default=n},a1e8:function(t,e,i){t.exports=i.p+"static/datitop.jpg"},ad4a:function(t,e,i){"use strict";i.r(e);var n=i("946e"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a}}]);