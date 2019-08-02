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
