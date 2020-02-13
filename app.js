const Koa = require('koa');
const logger = require('koa-logger');
const koaBody = require('koa-body');
const koaStatic = require('koa-static');
// const httpProxy = require('http-proxy-middleware');
const app = new Koa();
const server = require('http').createServer(app.callback());
const path = require('path');
const config = require('./config/config');
const wxApi = require('./router/wx');
// const zfbApi = require('./router/zfb');
const wxBase = require('./logic//wxBase');
// const zfbBase = require("./zfb/zfbBase");

app.use(async (ctx, next) => {
  // 加上去了 解决 cors 跨域问题
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.set("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  ctx.set("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  if (ctx.method == "OPTIONS") ctx.status = 200;
  else await next();
});

app.use(logger());

app.use(koaBody({
  parsedMethods: ['POST', 'PUT', 'DELETE']
})); // 将 post 请求的 body 数据挂载到 ctx.request.body 上面

app.use(koaStatic(path.join(__dirname, 'public')));

// 初始化微信
wxBase.init();

// zfbBase.init();

// 接入微信API
app.use(wxApi.routes()).use(wxApi.allowedMethods());

// 接入支付宝API
// app.use(zfbApi.routes()).use(zfbApi.allowedMethods());


server.listen(`${config.port}`, () => {
  console.log(`${config.port}端口服务启动成功---`);
});


// var xml2js = require('xml2js');

// var obj = {name: "Super", Surname: "Man", age: 23};

// var builder = new xml2js.Builder();
// var xml = builder.buildObject(obj);
// console.log('转义的结果');
// console.log(xml);

