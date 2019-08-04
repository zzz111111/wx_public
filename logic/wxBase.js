/**
 * 初始化微信的服务接口
 */
const config = require('../config/config');
const axios = require('../module/axios');
const server = require('../app');


module.exports = {
  // 初始化微信服务 获取access_token，并缓存票据

  async init() {
    console.log('微信初始化函数调用');
    this.refreshAccess_token();

    // 两个小时刷新一次
    setInterval(() => {
      console.log('定时去刷新access_token函数执行');
      this.refreshAccess_token();
    }, config.wxConfig.time * 1000);
  },

  /**
   * 刷新config中的access_token
   */
  async refreshAccess_token() {
    console.log('刷新token');
    let tokenResult = await this.getToken();
    // console.log('获取到的token码');
    // console.log(tokenResult);
    if (tokenResult.errcode) {
      console.log('获取token失败');
      return console.log(tokenResult)
    }
    // 请求成功 刷新token
    config.wxConfig.access_token = tokenResult.access_token;
    console.log('access_token获取并刷新成功');
    // 获取完成access_token之后去刷新 jsapi_ticket
    let jsapi_ticketResult = await this.getJsapi_ticket();
    // console.log('获取到的票据结果为');
    // console.log(jsapi_ticketResult);
    if (jsapi_ticketResult.errcode !== 0) {
      console.log('jsapi_ticket获取失败');
      return console.log(jsapi_ticketResult);
    }
    console.log('刷新jsapi_ticket成功');
    config.wxConfig.jsapi_ticket = jsapi_ticketResult.ticket;

    // 获取完成之后请求微信卡卷的 api_ticket 并刷新
    let api_ticketResult = await this.getApi_ticket();
    // console.log('获取的微信卡卷的结果为');
    // console.log(api_ticketResult);
    if (api_ticketResult.errcode !== 0) {
      console.log('获取微信卡卷api_ticket失败');
      return console.log(api_ticketResult);
    }
    console.log('刷新api_ticket成功');
    config.wxConfig.api_ticket = api_ticketResult.ticket;
  },

  /**
   * 获取票据
   */
  getToken() {
    return axios({
      url: 'https://api.weixin.qq.com/cgi-bin/token',
      params: {
        grant_type: 'client_credential',
        appid: config.wxConfig.AppID,
        secret: config.wxConfig.AppSecret
      }
    });
  },

  // 获取jsapi_ticket
  getJsapi_ticket() {
    return axios({
      url: 'https://api.weixin.qq.com/cgi-bin/ticket/getticket?type=jsapi',
      params: {
        access_token: config.wxConfig.access_token
      }
    });
  },

  getApi_ticket() {
    return axios({
      url: 'https://api.weixin.qq.com/cgi-bin/ticket/getticket',
      params: {
        access_token: config.wxConfig.access_token,
        type: 'wx_card'
      }
    });
  },

  // 获取微信服务器IP地址
  getWxIpList() {
    return axios({
      url: 'https://api.weixin.qq.com/cgi-bin/getcallbackip',
      params: {
        access_token: config.wxConfig.access_token
      }
    });
  },

  // 查询自定义菜单
  getMenu() {
    return axios({
      url: 'https://api.weixin.qq.com/cgi-bin/menu/get',
      params: {
        access_token: config.wxConfig.access_token
      }
    });
  },

  // 自定义菜单删除接口
  deleteMenu() {
    return axios({
      url: 'https://api.weixin.qq.com/cgi-bin/menu/delete',
      params: {
        access_token: config.wxConfig.access_token
      }
    });
  },

  /**
   * 获取authorization的token
   * @params {String} code 回调函数的code
   */
  getAuthorizationAccess_token(code){
    return axios({
      url: 'https://api.weixin.qq.com/sns/oauth2/access_token',
      params: {
        appid: config.wxConfig.AppID,
        secret: config.wxConfig.AppSecret,
        code: code,
        grant_type: 'authorization_code',
      }
    })
  },

  /**
   * 通过refresh_token刷新获取access_token
   * @param {String} refresh_token
   */
  refreshToken(refresh_token){
    return axios({
      url: 'https://api.weixin.qq.com/sns/oauth2/refresh_token?=APPID&=&refresh_token=REFRESH_TOKEN',
      params: {
        appid: config.wxConfig.AppID,
        grant_type: 'refresh_token',
        refresh_token: refresh_token
      }
    })
  },

  /**
   * 通过openid获取用户信息
   * @param {String} access_token
   * @param {String} openid 
   */
  gerUserInfoByOpenid({access_token, openid}){
    return axios({
      url: 'https://api.weixin.qq.com/sns/userinfo',
      params: {
        access_token: access_token,
        openid: openid,
        lang: 'zh_CN'
      }
    })
  },

  /**
   * 发送消息 目前没有拓展那么多 都是一样的原理 目前只支持 图片 文本 语音 图文消息
   * @params {Object} obj
   *  obj.ToUserName {String} 发送给谁 粉丝号
   *  obj.FromUserName {String} 公众号
   *  obj.MsgType {String} 消息类型 目前支持  text
   *  obj.Content {String} 要发送的文本内容
   *   
   *  obj.MediaId {String} 素材id 通过素材管理中的接口上传多媒体文件，得到的id。
   */
  messageFormat(obj) {
    if (obj.MsgType === 'text') {
      // 文本消息
      return `<xml>
      <ToUserName><![CDATA[${obj.ToUserName}]]></ToUserName>
      <FromUserName><![CDATA[${obj.FromUserName}]]></FromUserName>
      <CreateTime>${parseInt(new Date().getTime() / 1000)}</CreateTime>
      <MsgType><![CDATA[text]]></MsgType>
      <Content><![CDATA[${obj.Content}]]></Content>
      </xml>`;
    } else if (obj.MsgType === 'image') {
      // 回复图片消息给用户
      // 图片消息需要参数 ToUserName FromUserName MediaId
      return `<xml>
      <ToUserName><![CDATA[${obj.ToUserName}]]></ToUserName>
      <FromUserName><![CDATA[${obj.FromUserName}]]></FromUserName>
      <CreateTime>${parseInt(new Date().getTime() / 1000)}</CreateTime>
      <MsgType><![CDATA[image]]></MsgType>
      <Image>
        <MediaId><![CDATA[${obj.MediaId}]]></MediaId>
      </Image>
    </xml>`;
    } else if (obj.MsgType === 'voice') {
      // 回复语音消息
      return `<xml>
      <ToUserName><![CDATA[${obj.ToUserName}]]></ToUserName>
      <FromUserName><![CDATA[${obj.FromUserName}]]></FromUserName>
      <CreateTime>${parseInt(new Date().getTime() / 1000)}</CreateTime>
      <MsgType><![CDATA[voice]]></MsgType>
      <Voice>
        <MediaId><![CDATA[${obj.MediaId}]]></MediaId>
      </Voice>
    </xml>`;
    } else if (obj.MsgType === 'news') {
      return `<xml>
      <ToUserName><![CDATA[${obj.ToUserName}]]></ToUserName>
      <FromUserName><![CDATA[${obj.FromUserName}]]></FromUserName>
      <CreateTime>${parseInt(new Date().getTime() / 1000)}</CreateTime>
      <MsgType><![CDATA[news]]></MsgType>
      <ArticleCount>1</ArticleCount>
      <Articles>
        <item>
          <Title><![CDATA[${'管理助手'}]]></Title>
          <Description><![CDATA[${'这是一个管理个人生活的小助手，希望可以管理到你的生活的一些方方面面。让你的生活有规划'}]]></Description>
          <PicUrl><![CDATA[${''}]]></PicUrl>
          <Url><![CDATA[${'http://bs.xiaoye121.com'}]]></Url>
        </item>
      </Articles>
    </xml>`;
    }
  },
};


/*

https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5910ab0a942c1030&redirect_uri=http%3A%2F%2Fwxgz.xiaoye121.com%2Fwx%2Fauth&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect
*/