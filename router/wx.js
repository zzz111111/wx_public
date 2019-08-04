const Router = require('koa-router');
const wxLogic = require('../logic/wx.js');
const middleware = require('../module/middleware');
const router = new Router({
  prefix: '/wx'
});


// 验证接口域名服务器
router.get('/check_token', wxLogic.checkToken);
router.post('/check_token', middleware.analysisXML, wxLogic.analysisToken); // 解析XML消息

// 获取当前的access_token
router.get('/access_token', wxLogic.getAccess_token);

// 请求 jsapi 接口调用的签名字符串 signature
router.post('/signature', wxLogic.getSignature);

// 微信接口请求的auth2.0获取用户code去获取用户的openid
router.get('/auth', wxLogic.auth);

// 获取微信服务器Ip地址
router.get('/server_ip_list', wxLogic.getServerIpList);

// 自定义菜单查询接口
router.get('/menu_list', wxLogic.getMenuList);


router.get('/wx/token', async ctx => {
  ctx.body = "wx token";
});

module.exports = router;
