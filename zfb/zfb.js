/**
 * 支付宝的逻辑代码
 */
const config = require('../config/config');
const utils = require('../utils/utils');
const wxBase = require('./zfbBase');
const { __handleAPIRes, __mustValue, __handleRes } = require('../module/result');
const db = require('../schema/index');


/**
 * 测试
 */
exports.test = async ctx => {
  try {
    console.log('支付宝的测试逻辑代码');
    ctx.body = __handleAPIRes('测试成功');
  } catch (e) {
    console.log(e);
  }
};
