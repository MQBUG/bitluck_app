(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-pc-panel2-index"],{1936:function(t,i,o){"use strict";o("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,o("d3b7"),o("159b"),o("14d9"),o("e9c4"),o("a9e3"),o("c740");var e={data:function(){return{colorType:2,colorRed:"#d93d57",colorGreen:"#11a876",showList:[],paramsList:[],path:"wss://wsaws.okx.com:8443/ws/v5/public",socket:""}},onLoad:function(){var t=localStorage.getItem("localList2");if(null!=t){t=JSON.parse(t),this.showList=t;var i=[];t.forEach((function(t){i.push({channel:"tickers",instId:t.symbol_okx})})),this.paramsList=i}},onShow:function(){this.socketInit()},onHide:function(){this.close()},methods:{chooseItem:function(t){console.log("长按",t)},touchMove:function(t){console.log("长按",t)},socketInit:function(){var t=this;uni.closeSocket(),this.socket=uni.connectSocket({url:this.path,success:function(t){console.log("websocket正在连接...")}}),uni.onSocketOpen((function(i){console.log("WebSocket连接成功"),t.onSocketMessage(),t.send()}))},send:function(){var t={op:"subscribe",args:this.paramsList};uni.sendSocketMessage({data:JSON.stringify(t)})},onSocketMessage:function(){var t=this;uni.onSocketMessage((function(i){var o=JSON.parse(i.data);t.setListData(o)}))},setListData:function(t){if(t.data){var i=Number(t.data[0].last),o=this.showList.findIndex((function(i){return i.symbol_okx==t.data[0].instId}));if(o>=0){1==this.colorType?0!=this.showList[o].price&&t.data[0].last>this.showList[o].price?(this.$set(this.showList[o],"color",this.colorGreen),this.$set(this.showList[o],"logoArrow","arrow-upward")):0!=this.showList[o].price&&t.data[0].last<this.showList[o].price&&(this.$set(this.showList[o],"color",this.colorRed),this.$set(this.showList[o],"logoArrow","arrow-downward")):2==this.colorType&&(0!=this.showList[o].price&&t.data[0].last>this.showList[o].price?(this.$set(this.showList[o],"color",this.colorRed),this.$set(this.showList[o],"logoArrow","arrow-upward")):0!=this.showList[o].price&&t.data[0].last<this.showList[o].price&&(this.$set(this.showList[o],"color",this.colorGreen),this.$set(this.showList[o],"logoArrow","arrow-downward")));var e=((t.data[0].last-t.data[0].sodUtc8)/t.data[0].sodUtc8*100).toFixed(2);this.$set(this.showList[o],"dayUp",e),this.$set(this.showList[o],"price",i)}}},close:function(){console.log("关闭websocket"),this.socket&&(uni.closeSocket(),this.socket="")}}};i.default=e},"232a":function(t,i,o){"use strict";o.r(i);var e=o("4850"),s=o("6220");for(var n in s)["default"].indexOf(n)<0&&function(t){o.d(i,t,(function(){return s[t]}))}(n);o("8f60");var a=o("f0c5"),c=Object(a["a"])(s["default"],e["b"],e["c"],!1,null,"3f57dcec",null,!1,e["a"],void 0);i["default"]=c.exports},"3d59":function(t,i,o){var e=o("c01a");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var s=o("4f06").default;s("e66c45b8",e,!0,{sourceMap:!1,shadowMode:!1})},4850:function(t,i,o){"use strict";o.d(i,"b",(function(){return s})),o.d(i,"c",(function(){return n})),o.d(i,"a",(function(){return e}));var e={uIcon:o("ec95").default},s=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("v-uni-view",{staticClass:"content"},t._l(t.showList,(function(i){return o("v-uni-view",{staticClass:"item_box"},[o("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[o("v-uni-image",{staticClass:"logo",attrs:{mode:"widthFix",src:i.logoLink}}),o("v-uni-view",{staticStyle:{"font-size":"10rpx",color:"gray"}},[t._v(t._s(i.symbol_okx))])],1),o("v-uni-view",{staticClass:"price_box"},[o("v-uni-view",{staticStyle:{display:"flex","align-items":"center"},style:{color:i.color}},[o("v-uni-text",{staticClass:"price_text"},[t._v("$"+t._s(i.price))]),o("u-icon",{directives:[{name:"show",rawName:"v-show",value:i.logoArrow,expression:"item.logoArrow"}],staticStyle:{"margin-left":"0upx"},attrs:{name:i.logoArrow,size:"12"}})],1),o("v-uni-view",{staticClass:"tab_box",style:{color:i.dayUp>=0?"#d93d57":"#11a876"}},[t._v(t._s(i.dayUp)+" %")])],1),o("v-uni-view"),o("v-uni-view",{staticClass:"float_box"},[i.costPrice>0?o("v-uni-view",[t._v("成本价："+t._s(i.costPrice))]):t._e(),i.marginPrice>0?o("v-uni-view",[t._v("爆仓价："+t._s(i.marginPrice))]):t._e()],1)],1)})),1)},n=[]},6220:function(t,i,o){"use strict";o.r(i);var e=o("1936"),s=o.n(e);for(var n in e)["default"].indexOf(n)<0&&function(t){o.d(i,t,(function(){return e[t]}))}(n);i["default"]=s.a},"8f60":function(t,i,o){"use strict";var e=o("3d59"),s=o.n(e);s.a},c01a:function(t,i,o){var e=o("24fb");i=e(!1),i.push([t.i,"uni-page-body[data-v-3f57dcec]{height:100%;background-color:#fff}body.?%PAGE?%[data-v-3f57dcec]{background-color:#fff}.content[data-v-3f57dcec]{width:100%;height:100%;display:flex;flex-wrap:wrap;justify-content:space-around;align-items:center;position:relative;background-color:#fff\n\t/* background-image: linear-gradient(to right, white, antiquewhite); */\n\t/* background-color: white; */}\n\n/* 独立每一个盒子 */.item_box[data-v-3f57dcec]{position:relative;width:24%;height:31%;display:flex;flex-direction:column;\n\t/* align-items: center; */\n\t/* justify-content: center; */border-radius:%?15?%;border:%?1?% solid #e3e3e3;\n\t/* box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); */box-shadow:rgba(88,102,126,.1) 0 4px 24px 0,rgba(88,102,126,.12) 0 1px 2px 0}.logo[data-v-3f57dcec]{width:%?22?%;margin:%?10?% %?10?% %?10?% %?20?%\n\t/* margin-bottom: 5rpx; */}\n\n/* 价格 */.price_box[data-v-3f57dcec]{height:30%;width:95%;display:flex;flex-direction:column;align-items:center;justify-content:center;margin:7% auto}.price_text[data-v-3f57dcec]{font-size:%?22?%}\n\n/* 每天涨跌幅 */.tab_box[data-v-3f57dcec]{display:flex;justify-content:center;align-items:center;font-size:%?10?%;padding:%?2?% %?6?%;margin-top:%?10?%;border-radius:%?5?%;border-width:%?1?%;border-style:solid}\n\n/* 浮动盒子，成本、爆仓价格信息 */.float_box[data-v-3f57dcec]{position:absolute;font-size:%?7?%;right:%?18?%;top:%?10?%;opacity:.8}",""]),t.exports=i}}]);