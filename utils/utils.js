/**
 * 工具包
 */
const crypto = require('crypto');


/**
 * 对字符串进行字典排序并进行sha1加密
 */
exports.sha1 = (...rest) => {
  return crypto.createHash('sha1').update(rest.sort().join('')).digest('hex');
};
