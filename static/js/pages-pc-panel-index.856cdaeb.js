(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-pc-panel-index"],{"14f1":function(o,t,e){"use strict";e.r(t);var l=e("3bd4"),i=e.n(l);for(var s in l)["default"].indexOf(s)<0&&function(o){e.d(t,o,(function(){return l[o]}))}(s);t["default"]=i.a},"166d":function(o,t,e){var l=e("24fb");t=l(!1),t.push([o.i,"uni-page-body[data-v-98b4715c]{height:100%;background-color:#fff}body.?%PAGE?%[data-v-98b4715c]{background-color:#fff}.content[data-v-98b4715c]{width:100%;height:100%;display:flex;flex-wrap:wrap;justify-content:space-around;align-items:center;position:relative;background-color:#fff\n\t/* background-image: linear-gradient(to right, white, antiquewhite); */\n\t/* background-color: white; */}\n\n/* 独立每一个盒子 */.item_box[data-v-98b4715c]{position:relative;width:24%;height:31%;display:flex;flex-direction:column;\n\t/* align-items: center; */\n\t/* justify-content: center; */border-radius:%?15?%;border:%?1?% solid #e3e3e3;\n\t/* box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); */box-shadow:rgba(88,102,126,.1) 0 4px 24px 0,rgba(88,102,126,.12) 0 1px 2px 0}.logo[data-v-98b4715c]{width:%?22?%;margin:%?10?% %?10?% %?10?% %?20?%\n\t/* margin-bottom: 5rpx; */}\n\n/* 价格 */.price_box[data-v-98b4715c]{height:30%;width:95%;display:flex;flex-direction:column;align-items:center;justify-content:center;margin:7% auto}.price_text[data-v-98b4715c]{font-size:%?22?%}\n\n/* 每天涨跌幅 */.tab_box[data-v-98b4715c]{display:flex;justify-content:center;align-items:center;font-size:%?10?%;padding:%?2?% %?6?%;margin-top:%?10?%;border-radius:%?5?%;border-width:%?1?%;border-style:solid}\n\n/* 浮动盒子，成本、爆仓价格信息 */.float_box[data-v-98b4715c]{position:absolute;font-size:%?7?%;right:%?18?%;top:%?10?%;opacity:.8}",""]),o.exports=t},"1aa5":function(o,t,e){"use strict";var l=e("a4e5"),i=e.n(l);i.a},2909:function(o,t,e){"use strict";e("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(o){return(0,l.default)(o)||(0,i.default)(o)||(0,s.default)(o)||(0,a.default)()};var l=n(e("6005")),i=n(e("db90")),s=n(e("06c5")),a=n(e("3427"));function n(o){return o&&o.__esModule?o:{default:o}}},3427:function(o,t,e){"use strict";e("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e("d9e2"),e("d401")},"36d9":function(o,t,e){"use strict";e("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={op:"subscribe",args:[{channel:"tickers",instId:"BTC-USDT"},{channel:"tickers",instId:"ETH-USDT"},{channel:"tickers",instId:"DOGE-USDT"},{channel:"tickers",instId:"LTC-USDT"},{channel:"tickers",instId:"ETC-USDT"},{channel:"tickers",instId:"LINK-USDT"},{channel:"tickers",instId:"FIL-USDT"},{channel:"tickers",instId:"LOOKS-USDT"},{channel:"tickers",instId:"FLOW-USDT"},{channel:"tickers",instId:"IMX-USDT"},{channel:"tickers",instId:"SAND-USDT"},{channel:"tickers",instId:"MATIC-USDT"},{channel:"tickers",instId:"BNB-USDT"},{channel:"tickers",instId:"SHIB-USDT"},{channel:"tickers",instId:"OKB-USDT"},{channel:"tickers",instId:"AR-USDT"},{channel:"tickers",instId:"DASH-USDT"}]}},"3bd4":function(o,t,e){"use strict";e("7a82");var l=e("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("a434"),e("e9c4"),e("a9e3"),e("c740");var i=l(e("2909")),s=l(e("36d9")),a=(l(e("8520")),{data:function(){return{colorType:2,colorRed:"#d93d57",colorGreen:"#11a876",showList:[],path:"wss://wsaws.okx.com:8443/ws/v5/public",socket:""}},onLoad:function(){var o=localStorage.getItem("localList");null!=o&&(o=JSON.parse(o),this.showList=o)},onShow:function(){this.socketInit()},onHide:function(){this.close()},methods:{chooseItem:function(o){console.log("长按",o)},touchMove:function(o){console.log("长按",o)},rowDrop:function(){var o=this,t=document.querySelector(".content");this.sortable=Sortable.create(t,{animation:300,handle:".item_box",onEnd:function(t){var e=t.oldIndex,l=t.newIndex,s=(0,i.default)(o.showList),a=s.splice(e,1);s.splice(l,0,a[0]),o.showList=[],o.$nextTick((function(){o.showList=s})),localStorage.setItem("showList",JSON.stringify(s))}})},socketInit:function(){var o=this;uni.closeSocket(),this.socket=uni.connectSocket({url:this.path,success:function(o){console.log("websocket正在连接...")}}),uni.onSocketOpen((function(t){console.log("WebSocket连接成功"),o.onSocketMessage(),o.send()}))},send:function(){var o=s.default;uni.sendSocketMessage({data:JSON.stringify(o)})},onSocketMessage:function(){var o=this;uni.onSocketMessage((function(t){var e=JSON.parse(t.data);o.setListData(e)}))},setListData:function(o){if(o.data){var t=Number(o.data[0].last),e=this.showList.findIndex((function(t){return t.symbol_okx==o.data[0].instId}));if(e>=0){1==this.colorType?0!=this.showList[e].price&&o.data[0].last>this.showList[e].price?(this.$set(this.showList[e],"color",this.colorGreen),this.$set(this.showList[e],"logoArrow","arrow-upward")):0!=this.showList[e].price&&o.data[0].last<this.showList[e].price&&(this.$set(this.showList[e],"color",this.colorRed),this.$set(this.showList[e],"logoArrow","arrow-downward")):2==this.colorType&&(0!=this.showList[e].price&&o.data[0].last>this.showList[e].price?(this.$set(this.showList[e],"color",this.colorRed),this.$set(this.showList[e],"logoArrow","arrow-upward")):0!=this.showList[e].price&&o.data[0].last<this.showList[e].price&&(this.$set(this.showList[e],"color",this.colorGreen),this.$set(this.showList[e],"logoArrow","arrow-downward")));var l=((o.data[0].last-o.data[0].sodUtc8)/o.data[0].sodUtc8*100).toFixed(2);this.$set(this.showList[e],"dayUp",l),this.$set(this.showList[e],"price",t)}}},close:function(){console.log("关闭websocket"),this.socket&&(uni.closeSocket(),this.socket="")}}});t.default=a},6005:function(o,t,e){"use strict";e("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(o){if(Array.isArray(o))return(0,l.default)(o)};var l=function(o){return o&&o.__esModule?o:{default:o}}(e("6b75"))},8520:function(o,t,e){"use strict";e("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=[{symbol:"BTC",symbol_okx:"BTC-USDT",logo:"BTC120.png",value:"BTC-USDT",label:"BTC-USDT",price:0,color:"black",logoArrow:"null",dayUp:0},{symbol:"ETH",symbol_okx:"ETH-USDT",logo:"ETH120.png",value:"ETH-USDT",label:"ETH-USDT",price:0,color:"black",logoArrow:"null",dayUp:0},{symbol:"DOGE",symbol_okx:"DOGE-USDT",logo:"DOGE120.png",value:"DOGE-USDT",label:"DOGE-USDT",price:0,color:"black",logoArrow:"null",dayUp:0},{symbol:"LTC",symbol_okx:"LTC-USDT",logo:"LTC120.png",value:"LTC-USDT",label:"LTC-USDT",price:0,color:"black",logoArrow:"null",dayUp:0},{symbol:"ETC",symbol_okx:"ETC-USDT",logo:"ETC120.png",value:"ETC-USDT",label:"ETC-USDT",price:0,color:"black",logoArrow:"null",dayUp:0},{symbol:"LINK",symbol_okx:"LINK-USDT",logo:"LINK120.png",value:"LINK-USDT",label:"LINK-USDT",price:0,color:"black",logoArrow:"null",dayUp:0},{symbol:"FIL",symbol_okx:"FIL-USDT",logo:"FIL120.png",value:"FIL-USDT",label:"FIL-USDT",price:0,color:"black",logoArrow:"null",dayUp:0},{symbol:"MATIC",symbol_okx:"MATIC-USDT",logo:"MATIC120.png",value:"MATIC-USDT",label:"MATIC-USDT",price:0,color:"black",logoArrow:"null",dayUp:0},{symbol:"FLOW",symbol_okx:"FLOW-USDT",logo:"FLOW120.png",value:"FLOW-USDT",label:"FLOW-USDT",price:0,color:"black",logoArrow:"null",dayUp:0},{symbol:"IMX",symbol_okx:"IMX-USDT",logo:"IMX120.png",value:"IMX-USDT",label:"IMX-USDT",price:0,color:"black",logoArrow:"null",dayUp:0},{symbol:"SAND",symbol_okx:"SAND-USDT",logo:"SAND120.png",value:"SAND-USDT",label:"SAND-USDT",price:0,color:"black",logoArrow:"null",dayUp:0},{symbol:"LOOKS",symbol_okx:"LOOKS-USDT",logo:"LOOKS120.png",value:"LOOKS-USDT",label:"LOOKS-USDT",price:0,color:"black",logoArrow:"null",dayUp:0},{symbol:"BNB",symbol_okx:"BNB-USDT",logo:"BNB.png",value:"BNB-USDT",label:"BNB-USDT",price:0,color:"black",logoArrow:"null",dayUp:0},{symbol:"OKB",symbol_okx:"OKB-USDT",logo:"OKB.png",value:"OKB-USDT",label:"OKB-USDT",price:0,color:"black",logoArrow:"null",dayUp:0},{symbol:"SHIB",symbol_okx:"SHIB-USDT",logo:"SHIB.png",value:"SHIB-USDT",label:"SHIB-USDT",price:0,color:"black",logoArrow:"null",dayUp:0},{symbol:"AR",symbol_okx:"AR-USDT",logo:"AR.png",value:"AR-USDT",label:"AR-USDT",price:0,color:"black",logoArrow:"null",dayUp:0},{symbol:"DASH",symbol_okx:"DASH-USDT",logo:"DASH.png",value:"DASH-USDT",label:"DASH-USDT",price:0,color:"black",logoArrow:"null",dayUp:0}]},a4e5:function(o,t,e){var l=e("166d");l.__esModule&&(l=l.default),"string"===typeof l&&(l=[[o.i,l,""]]),l.locals&&(o.exports=l.locals);var i=e("4f06").default;i("a54e42aa",l,!0,{sourceMap:!1,shadowMode:!1})},b5ba:function(o,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return s})),e.d(t,"a",(function(){return l}));var l={uIcon:e("ec95").default},i=function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("v-uni-view",{staticClass:"content"},o._l(o.showList,(function(t){return e("v-uni-view",{staticClass:"item_box"},[e("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[e("v-uni-image",{staticClass:"logo",attrs:{mode:"widthFix",src:"/static/"+t.logo}}),e("v-uni-view",{staticStyle:{"font-size":"10rpx",color:"gray"}},[o._v(o._s(t.symbol))])],1),e("v-uni-view",{staticClass:"price_box"},[e("v-uni-view",{staticStyle:{display:"flex","align-items":"center"},style:{color:t.color}},[e("v-uni-text",{staticClass:"price_text"},[o._v("$"+o._s(t.price))]),e("u-icon",{directives:[{name:"show",rawName:"v-show",value:t.logoArrow,expression:"item.logoArrow"}],staticStyle:{"margin-left":"0upx"},attrs:{name:t.logoArrow,size:"12"}})],1),e("v-uni-view",{staticClass:"tab_box",style:{color:t.dayUp>=0?"#d93d57":"#11a876"}},[o._v(o._s(t.dayUp)+" %")])],1),e("v-uni-view"),e("v-uni-view",{staticClass:"float_box"},[t.costPrice>0?e("v-uni-view",[o._v("成本价："+o._s(t.costPrice))]):o._e(),t.marginPrice>0?e("v-uni-view",[o._v("爆仓价："+o._s(t.marginPrice))]):o._e()],1)],1)})),1)},s=[]},db90:function(o,t,e){"use strict";e("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(o){if("undefined"!==typeof Symbol&&null!=o[Symbol.iterator]||null!=o["@@iterator"])return Array.from(o)},e("a4d3"),e("e01a"),e("d3b7"),e("d28b"),e("3ca3"),e("ddb0"),e("a630")},e81b:function(o,t,e){"use strict";e.r(t);var l=e("b5ba"),i=e("14f1");for(var s in i)["default"].indexOf(s)<0&&function(o){e.d(t,o,(function(){return i[o]}))}(s);e("1aa5");var a=e("f0c5"),n=Object(a["a"])(i["default"],l["b"],l["c"],!1,null,"98b4715c",null,!1,l["a"],void 0);t["default"]=n.exports}}]);