(function () {
  console.log('子页面SDK初始化执行');
  // 只不过此时要让存储队列的变量变成不可访问的话，就有点不好做了，不过也不用太担心这种情况，毕竟自己构建的逻辑自己还是能遵守
  class Observer {
    constructor() {
      // 对象来存储订阅部分，这样可以分开为多个队列订阅
      this.QUEUE = {};
    }
    //订阅 -- 订阅的参数变成两个，这样不仅仅可以存入执行的函数，还是能存入订阅的类别信息
    subscribe(type, fn) {
      // 如果第一次订阅，初始化类别队列
      // if (!this.QUEUE[type]) {
      //   this.QUEUE[type] = [];
      // }
      // 现在不能取消订阅，所以只要覆盖就可以了
      this.QUEUE[type] = [];
      // console.log('订阅了' + type);
      this.QUEUE[type].push(fn);
    }

    publish(type, msg) {
      // console.log('子文件开始发布 -- ' + type, this.QUEUE);
      // 因为一个id只能订阅一次，所以在这里发布之后就把它删除掉
      this.QUEUE[type] && [...this.QUEUE[type]].forEach(item => {
        item(msg);
      });
      // console.log(this.QUEUE[type][0]);
      Reflect.deleteProperty(this.QUEUE, type);
      // console.log('执行完成之后,取消订阅', this.QUEUE);
    }
  }

  let observer = new Observer();
  let HL = function () {
    this.parent = window.parent;
  };

  // 预留config注册文件
  // HL.prototype.config = function (config) {
  //   console.log(config);
  // };

  HL.prototype.sendMessage = function (sdkObj) {
    if (!sdkObj.api) {
      throw new Error('请传入正确的api!!');
    }
    if (typeof sdkObj.data === 'function') {
      throw new Error('data不允许是函数');
    }
    observer.subscribe(sdkObj.api, sdkObj.success);
    this.parent.postMessage({
      api: sdkObj.api,
      data: sdkObj.data
    }, "*");
  };

  HL.prototype.mail = function (sdkObj) {
    this.sendMessage(sdkObj);
  };

  HL.prototype.chooseImage = function (sdkObj) {
    this.sendMessage(sdkObj);
  };
  HL.prototype.updateTitle = function (sdkObj) {
    this.sendMessage(sdkObj);
  };
  HL.prototype.previewImage = function (sdkObj) {
    this.sendMessage(sdkObj);
  };

  window.addEventListener('message', function (res) {
    // console.log(`******************这里是子页面的接收到的消息 start *************`);
    if (res.data.api) { // 发布自己想要完成的操作
      alert(res.data.api);
      observer.publish(res.data.api, res.data.data);
    }
    // console.log(`******************这里是子页面的接收到的消息 end *************`);
  });

  window.HL = new HL();
})();
