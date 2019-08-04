module.exports = {
  port: 8002,

  wxConfig: {
    // AppID: 'wxcacd35d40eeb1b09',
    // AppSecret: '0ba36024d0ec037d5a704ef25651b189',
    Token: 'zhangyachang', // 自行配置的token

    // 测试号申请 获得更多权限
    AppID: 'wx5910ab0a942c1030',
    AppSecret: 'ecaac754f1048f693b0b9e05c8c15d10',
    // 测试号申请的id

    access_token: '', // 凭证票据
    jsapi_ticket: '', // jsapi_ticket是公众号用于调用微信JS接口的临时票据
    api_ticket: '', // 微信卡券 api_ticket 是用于调用微信卡券JS API的临时票据
    time: 7000, // 7000秒刷新一次token
  }
};
