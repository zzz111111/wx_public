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
router.get('/auth', wxLogic.authYN);

// 微信接口中通过openid换取用户信息的接口
router.get('/openid2user', wxLogic.openid2user);

// 微信接口UnionID机制获取用户信息
router.get('/openid2userunionid', wxLogic.openid2UnionUser);


// 获取微信服务器Ip地址
router.get('/server_ip_list', wxLogic.getServerIpList);

// 自定义菜单查询接口
router.get('/menu_list', wxLogic.getMenuList);

// 获取客服模板
router.get('/user_template', wxLogic.getTemplate);

// 测试使用postman上传数组
router.post('/test_arr', wxLogic.testArrary);

// 测试规则
router.get('/node_rules', wxLogic.nodeRules);

module.exports = router;
