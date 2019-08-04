const config = require('../config/config');
const utils = require('../utils/utils');
const wxBase = require('../logic/wxBase');
const xml2js = require('xml2js');
const { __handleAPIRes, __mustValue, __handleRes } = require('../module/result');

/**
 * 验证URL接口
 */
exports.checkToken = async ctx => {
  try {
    console.log('验证接口服务器接口');
    // console.log('发送过来了');
    // console.log('get请求');
    // console.log(ctx.query);
    // console.log('post请求');
    // console.log(ctx.body);
    const { signature, timestamp, nonce, echostr } = ctx.query;
    // console.log(signature, timestamp, nonce, echostr);
    let sha1Str = utils.sha1(timestamp, nonce, config.wxConfig.Token);
    // console.log('加密后的结果');
    // console.log(sha1Str);
    // console.log('微信发送的字符串');
    // console.log(signature);
    // console.log('判断是否相等');
    // console.log(sha1Str === signature);
    if (sha1Str === signature) {
      console.log('校验成功');
      ctx.body = echostr;
    } else {
      console.log('校验失败');
      ctx.body = false;
    }
  } catch (e) {
    console.log(e);
    ctx.body = __handleAPIRes('服务器繁忙，请稍后再试', 500);
  }
};

/**
 * POST解析用户发送来的消息
 */
exports.analysisToken = async ctx => {
  try {
    console.log('消息数据');
    console.log("get请求的参数");
    console.log(ctx.query);
    let { signature, timestamp, nonce, openid, encrypt_type, msg_signature } = ctx.query;
    console.log('拿到的消息签名');
    console.log(signature, timestamp, nonce, openid, encrypt_type, msg_signature);

    console.log('post请求体');
    console.log(ctx.req.body);

    const xmlCon = ctx.req.body.xml;
    let { ToUserName, FromUserName, CreateTime, MsgType, Content, MsgId, Encrypt, MediaId } = xmlCon;
    // // 拿到加密字符串
    let encryptStr = ctx.req.body.xml.Encrypt[0];


    // 开发者计算签名
    let devMsgSignature = utils.sha1(config.wxConfig.Token, timestamp, nonce, encryptStr);
    if (devMsgSignature !== msg_signature) {
      // 如果不等于 则判断为不是微信发送过来的消息，
      console.log('不是微信发送的');
      return ctx.body = __handleAPIRes('error', 500);
    }
    console.log('是微信发送的');

    // 在此处解密秘密字符串


    // 根据发送的不同的消息 做不同的处理
    if (MsgType[0] === 'text') {
      console.log('文本消息');
      return ctx.body = wxBase.messageFormat({
        ToUserName: FromUserName[0],
        FromUserName: ToUserName[0],
        MsgType: 'text',
        Content: Content[0]
      });
    } else if (MsgType[0] === 'image') {
      console.log('图片消息');
      return ctx.body = wxBase.messageFormat({
        ToUserName: FromUserName[0],
        FromUserName: ToUserName[0],
        MsgType: 'image',
        MediaId: MediaId[0]
      });
    } else if (MsgType[0] === 'voice') {
      console.log('语音消息');
      return ctx.body = wxBase.messageFormat({
        ToUserName: FromUserName[0],
        FromUserName: ToUserName[0],
        MsgType: 'voice',
        MediaId: MediaId[0]
      });
    } else if (MsgType[0] === 'video') {
      // 回复视频消息
    } else if (MsgType[0] === 'music') {
      // 回复音乐消息
    } else if (MsgType[0] === 'news') {
      // 回复图文消息 想要增加更多拓展去消息中添加
      return ctx.body = wxBase.messageFormat({
        ToUserName: FromUserName[0],
        FromUserName: ToUserName[0],
        MsgType: 'news',
      });
    }

    ctx.body = "success";
  } catch (e) {
    console.log(e);
    ctx.body = __handleAPIRes('服务器繁忙，请稍后再试', 500);
  }
};

/**
 * 获取当前的access_token
 */
exports.getAccess_token = async ctx => {
  try {
    console.log('获取当前的access_token');
    ctx.body = __handleAPIRes({
      access_token: config.wxConfig.access_token
    });
  } catch (e) {
    console.log(e);
    ctx.body = __handleAPIRes('服务器繁忙，请稍后再试', 500);
  }
};

/**
 * 微信的auth2.0验证
 */
exports.auth = async ctx => {
  try {
    console.log('auth回调函数域名');
    // 1. 用户授权后获取code
    console.log('获取到的url请求');
    console.log(ctx.query);
    const { code, state } = ctx.query;
    console.log(code, state);

    // 2. 通过code换取 access_token
    let getAuthResult = await wxBase.getAuthorizationAccess_token(code);
    console.log('获取到的结果');
    console.log(getAuthResult);

    if (getAuthResult.errcode) {
      // 
      return ctx.body = __handleAPIRes('获取token失败');
    }

    const { access_token, refresh_token, openid, scope } = getAuthResult;
    console.log(access_token, refresh_token, openid, scope);


    // 3. 刷新access_token 如果需要


    // 4. 拉取用户信息(需scope为 snsapi_userinfo)
    let userInfoResult = await wxBase.gerUserInfoByOpenid({ access_token, openid });
    console.log('拉取到的用户信息为');
    console.log(userInfoResult);

    ctx.body = __handleAPIRes({
      msg: '获取用户信息成功',
      userInfo: userInfoResult
    });
    
  } catch (e) {
    console.log(e);
    ctx.body = __handleAPIRes('服务器繁忙，请稍后再试', 500);
  }
};

/**
 * 请求signature签名
 * @params {String} url 当前页面的网址 不包含#及其后面部分
 */
exports.getSignature = async ctx => {
  try {
    const { url } = ctx.request.body;
    console.log('获取jsapi签名接口');
    console.log(url);

    let __isUndefined = __mustValue({ url });
    if (__isUndefined) {
      return ctx.body = __handleAPIRes(__isUndefined);
    }
    let noncestr = utils.randomString(16);
    let timestamp = parseInt(Date.now() / 1000);

    let string = `jsapi_ticket=${config.wxConfig.jsapi_ticket}&noncestr=${noncestr}&timestamp=${timestamp}&url=${url}`;
    let signature = utils.sha1String(string);
    // console.log('加密后的signature为');
    // console.log(signature);
    ctx.body = __handleAPIRes({
      noncestr,
      timestamp,
      signature
    });
  } catch (e) {
    console.log(e);
    ctx.body = __handleAPIRes('服务器繁忙，请稍后再试', 500);
  }
};

/**
 * 获取微信服务列表
 */
exports.getServerIpList = async ctx => {
  try {
    console.log('获取微信服务器列表');
    let ipResult = await wxBase.getWxIpList();

    console.log('获取到的地址列表为');
    console.log(ipResult);
    ctx.body = __handleAPIRes(ipResult);
  } catch (e) {
    console.log(e);
    ctx.body = __handleAPIRes('服务器繁忙，请稍后再试', 500);
  }
};

/**
 * 自定义菜单查询
 */
exports.getMenuList = async ctx => {
  try {
    console.log('自定义菜单查询');
    let result = await wxBase.getMenu();
    console.log(result);
    ctx.body = __handleAPIRes(result);
  } catch (e) {
    console.log(e);
    ctx.body = __handleAPIRes('服务器繁忙，请稍后再试', 500);
  }
};
