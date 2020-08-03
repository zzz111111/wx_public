!function (e, n) { "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (e = e || self).uni = n(); window.uni = n(); }(this, function () { "use strict"; function i(e, n) { var i = { options: { timestamp: +new Date }, name: e, arg: n }; if (window.__dcloud_weex_postMessage || window.__dcloud_weex_) { if ("postMessage" === e) { var t = { data: [n] }; return window.__dcloud_weex_postMessage ? window.__dcloud_weex_postMessage(t) : window.__dcloud_weex_.postMessage(JSON.stringify(t)) } var o = { type: c, args: { data: i, webviewIds: w } }; window.__dcloud_weex_postMessage ? window.__dcloud_weex_postMessageToService(o) : window.__dcloud_weex_.postMessageToService(JSON.stringify(o)) } if (!window.plus) return window.parent.postMessage({ type: c, data: i, pageId: "" }, "*"); if (0 === w.length) { var a = plus.webview.currentWebview(); if (!a) throw new Error("plus.webview.currentWebview() is undefined"); var d = a.parent(), r = ""; r = d ? d.id : a.id, w.push(r) } if (plus.webview.getWebviewById(u)) plus.webview.postMessageToUniNView({ type: c, args: { data: i, webviewIds: w } }, u); else { var s = JSON.stringify(i); plus.webview.getLaunchWebview().evalJS('UniPlusBridge.subscribeHandler("'.concat(c, '",').concat(s, ",").concat(JSON.stringify(w), ");")) } } var w = [], u = "__uniapp__service", c = "WEB_INVOKE_APPSERVICE", n = { navigateTo: function (e) { var n = (0 < arguments.length && void 0 !== e ? e : {}).url; i("navigateTo", { url: encodeURI(n) }) }, navigateBack: function (e) { var n = (0 < arguments.length && void 0 !== e ? e : {}).delta; i("navigateBack", { delta: parseInt(n) || 1 }) }, switchTab: function (e) { var n = (0 < arguments.length && void 0 !== e ? e : {}).url; i("switchTab", { url: encodeURI(n) }) }, reLaunch: function (e) { var n = (0 < arguments.length && void 0 !== e ? e : {}).url; i("reLaunch", { url: encodeURI(n) }) }, redirectTo: function (e) { var n = (0 < arguments.length && void 0 !== e ? e : {}).url; i("redirectTo", { url: encodeURI(n) }) }, getEnv: function (e) { window.plus ? e({ plus: !0 }) : e({ h5: !0 }) }, postMessage: function (e) { i("postMessage", (0 < arguments.length && void 0 !== e ? e : {}).data || {}) } }, t = /uni-app/i.test(navigator.userAgent), o = /complete|loaded|interactive/; var a = window.my && -1 < navigator.userAgent.indexOf("AlipayClient"); var d = window.swan && window.swan.webView && /swan/i.test(navigator.userAgent); var r = window.qq && window.qq.miniProgram && /QQ/i.test(navigator.userAgent) && /miniProgram/i.test(navigator.userAgent); var s = window.tt && window.tt.miniProgram && /toutiaomicroapp/i.test(navigator.userAgent); var g = window.wx && window.wx.miniProgram && /micromessenger/i.test(navigator.userAgent) && /miniProgram/i.test(navigator.userAgent); for (var e, v = function () { window.UniAppJSBridge = !0, document.dispatchEvent(new CustomEvent("UniAppJSBridgeReady", { bubbles: !0, cancelable: !0 })) }, p = [function (e) { if (t) return window.__dcloud_weex_postMessage || window.__dcloud_weex_ ? document.addEventListener("DOMContentLoaded", e) : window.plus && o.test(document.readyState) ? setTimeout(e, 0) : document.addEventListener("plusready", e), n }, function (e) { if (g) return window.WeixinJSBridge && window.WeixinJSBridge.invoke ? setTimeout(e, 0) : document.addEventListener("WeixinJSBridgeReady", e), window.wx.miniProgram }, function (e) { if (r) return window.QQJSBridge && window.QQJSBridge.invoke ? setTimeout(e, 0) : document.addEventListener("QQJSBridgeReady", e), window.qq.miniProgram }, function (e) { if (a) { document.addEventListener("DOMContentLoaded", e); var n = window.my; return { navigateTo: n.navigateTo, navigateBack: n.navigateBack, switchTab: n.switchTab, reLaunch: n.reLaunch, redirectTo: n.redirectTo, postMessage: n.postMessage, getEnv: n.getEnv } } }, function (e) { if (d) return document.addEventListener("DOMContentLoaded", e), window.swan.webView }, function (e) { if (s) return document.addEventListener("DOMContentLoaded", e), window.tt.miniProgram }, function (e) { return document.addEventListener("DOMContentLoaded", e), n }], l = 0; l < p.length && !(e = p[l](v)); l++); e = e || {}; var f = "undefined" != typeof uni ? uni : {}; if (!f.navigateTo) for (var _ in e) e.hasOwnProperty(_) && (f[_] = e[_]); return f.webView = e, f });


!function (name, definition) {
  //检测上下文环境是否为AMD或CMD
  var hasDefine = typeof define === 'function';
  //检查上下文环境是否为Node
  var hasExports = typeof module !== 'undefined' && module.exports;
  if (hasDefine) {
    //AMD环境或CMD环境
    define(definition);
  } else if (hasExports) {
    //定义为普通Node模块
    module.exports = definition();
  } else {
    //将模块的执行结果挂在window变量中，在浏览器中this指向window对象
    this[name] = definition();
  }
}('HL', function () {
  /**
   * @author 移动
   * @version version1.0.1
   * @updateDate 2020-4-16
   */
  console.log('JSSDK1.0.1 init...');
  // 只不过此时要让存储队列的变量变成不可访问的话，就有点不好做了，不过也不用太担心这种情况，毕竟自己构建的逻辑自己还是能遵守
  var isReady = 'pending'; // pending认证中 ok可以了
  var readyCallback = null;
  // 注入sdk config能力列表
  var config = ['mail', 'chooseImage', 'updateTitle', 'previewImage', 'scrollBody', 'backHome', 'getUserInfo', 'getLocalStorage', 'getSessionStorage', 'writeAutograph', 'getAccessToken', 'getRecord', 'scanCode', 'closeWindow', 'previewFile'];

  document.addEventListener('UniAppJSBridgeReady', function () {
    // 此时API可以正常使用了
    isReady = 'ok';
    readyCallback && readyCallback();
    readyCallback = null;
  });

  function getUrlParams(url) {
    var temp1 = url.split('?');
    if (!temp1[1]) return {};
    var pram = temp1[1];
    var keyValue = pram.split('&');
    var obj = {};
    for (var i = 0; i < keyValue.length; i++) {
      var item = keyValue[i].split('=');
      var key = item[0];
      var value = item[1];
      obj[key] = value;
    }
    return obj;
  }

  var obj = getUrlParams(window.location.href);
  // 此值为 app / h5
  if (!window.sessionStorage.getItem('GETENV')) {
    if (obj.env) {
      if (obj.env.indexOf('h5') > -1) {
        window.sessionStorage.setItem('GETENV', 'h5');
      } else if (obj.env.indexOf('app') > -1) {
        window.sessionStorage.setItem('GETENV', 'app');
      }
    } else {
      window.sessionStorage.setItem('GETENV', 'h5');
    }
  }

  function Observer() {
    // 对象来存储订阅部分，这样可以分开为多个队列订阅
    this.QUEUE = {};
  }

  //订阅 -- 订阅的参数变成两个，这样不仅仅可以存入执行的函数，还是能存入订阅的类别信息
  Observer.prototype.subscribe = function (type, fn) {
    // 如果第一次订阅，初始化类别队列
    // if (!this.QUEUE[type]) {
    //   this.QUEUE[type] = [];
    // }
    // 现在不能取消订阅，所以只要覆盖就可以了
    // this.QUEUE[type] = [];
    // console.log('订阅了' + type);
    // this.QUEUE[type].push(fn);

    if(!this.QUEUE[type]){
      this.QUEUE[type] = [];
    }
    this.QUEUE[type].push(fn);
  };

  Observer.prototype.publish = function (type, msg) {
    // console.log('子文件开始发布 -- ' + type, this.QUEUE);
    // 因为一个id只能订阅一次，所以在这里发布之后就把它删除掉
    if (this.QUEUE[type]) {
      for (var i = 0; i < this.QUEUE[type].length; i++) {
        this.QUEUE[type][i] && this.QUEUE[type][i](msg);
      }
    }
    try {
      delete this.QUEUE[type];
    } catch (e) { }
  };

  var observer = new Observer();
  var HL = function () {
    this.parent = window.parent;
  };

  HL.prototype.sendMessage = function (sdkObj) {
    if (!sdkObj.api) {
      throw new Error('请传入正确的api!!');
    }
    if (typeof sdkObj.data === 'function') {
      throw new Error('data不允许是函数');
    }

    // 这里判断是什么环境，如果是在app下 使用 uni
    if (window.sessionStorage.getItem('GETENV') === 'app') {
      // 可能有多个回调函数
      window.CALLBACK = function (res) {
        if (res.api) {
          observer.publish(res.api, res.data);
        }
      };

      observer.subscribe(sdkObj.api, sdkObj.success);
      uni.postMessage({
        data: {
          api: sdkObj.api,
          data: sdkObj.data,
        }
      });
    } else {
      // 此处是钉钉 企业微信环境
      observer.subscribe(sdkObj.api, sdkObj.success);
      this.parent.postMessage({
        api: sdkObj.api,
        data: sdkObj.data
      }, "*");
    }
  };

  // 根据config列表注册config
  for (var i = 0, length = config.length; i < length; i++) {
    HL.prototype[config[i]] = HL.prototype.sendMessage;
  }

  HL.prototype.ready = function (callback) {
    if (window.sessionStorage.getItem('GETENV') === 'h5') {
      isReady = 'ok';
      callback();
    } else {
      if (isReady === 'ok') {
        callback();
      } else {
        readyCallback = callback; // 回调准备
      }
    }
  };

  window.addEventListener('message', function (res) {
    // 发布消息
    if (res.data.api) {
      // console.log('终极返回值', res);
      // alert(res.data.api);
      observer.publish(res.data.api, res.data.data);
    }
  });

  // window.MXBACK = function (res) {
  //   // console.log('监听到返回键了', res.url);
  //   // var url = encodeURI(res.url)
  //   // var href = window.location.href;
  //   // console.log(url)
  //   // console.log(href)
  //   // console.log(url != href);
  //   // console.log('地址是什么', window.location.href);
  //   var obj = getUrlParams(window.location.href);
  //   console.log(obj);
  //   if (obj.mxhome === 'true') {
  //     uni.navigateBack();
  //   } else {
  //     window.history.go(-1);
  //   }
  // };
  // window.HL = new HL();
  return new HL();
});