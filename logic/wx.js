const config = require('../config/config');
const utils = require('../utils/utils');

/**
 * 微信公众号相关的接口
 */
exports.checkToken = async ctx => {
  console.log('发送过来了');
  console.log('get请求');
  console.log(ctx.query);
  console.log('post请求');
  console.log(ctx.body);
  const {signature, timestamp, nonce, echostr} = ctx.query;
  console.log(signature, timestamp, nonce, echostr);

  let sha1Str = utils.sha1(timestamp, nonce, config.wxConfig.Token);
  console.log('加密后的结果');
  console.log(sha1Str);
  console.log('微信发送的字符串');
  console.log(signature);
  console.log('判断是否相等');
  console.log(sha1Str === signature);

  if(sha1Str === signature){
    ctx.body = echostr;
  }else{
    ctx.body = false;
  }
};

