(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-xycz-xycz"],{"06d9":function(e,t,n){"use strict";var i=n("abd3"),s=n.n(i);s.a},"14bc":function(e,t,n){"use strict";n("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("e966"),n("e838");var i={data:function(){return{title:"Hello",screenHeightPx:0,img1:0,img2:0,startTime:0,nowTime:0,miaoshu:30,tiIndex:1,numberInput:"",formattedNumber:"",duiyuans:["江女士1","江女士2","江女士3"],fens:{fen1:"",fen2:"",fen3:"",fen4:"",fen5:"",fen6:"",fen7:""},isFenSub:[!0,!0,!0,!0,!0,!0,!0],form:{score_str:"",score:"",b1score_str:"",b1score:"",uuid:""},fenBz:[20,10,25,25,10,5,5],heTishi:[!0,!0,!0,!0,!0,!0,!0]}},onLoad:function(){var e=uni.getSystemInfoSync(),t=e.screenWidth,n=e.screenHeight;console.log("屏幕的原始高");var i=750/t,s=i*n;this.screenHeightPx=s;var a=uni.getStorageSync("dafenUser");1==a.is_score&&this.getLishidafen()},methods:{getLishidafen:function(){var e=this,t={uuid:uni.getStorageSync("userId"),user_id:uni.getStorageSync("dafenUser").user_id};this.$axios.axios("POST",this.$paths.Api20241024dtLogInfo,t).then((function(t){1==t.code?(e.fens.fen1=parseInt(t.data.score_arr[0]),e.fens.fen2=parseInt(t.data.score_arr[1]),e.fens.fen3=parseInt(t.data.score_arr[2]),e.fens.fen4=parseInt(t.data.score_arr[3]),e.fens.fen5=parseInt(t.data.score_arr[4]),e.fens.fen6=parseInt(t.data.score_arr[5]),e.fens.fen7=parseInt(t.data.score_arr[6])):e.$tools.showToast(t.info)})).catch((function(e){console.log("错误回调",e)}))},heTishiSUb:function(){""!=this.fens.fen1&&(this.fens.fen1<25?this.heTishi[0]=!1:this.heTishi[0]=!0),this.$forceUpdate()},isFenSubChange:function(e,t){var n=e.detail.value,i=[20,10,25,25,10,5,5];n=parseFloat(n),console.log("--",i[t],n),this.heTishi[t]=!(i[t]<n)},toSubmit:function(){var e=this;if(!this.isSubmit())return!1;var t=this.fens;t.fen1=parseFloat(t.fen1).toFixed(1),t.fen2=parseFloat(t.fen2).toFixed(1),t.fen3=parseFloat(t.fen3).toFixed(1),t.fen4=parseFloat(t.fen4).toFixed(1),t.fen5=parseFloat(t.fen5).toFixed(1),t.fen6=parseFloat(t.fen6).toFixed(1),t.fen7=parseFloat(t.fen7).toFixed(1);var n=parseFloat(t.fen1)+parseFloat(t.fen2)+parseFloat(t.fen3)+parseFloat(t.fen4)+parseFloat(t.fen5)+parseFloat(t.fen6)+parseFloat(t.fen7),i={score_str:t.fen1+","+t.fen2+","+t.fen3+","+t.fen4+","+t.fen5+","+t.fen6+","+t.fen7,score:n.toFixed(1),user_id:uni.getStorageSync("dafenUser").user_id,uuid:uni.getStorageSync("userId")};this.$axios.axios("POST",this.$paths.Api20241024markPut,i).then((function(t){1==t.code?(console.log("阿斯顿",t),e.$tools.showToast("提交成功"),setTimeout((function(e){uni.navigateBack({delta:1})}),1e3)):e.$tools.showToast(t.info)})).catch((function(e){console.log("错误回调",e)}))},isSubmit:function(){if(""==this.fens.fen1||""==this.fens.fen2||""==this.fens.fen3||""==this.fens.fen4||""==this.fens.fen5||""==this.fens.fen6||""==this.fens.fen7)return this.$tools.showToast("有遗漏未打分，提交失败"),!1;for(var e=0,t=0;t<this.heTishi.length;t++)this.heTishi[t]||(e+=1);return!(e>0)||(this.$tools.showToast("有部分打分不规范，提交失败"),!1)},checkPrice:function(e){var t=this,n=e.detail.value;this.$nextTick((function(){t.numberInput=n}))},nextQuestion:function(){if(10==this.tiIndex)return this.tiIndex=11,this.$tools.showToast("打分完成"),setTimeout((function(e){uni.redirectTo({url:"/pages/selFangxiang/selFangxiang"})}),1e3),!1;this.tiIndex<10&&(this.tiIndex=this.tiIndex+1)},imgload:function(e,t){1==t&&(this.img1=e.detail.height/2),2==t&&(this.img2=e.detail.height/2),this.img1>0&&this.img2>0&&(console.log("默认高",this.screenHeightPx),console.log("img1",this.img1),console.log("img2",this.img2))}}};t.default=i},2320:function(e,t,n){e.exports=n.p+"static/datibottom.jpg"},"6d91":function(e,t,n){var i=n("c86c");t=i(!1),t.push([e.i,".cenbterbg[data-v-58eedd84]{background-image:url(/static/centerlogin.jpg);background-size:100% 100%}.inputview[data-v-58eedd84]{border:1px solid #c9c9c9;width:%?650?%;padding:%?25?% %?25?%;border-radius:%?15?%}.btns[data-v-58eedd84]{\r\n\t/* background-color:     #E17535; */background-color:#e7942e;color:#fff;height:%?100?%;width:%?650?%;border-radius:%?15?%;text-align:center;line-height:%?100?%}.textawa[data-v-58eedd84]{border:1px solid #c9c9c9;border-radius:%?15?%;width:%?690?%;height:%?90?%;padding:%?0?% %?20?%}.btns1[data-v-58eedd84]{\r\n\t/* background-color:     #E17535; */background-color:#e7942e;color:#fff;\r\n\t/* height: 70rpx; */\r\n\t/* width: 250rpx; */border-radius:%?15?%;text-align:center;line-height:%?90?%;color:#fff;font-weight:700}.xianZong[data-v-58eedd84]{width:%?690?%;height:1px;border-bottom:3px dotted #e7942e}",""]),e.exports=t},"8cb4":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"colonn"},[i("v-uni-image",{staticClass:"w-750",attrs:{src:n("a1e8"),mode:"widthFix"},on:{load:function(t){arguments[0]=t=e.$handleEvent(t),e.imgload(t,1)}}}),i("v-uni-view",{staticClass:"colonn w-750 cenbterbg  center_center",style:{height:e.screenHeightPx-e.img1-e.img2+"rpx"}},[i("v-uni-scroll-view",{style:{height:e.screenHeightPx-e.img1-e.img2+"rpx"},attrs:{"scroll-y":!0}},[i("v-uni-view",{staticClass:"colonn p-all-30"},[i("v-uni-view",{staticClass:"h-50"}),i("v-uni-view",{staticClass:"roww center_center duiqi"},[i("v-uni-view",{staticClass:"fs-40 fw-800"},[e._v("批阅中")])],1),i("v-uni-view",{staticClass:"h-50"}),[i("v-uni-view",{staticClass:"fs-40 fw-800"},[e._v("案例分析打分（总分100分）")]),i("v-uni-view",{staticClass:"h-20"}),i("v-uni-view",{staticClass:"colonn center_center"},[i("v-uni-view",{staticClass:"fs-40 w-690"},[e._v("1.重点影像学表现、有价值的临床特征等描述清楚、提供不同于常规诊断的新视角或见解，为诊断提供新思路等（20分）")]),i("v-uni-view",{staticClass:"h-20"}),i("v-uni-input",{staticClass:"textawa",attrs:{type:"number",placeholder:"最高20分"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.isFenSubChange(t,0)}},model:{value:e.fens.fen1,callback:function(t){e.$set(e.fens,"fen1",t)},expression:"fens.fen1"}})],1),e.heTishi[0]?e._e():i("v-uni-view",{staticStyle:{color:"red"}},[e._v("第1项得分必须小于等于20")]),i("v-uni-view",{staticClass:"h-20"}),i("v-uni-view",{staticClass:"colonn center_center"},[i("v-uni-view",{staticClass:"fs-40 w-690"},[e._v("2.根据影像学资料等给出正确的第一诊断(10分)")]),i("v-uni-view",{staticClass:"h-20"}),i("v-uni-input",{staticClass:"textawa",attrs:{type:"number",placeholder:"最高10分"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.isFenSubChange(t,1)}},model:{value:e.fens.fen2,callback:function(t){e.$set(e.fens,"fen2",t)},expression:"fens.fen2"}})],1),e.heTishi[1]?e._e():i("v-uni-view",{staticStyle:{color:"red"}},[e._v("第2项得分必须小于等于10")]),i("v-uni-view",{staticClass:"h-20"}),i("v-uni-view",{staticClass:"colonn center_center"},[i("v-uni-view",{staticClass:"fs-40 w-690"},[e._v("3.思考过程阐述清晰有条理，突出案例重点诊断依据(25分)")]),i("v-uni-view",{staticClass:"h-20"}),i("v-uni-input",{staticClass:"textawa",attrs:{type:"number",placeholder:"最高25分"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.isFenSubChange(t,2)}},model:{value:e.fens.fen3,callback:function(t){e.$set(e.fens,"fen3",t)},expression:"fens.fen3"}})],1),e.heTishi[2]?e._e():i("v-uni-view",{staticStyle:{color:"red"}},[e._v("第3项得分必须小于等于25")]),i("v-uni-view",{staticClass:"h-20"}),i("v-uni-view",{staticClass:"colonn center_center"},[i("v-uni-view",{staticClass:"fs-40 w-690"},[e._v("4.对案例分析合理，结构完整，涵盖重要的鉴别诊断(25分)")]),i("v-uni-view",{staticClass:"h-20"}),i("v-uni-input",{staticClass:"textawa",attrs:{type:"number",placeholder:"最高25分"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.isFenSubChange(t,3)}},model:{value:e.fens.fen4,callback:function(t){e.$set(e.fens,"fen4",t)},expression:"fens.fen4"}})],1),e.heTishi[3]?e._e():i("v-uni-view",{staticStyle:{color:"red"}},[e._v("第4项得分必须小于等于25")]),i("v-uni-view",{staticClass:"h-20"}),i("v-uni-view",{staticClass:"colonn center_center"},[i("v-uni-view",{staticClass:"fs-40  w-690"},[e._v("5.内容完整，符合案例陈述逻辑(10分)")]),i("v-uni-view",{staticClass:"h-20"}),i("v-uni-input",{staticClass:"textawa",attrs:{type:"number",placeholder:"最高10分"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.isFenSubChange(t,4)}},model:{value:e.fens.fen5,callback:function(t){e.$set(e.fens,"fen5",t)},expression:"fens.fen5"}})],1),e.heTishi[4]?e._e():i("v-uni-view",{staticStyle:{color:"red"}},[e._v("第5项得分必须小于等于10")]),i("v-uni-view",{staticClass:"h-20"}),i("v-uni-view",{staticClass:"colonn center_center"},[i("v-uni-view",{staticClass:"fs-40  w-690"},[e._v("6.语速和节奏适中、语言表达流畅、清晰饱满，PPT制作美观(5分)")]),i("v-uni-view",{staticClass:"h-20"}),i("v-uni-input",{staticClass:"textawa",attrs:{type:"number",placeholder:"最高5分"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.isFenSubChange(t,5)}},model:{value:e.fens.fen6,callback:function(t){e.$set(e.fens,"fen6",t)},expression:"fens.fen6"}})],1),e.heTishi[5]?e._e():i("v-uni-view",{staticStyle:{color:"red"}},[e._v("第6项得分必须小于等于5")]),i("v-uni-view",{staticClass:"h-20"}),i("v-uni-view",{staticClass:"colonn center_center"},[i("v-uni-view",{staticClass:"fs-40  w-690"},[e._v("7.时间分配合理（陈述时间达到4分半以上且未超时），超时扣不得分(5分)")]),i("v-uni-view",{staticClass:"h-20"}),i("v-uni-input",{staticClass:"textawa",attrs:{type:"number",placeholder:"最高5分"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.isFenSubChange(t,6)}},model:{value:e.fens.fen7,callback:function(t){e.$set(e.fens,"fen7",t)},expression:"fens.fen7"}})],1),e.heTishi[6]?e._e():i("v-uni-view",{staticStyle:{color:"red"}},[e._v("第7项得分必须小于等于5")])],i("v-uni-view",{staticClass:"h-40"}),i("v-uni-view",{staticClass:"btns1",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.toSubmit.apply(void 0,arguments)}}},[e._v("提交")])],2)],1)],1),i("v-uni-image",{staticClass:"w-750",attrs:{src:n("2320"),mode:"widthFix"},on:{load:function(t){arguments[0]=t=e.$handleEvent(t),e.imgload(t,2)}}})],1)],1)},s=[]},a1e8:function(e,t,n){e.exports=n.p+"static/datitop.jpg"},a91c:function(e,t,n){"use strict";n.r(t);var i=n("8cb4"),s=n("db8b");for(var a in s)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return s[e]}))}(a);n("06d9");var o=n("828b"),c=Object(o["a"])(s["default"],i["b"],i["c"],!1,null,"58eedd84",null,!1,i["a"],void 0);t["default"]=c.exports},abd3:function(e,t,n){var i=n("6d91");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var s=n("967d").default;s("23b6a495",i,!0,{sourceMap:!1,shadowMode:!1})},db8b:function(e,t,n){"use strict";n.r(t);var i=n("14bc"),s=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=s.a}}]);