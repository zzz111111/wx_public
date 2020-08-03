/**
 * 工具包
 */
const crypto = require('crypto');
const xml2js = require('xml2js');

/**
 * 对字符串进行字典排序并进行sha1加密
 */
exports.sha1 = (...rest) => {
  return crypto.createHash('sha1').update(rest.sort().join('')).digest('hex');
};

/**
 * 对字符串进行 sha1 加密
 */
exports.sha1String = (str) => {
  return crypto.createHash('sha1').update(str).digest('hex');
};

/**
 * 生成随机字符串
 * @params {Number} len 生成字符串的长度 默认 32 位
 */
exports.randomString = (len) => {
  len = len || 32;
  var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
  var maxPos = $chars.length;
  var pwd = '';
  for (let i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
};

/**
 * XML转 JSON  JSON --> XML
 * @params 
 */
exports.xml = {
  xmlToJson(str) {
    return new Promise((resolve, reject) => {
      const parseString = xml2js.parseString
      parseString(str, (err, result) => {
        if (err) {
          resolve({ status: 400, err: err });
        } else {
          resolve({ status: 200, con: result });
        }
      })
    });
  },
  jsonToXml(jsonObj) {
    const builder = new xml2js.Builder();
    return builder.buildObject(jsonObj);
  }
};

// obj = {
//   "api": "hl.sdk.3doRreal",
//   "data": {
//     "type": "real", // real 切换到实景，3d切换到3d线框图
//   }
// }