(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-userInfo"],{4697:function(e,t,i){var n=i("ec2c");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("550995d4",n,!0,{sourceMap:!1,shadowMode:!1})},"552a":function(e,t,i){"use strict";i.r(t);var n=i("e22f"),a=i.n(n);for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);t["default"]=a.a},c7ca:function(e,t,i){"use strict";i.r(t);var n=i("da32"),a=i("552a");for(var s in a)"default"!==s&&function(e){i.d(t,e,function(){return a[e]})}(s);i("e0ec");var o=i("2877"),r=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"d2a7684e",null);t["default"]=r.exports},da32:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"user-info"},[i("v-uni-view",{staticClass:"ui-header"},[i("HeaderTitle",{attrs:{content:"编辑个人信息",color:"#000"}})],1),i("v-uni-view",{staticClass:"ui-wrap"},[i("v-uni-view",{staticClass:"ui-com-wrap ui-one"},[i("v-uni-view",{staticClass:"ui-com box-shadow"},[i("v-uni-view",{staticClass:"ui-com-item"},[i("v-uni-view",{staticClass:"ui-com-item-des"},[e._v("姓名")]),i("v-uni-view",{staticClass:"ui-com-input"},[i("v-uni-input",{attrs:{type:"text",placeholder:"请输入姓名"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1)],1),i("v-uni-view",{staticClass:"ui-com-item"},[i("v-uni-view",{staticClass:"ui-com-item-des"},[e._v("性别")]),i("v-uni-view",{staticClass:"ui-com-con",on:{click:function(t){t=e.$handleEvent(t),e.selectPicker("sex")}}},[i("v-uni-text",[e._v(e._s(e.sex||"请选择"))]),i("v-uni-image",{attrs:{src:"../../static/img/address/arrow-right.png",mode:""}})],1)],1),i("v-uni-view",{staticClass:"ui-com-item"},[i("v-uni-view",{staticClass:"ui-com-item-des"},[e._v("生日")]),i("v-uni-view",{staticClass:"ui-com-con"},[i("v-uni-view",{staticClass:"uni-list-cell-db"},[i("v-uni-picker",{attrs:{mode:"date",value:e.defaultDate,start:"1910-01-01",end:e.endDate,fields:"day"},on:{change:function(t){t=e.$handleEvent(t),e.bindTimeChange(t)}}},[i("v-uni-view",{staticClass:"uni-input"},[e._v(e._s(e.birthday||"请选择"))])],1)],1),i("v-uni-image",{attrs:{src:"../../static/img/address/arrow-right.png",mode:""}})],1)],1)],1)],1),i("v-uni-view",{staticClass:"ui-com-wrap ui-one"},[i("v-uni-view",{staticClass:"ui-com box-shadow"},[i("v-uni-view",{staticClass:"ui-com-item"},[i("v-uni-view",{staticClass:"ui-com-item-des"},[e._v("电话号码")]),i("v-uni-view",{staticClass:"ui-com-input"},[i("v-uni-input",{attrs:{type:"text",placeholder:"请输入11位电话号码"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1)],1),e.responseUserInfo.phone!=e.phone||""==e.responseUserInfo.phone?i("v-uni-view",{staticClass:"ui-com-item ui-com-phone"},[i("v-uni-view",{staticClass:"ui-com-item-des"},[e._v("验证码")]),i("v-uni-view",{staticClass:"ui-com-input"},[i("v-uni-input",{attrs:{type:"text",placeholder:"请输入短信验证码"},model:{value:e.phoneCheckCode,callback:function(t){e.phoneCheckCode=t},expression:"phoneCheckCode"}})],1),i("v-uni-view",{staticClass:"ui-com-phone-getcode",on:{click:function(t){t=e.$handleEvent(t),e.getPhoneCode(t)}}},[e._v(e._s(e.phoneCodeTips)+" "+e._s(e.isSecond?"s":""))])],1):e._e()],1)],1),i("v-uni-view",{staticClass:"ui-com-wrap ui-one"},[i("v-uni-view",{staticClass:"ui-com box-shadow"},[i("v-uni-view",{staticClass:"ui-com-item"},[i("v-uni-view",{staticClass:"ui-com-item-des"},[e._v("收入")]),i("v-uni-view",{staticClass:"ui-com-con",on:{click:function(t){t=e.$handleEvent(t),e.selectPicker("monthMoney")}}},[i("v-uni-text",[e._v(e._s(e.monthMoney||"请选择"))]),i("v-uni-image",{attrs:{src:"../../static/img/address/arrow-right.png",mode:""}})],1)],1),i("v-uni-view",{staticClass:"ui-com-item"},[i("v-uni-view",{staticClass:"ui-com-item-des"},[e._v("学历")]),i("v-uni-view",{staticClass:"ui-com-con",on:{click:function(t){t=e.$handleEvent(t),e.selectPicker("education")}}},[i("v-uni-text",[e._v(e._s(e.education||"请选择"))]),i("v-uni-image",{attrs:{src:"../../static/img/address/arrow-right.png",mode:""}})],1)],1),i("v-uni-view",{staticClass:"ui-com-item"},[i("v-uni-view",{staticClass:"ui-com-item-des"},[e._v("购烟地分类")]),i("v-uni-view",{staticClass:"ui-com-con",on:{click:function(t){t=e.$handleEvent(t),e.selectPicker("buySmokeLocation")}}},[i("v-uni-text",[e._v(e._s(e.buySmokeLocation||"请选择"))]),i("v-uni-image",{attrs:{src:"../../static/img/address/arrow-right.png",mode:""}})],1)],1)],1)],1),i("v-uni-view",{staticClass:"ui-com-wrap ui-one"},[i("v-uni-view",{staticClass:"ui-com box-shadow"},[i("v-uni-view",{staticClass:"ui-com-item"},[i("v-uni-view",{staticClass:"ui-com-item-des"},[e._v("单位类别")]),i("v-uni-view",{staticClass:"ui-com-con",on:{click:function(t){t=e.$handleEvent(t),e.selectPicker("componeyType")}}},[i("v-uni-text",[e._v(e._s(e.componeyType||"请选择"))]),i("v-uni-image",{attrs:{src:"../../static/img/address/arrow-right.png",mode:""}})],1)],1),i("v-uni-view",{staticClass:"ui-com-item"},[i("v-uni-view",{staticClass:"ui-com-item-des"},[e._v("职业/岗位")]),i("v-uni-view",{staticClass:"ui-com-input"},[i("v-uni-input",{attrs:{type:"text",placeholder:"请输入职业/岗位名称"},model:{value:e.position,callback:function(t){e.position=t},expression:"position"}})],1)],1)],1)],1),i("v-uni-view",{staticClass:"ui-com-wrap ui-one"},[i("v-uni-view",{staticClass:"ui-com box-shadow"},[i("v-uni-view",{staticClass:"ui-com-item"},[i("v-uni-view",[e._v("查看/编辑收货地址")]),i("v-uni-view",{staticClass:"ui-com-con",on:{click:function(t){t=e.$handleEvent(t),e.goAddress(t)}}},[i("v-uni-text",[e._v("去编辑")]),i("v-uni-image",{attrs:{src:"../../static/img/address/arrow-right.png",mode:""}})],1)],1)],1)],1),i("v-uni-view",{staticClass:"ui-submit-btn-wrap"},[i("v-uni-view",{staticClass:"ui-submit-btn"},[i("v-uni-view",{staticClass:"ui-submit-btn-l"},[i("v-uni-text",{staticClass:"des"},[e._v("完成进度")]),i("v-uni-view",{staticClass:"progress"},[e._v(e._s(e.progress+"%"))])],1),i("v-uni-view",{staticClass:"ui-submit-btn-r",on:{click:function(t){t=e.$handleEvent(t),e.saveUserInfo(t)}}},[e._v("保存个人信息")])],1)],1)],1),i("mpvue-picker",{ref:"mpvuePicker",attrs:{mode:e.mode,pickerValueDefault:e.pickerValueDefault,pickerValueArray:e.selectDataNow},on:{onChange:function(t){t=e.$handleEvent(t),e.onChange(t)},onConfirm:function(t){t=e.$handleEvent(t),e.onConfirm(t)},onCancel:function(t){t=e.$handleEvent(t),e.onCancel(t)}}})],1)},a=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a})},e0ec:function(e,t,i){"use strict";var n=i("4697"),a=i.n(n);a.a},e22f:function(e,t,i){"use strict";var n=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("7f7f"),i("c5f6"),i("96cf");var a=n(i("3b8d")),s=n(i("e44a")),o=n(i("8ae8")),r=n(i("770e")),u={data:function(){var e=this.getDate({format:!0}),t=this.$utils.formatDate2(new Date),i=new Date,n="".concat(i.getFullYear()-20,"-01-01");return{name:"",sex:"",birthday:"",phone:"",phoneCheckCode:"",monthMoney:"",education:"",buySmokeLocation:"",componeyType:"",position:"",progress:0,phoneCodeTips:"获取验证码",isSecond:!1,timer:null,responseUserInfo:{},mode:"selector",selectType:"",selectDataNow:[],pickerValueArrayJSON:{sex:[{label:"男",value:1},{label:"女",value:2},{label:"保密",value:3}],monthMoney:[{label:"小于3000",value:0},{label:"3000-5000",value:1},{label:"5000-10000",value:2},{label:"10000-15000",value:3},{label:"15000-20000",value:4},{label:"大于20000",value:5}],education:[{label:"大专及以下学历",value:0},{label:"本科学历",value:1},{label:"研究生学历",value:2},{label:"博士学历",value:3}],buySmokeLocation:[{label:"超市",value:0},{label:"常住",value:1},{label:"互联网",value:2}],componeyType:[{label:"媒体/文化传媒/公关",value:0},{label:"教育",value:1},{label:"生活服务",value:3},{label:"服装/纺织/皮革",value:4},{label:"快速消费品",value:5}]},pickerValueDefault:[1],date:e,endDate:t,defaultDate:n}},onLoad:function(){this.getUserInfo()},onUnload:function(){clearInterval(this.timer),this.isSecond=!1},methods:{bindTimeChange:function(e){this.birthday=e.detail.value,console.log("选择日期")},getDate:function(e){var t=new Date,i=t.getFullYear(),n=t.getMonth()+1,a=t.getDate();return"start"===e?i-=60:"end"===e&&(i+=2),n=n>9?n:"0"+n,a=a>9?a:"0"+a,"".concat(i,"-").concat(n,"-").concat(a)},getPhoneCode:function(){var e=(0,a.default)(regeneratorRuntime.mark(function e(){var t,i,n,a=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=this,this.$utils.getOpenid(),this.$utils.regPhone(t.phone)){e.next=4;break}return e.abrupt("return",this.$utils.showToast("请输入正确格式的手机号码"));case 4:return e.next=6,this.$api.phone.sendPhoneCode({phone:t.phone});case 6:i=e.sent,75200===i.statusCode?(this.$utils.showToast("验证码已发送至手机"),this.phoneCodeTips=i.interval,this.isSecond=!0,t.timer=setInterval(function(){a.phoneCodeTips--,a.phoneCodeTips<=0&&(clearInterval(t.timer),t.phoneCodeTips="获取验证码",t.isSecond=!1)},1e3)):75400===i.statusCode?(n=Math.ceil(i.interval-Number(i.time)),console.log(n),this.$utils.showToast("还需要".concat(n,"s继续获取验证码")),t.phoneCodeTips=n,this.isSecond=!0,t.phoneCodeTips--,t.timer=setInterval(function(){a.phoneCodeTips--,a.phoneCodeTips<=0&&(clearInterval(t.timer),t.phoneCodeTips="获取验证码",t.isSecond=!1)},1e3)):this.$utils.showToast("服务器繁忙，请稍后再试");case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getUserInfo:function(){var e=(0,a.default)(regeneratorRuntime.mark(function e(){var t,i,n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=this,i=this.$utils.getOpenid(),i){e.next=4;break}return e.abrupt("return",this.$utils.showToast("openid获取失败"));case 4:return e.next=6,this.$api.user.getPerfectUserInfo({openid:i});case 6:if(n=e.sent,75500!==n.statusCode){e.next=9;break}return e.abrupt("return",this.$utils.showToast("服务异常，请稍后重试"));case 9:if(console.log("获取到的用户信息接口"),console.log(n),75200!==n.statusCode){e.next=28;break}if(null!=n.result){e.next=15;break}return this.responseUserInfo={},e.abrupt("return");case 15:a=n.result,this.responseUserInfo=a,t.name=a.name,0==a.gender?t.sex="保密":1==a.gender?t.sex="男":2==a.gender&&(t.sex="女"),t.defaultDate=a.age||"",this.birthday=a.age||"",t.phone=a.phone||"",t.monthMoney=a.income||"",t.education=a.education||"",t.buySmokeLocation=a.address||"",t.componeyType=a.company||"",t.position=a.position||"",t.progress=a.progress||"0";case 28:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),saveUserInfo:function(){var e=(0,a.default)(regeneratorRuntime.mark(function e(){var t,i,n,a,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=this,i=this.$utils.getOpenid(),i){e.next=4;break}return e.abrupt("return",this.$utils.showToast("openid获取失败"));case 4:if(this.responseUserInfo.phone==t.phone||""==t.phone&&null==this.responseUserInfo.phone){e.next=25;break}if(this.$utils.regPhone(t.phone)){e.next=7;break}return e.abrupt("return",this.$utils.showToast("手机号码格式错误"));case 7:if(this.phoneCheckCode){e.next=9;break}return e.abrupt("return",this.$utils.showToast("请输入手机验证码"));case 9:return e.next=11,this.$api.phone.authPhoneCode({phone:t.phone,code:t.phoneCheckCode});case 11:if(n=e.sent,75200!==n.statusCode){e.next=16;break}console.log("手机验证码验证成功"),e.next=25;break;case 16:if(71600!==n.statusCode){e.next=20;break}return e.abrupt("return",this.$utils.showToast("验证码已过期，请重新获取并验证码"));case 20:if(75400!==n.statusCode){e.next=24;break}return e.abrupt("return",this.$utils.showToast("验证失败,请检查验证码输入是否正确"));case 24:return e.abrupt("return",this.$utils.showToast("验证失败，错误码".concat(n.statusCode)));case 25:return a="",a="男"==t.sex?1:"女"==t.sex?2:0,e.next=29,this.$api.user.perfectUserInfo({openid:i,name:t.name,gender:a,age:t.birthday,phone:t.phone,income:t.monthMoney,education:t.education,address:t.buySmokeLocation,company:t.componeyType,position:t.position});case 29:if(s=e.sent,75500!==s.statusCode){e.next=32;break}return e.abrupt("return",this.$utils.showToast("服务异常，请稍后重试"));case 32:75200===s.statusCode&&(2===s.status?(this.$utils.showToast("首次编辑个人信息任务完成！获得"+s.integral+"积分"),t.progress=s.progress,setTimeout(function(){uni.navigateBack()},2e3)):(t.$utils.showToast("用户信息完善成功"),t.progress=s.progress,setTimeout(function(){uni.navigateBack()},500)));case 33:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),goAddress:function(){uni.navigateTo({url:"/pages/address/buyLocation"})},checkUserInfo:function(){},isCheckValueNull:function(e){return!e},selectPicker:function(e){this.selectDataNow=this.pickerValueArrayJSON[e],this.selectType=e,this.$refs.mpvuePicker.show()},onConfirm:function(e){console.log("点击了确定"),this[this.selectType]=e.label,console.log(e)},onChange:function(e){this[this.selectType]=e.label,console.log(e)},onCancel:function(e){console.log(e)}},components:{HeaderTitle:s.default,ComBtn:o.default,mpvuePicker:r.default}};t.default=u},ec2c:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".user-info[data-v-d2a7684e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;font-size:%?28?%}.ui-header[data-v-d2a7684e]{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.ui-wrap[data-v-d2a7684e]{padding-top:%?10?%;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;overflow:scroll}.ui-com-wrap[data-v-d2a7684e]{margin:%?20?% %?25?% 0 %?20?%}.ui-com-wrap[data-v-d2a7684e]:first-child{margin-top:0}.ui-com[data-v-d2a7684e]{padding-left:%?30?%;border-radius:%?8?%}\r\n/* 手机验证码 */.ui-com-phone[data-v-d2a7684e]{position:relative}.ui-com-phone-getcode[data-v-d2a7684e]{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:%?230?%;height:%?33?%;border-left:1px solid #eee;line-height:%?33?%;text-align:center;color:#0fb67f}\r\n/* 手机 */.ui-com-item[data-v-d2a7684e]{height:%?120?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding-right:%?18?%;border-bottom:1px solid #ccc;vertical-align:top}.ui-com-item[data-v-d2a7684e]:last-child{border-bottom:none}.ui-com-item-des[data-v-d2a7684e]{width:%?150?%;color:#333}.ui-com-input[data-v-d2a7684e]{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}.ui-com-input uni-input[data-v-d2a7684e]{width:100%;\r\n\t/* 修改代码 */text-align:right;-webkit-box-sizing:border-box;box-sizing:border-box;padding-right:%?10?%}.ui-com-con[data-v-d2a7684e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center\r\n\t/* padding-right: 30upx; */}.ui-com-con uni-image[data-v-d2a7684e]{width:%?30?%;height:%?30?%;margin-left:%?10?%}.ui-save[data-v-d2a7684e]{width:%?702?%;margin:auto;padding:%?65?% 0 %?35?% 0}.ui-edit-add[data-v-d2a7684e]{margin:%?20?% %?25?% 0;padding-left:%?30?%;height:%?100?%;line-height:%?100?%}\r\n/* 保存按钮 */.ui-submit-btn-wrap[data-v-d2a7684e]{margin:0 %?25?%;padding:%?65?% 0 %?35?% 0}.ui-submit-btn[data-v-d2a7684e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.ui-submit-btn-l .des[data-v-d2a7684e]{color:#b5b5b5}.ui-submit-btn-l .progress[data-v-d2a7684e]{color:#fc8a22}.ui-submit-btn-r[data-v-d2a7684e]{-webkit-box-sizing:border-box;box-sizing:border-box;width:%?400?%;height:%?90?%;border-radius:%?8?%;font-size:%?32?%;line-height:%?90?%;text-align:center;background:#34cd9e;color:#fff}\r\n\r\n.ui-com-input uni-input[data-v-d2a7684e]{font-size:%?28?%}\r\n",""])}}]);