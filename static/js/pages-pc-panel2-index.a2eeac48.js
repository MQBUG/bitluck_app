(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-pc-panel2-index"],{1936:function(t,o,i){"use strict";i("7a82"),Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i("d3b7"),i("159b"),i("14d9"),i("e9c4"),i("a9e3"),i("c740");var s={data:function(){return{colorType:2,colorRed:"#d93d57",colorGreen:"#11a876",showList:[],paramsList:[],path:"wss://wsaws.okx.com:8443/ws/v5/public",socket:""}},onLoad:function(){var t=localStorage.getItem("localList2");if(null!=t){t=JSON.parse(t),this.showList=t;var o=[];t.forEach((function(t){o.push({channel:"tickers",instId:t.symbol_okx})})),this.paramsList=o}var i=uni.getStorageSync("colorType");i&&(this.colorType=i)},onShow:function(){this.socketInit()},onHide:function(){this.close()},methods:{chooseItem:function(t){console.log("长按",t)},touchMove:function(t){console.log("长按",t)},socketInit:function(){var t=this;uni.closeSocket(),this.socket=uni.connectSocket({url:this.path,success:function(t){console.log("websocket正在连接...")}}),uni.onSocketOpen((function(o){console.log("WebSocket连接成功"),t.onSocketMessage(),t.send()}))},send:function(){var t={op:"subscribe",args:this.paramsList};uni.sendSocketMessage({data:JSON.stringify(t)})},onSocketMessage:function(){var t=this;uni.onSocketMessage((function(o){var i=JSON.parse(o.data);t.setListData(i)}))},setListData:function(t){if(t.data){var o=Number(t.data[0].last),i=this.showList.findIndex((function(o){return o.symbol_okx==t.data[0].instId}));if(i>=0){1==this.colorType?0!=this.showList[i].price&&t.data[0].last>this.showList[i].price?(this.$set(this.showList[i],"color",this.colorGreen),this.$set(this.showList[i],"logoArrow","arrow-upward")):0!=this.showList[i].price&&t.data[0].last<this.showList[i].price&&(this.$set(this.showList[i],"color",this.colorRed),this.$set(this.showList[i],"logoArrow","arrow-downward")):2==this.colorType&&(0!=this.showList[i].price&&t.data[0].last>this.showList[i].price?(this.$set(this.showList[i],"color",this.colorRed),this.$set(this.showList[i],"logoArrow","arrow-upward")):0!=this.showList[i].price&&t.data[0].last<this.showList[i].price&&(this.$set(this.showList[i],"color",this.colorGreen),this.$set(this.showList[i],"logoArrow","arrow-downward")));var s=((t.data[0].last-t.data[0].sodUtc8)/t.data[0].sodUtc8*100).toFixed(2);this.$set(this.showList[i],"dayUp",s),this.$set(this.showList[i],"price",o)}}},close:function(){console.log("关闭websocket"),this.socket&&(uni.closeSocket(),this.socket="")}}};o.default=s},"232a":function(t,o,i){"use strict";i.r(o);var s=i("8c2d"),e=i("6220");for(var a in e)["default"].indexOf(a)<0&&function(t){i.d(o,t,(function(){return e[t]}))}(a);i("a2b2");var n=i("f0c5"),r=Object(n["a"])(e["default"],s["b"],s["c"],!1,null,"88a6b6a4",null,!1,s["a"],void 0);o["default"]=r.exports},6220:function(t,o,i){"use strict";i.r(o);var s=i("1936"),e=i.n(s);for(var a in s)["default"].indexOf(a)<0&&function(t){i.d(o,t,(function(){return s[t]}))}(a);o["default"]=e.a},6638:function(t,o,i){var s=i("24fb");o=s(!1),o.push([t.i,"uni-page-body[data-v-88a6b6a4]{height:100%;background-color:#fff}body.?%PAGE?%[data-v-88a6b6a4]{background-color:#fff}.content[data-v-88a6b6a4]{width:100%;height:100%;display:flex;flex-wrap:wrap;justify-content:space-around;align-items:center;position:relative;background-color:#fff}\n\n/* 独立每一个盒子 */.item_box[data-v-88a6b6a4]{position:relative;width:24%;height:31%;display:flex;flex-direction:column;border-radius:%?15?%;border:%?1?% solid #e3e3e3;box-shadow:rgba(88,102,126,.1) 0 4px 24px 0,rgba(88,102,126,.12) 0 1px 2px 0}.logo[data-v-88a6b6a4]{width:%?22?%;margin:%?10?% %?10?% %?10?% %?20?%}\n\n/* 价格 */.price_box[data-v-88a6b6a4]{height:30%;display:flex;flex-direction:column;align-items:center;justify-content:center;margin:4% auto\n\t/* background-color: #e3e3e3; */}.price_text[data-v-88a6b6a4]{font-size:%?22?%}\n\n/* 每天涨跌幅 */.tab_box[data-v-88a6b6a4]{display:flex;align-items:center;justify-content:center}.tab_item[data-v-88a6b6a4]{display:flex;justify-content:center;align-items:center;font-size:%?10?%;padding:%?2?% %?6?%;border-radius:%?5?%;border-width:%?1?%;border-style:solid}\n\n/* 浮动盒子，成本、爆仓价格信息 */.float_box[data-v-88a6b6a4]{position:absolute;font-size:%?7?%;right:%?18?%;top:%?10?%;opacity:.8}",""]),t.exports=o},"8c2d":function(t,o,i){"use strict";i.d(o,"b",(function(){return e})),i.d(o,"c",(function(){return a})),i.d(o,"a",(function(){return s}));var s={uIcon:i("ec95").default},e=function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("v-uni-view",{staticClass:"content"},t._l(t.showList,(function(o){return i("v-uni-view",{staticClass:"item_box"},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center",height:"30%"}},[i("v-uni-image",{staticClass:"logo",attrs:{mode:"widthFix",src:o.logoLink}}),i("v-uni-view",{staticStyle:{"font-size":"10rpx",color:"gray"}},[t._v(t._s(o.symbol_okx))])],1),i("v-uni-view",{staticClass:"price_box"},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center"},style:{color:o.color}},[i("v-uni-text",{staticClass:"price_text"},[t._v("$"+t._s(o.price))]),i("u-icon",{directives:[{name:"show",rawName:"v-show",value:o.logoArrow,expression:"item.logoArrow"}],staticStyle:{"margin-left":"0upx"},attrs:{name:o.logoArrow,size:"12"}})],1)],1),i("v-uni-view",{staticClass:"tab_box"},[1==t.colorType?i("v-uni-view",{staticClass:"tab_item",style:{color:o.dayUp>=0?"#11a876":"#d93d57"}},[t._v(t._s(o.dayUp)+" %")]):t._e(),2==t.colorType?i("v-uni-view",{staticClass:"tab_item",style:{color:o.dayUp>=0?"#d93d57":"#11a876"}},[t._v(t._s(o.dayUp)+" %")]):t._e()],1),i("v-uni-view",{staticClass:"float_box"},[o.costPrice>0?i("v-uni-view",[t._v("成本价："+t._s(o.costPrice))]):t._e(),o.marginPrice>0?i("v-uni-view",[t._v("爆仓价："+t._s(o.marginPrice))]):t._e()],1)],1)})),1)},a=[]},9534:function(t,o,i){var s=i("6638");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var e=i("4f06").default;e("68ade38c",s,!0,{sourceMap:!1,shadowMode:!1})},a2b2:function(t,o,i){"use strict";var s=i("9534"),e=i.n(s);e.a}}]);