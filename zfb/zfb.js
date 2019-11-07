/**
 * 支付宝的逻辑代码
 */
const config = require('../config/config');
const utils = require('../utils/utils');
const wxBase = require('./zfbBase');
const { __handleAPIRes, __mustValue, __handleRes } = require('../module/result');
// const db = require('../schema/index');


/**
 * 测试
 */
exports.test = async ctx => {
  try {
    console.log('支付宝的测试逻辑代码');
    ctx.body = __handleAPIRes('接口调用成功');
  } catch (e) {
    console.log(e);
  }
};

exports.testnull = async ctx => {
  try{
    console.log('请求到了我');
    console.log(ctx.query);
    console.log(ctx.request.body);

    ctx.body = __handleAPIRes('请求成功');


  }catch(e){
    console.log(e);
    ctx.body = __handleAPIRes('服务器繁忙，请稍后再试', 500);
  }
};
