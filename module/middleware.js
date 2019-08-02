/**
 * 这里写一些实用的中间件
 */
const utils = require('../utils/utils');
const { __handleAPIRes } = require('../module/result');


/**
 * 解析xml文件
 *  将xml挂载到 ctx.req.body 中
 */
exports.analysisXML = async (ctx, next) => {
  if (ctx.method == 'POST' && ctx.is('text/xml')) {
    let analysisResult = new Promise(function (resolve, reject) {
      let buf = ''
      ctx.req.setEncoding('utf8')
      ctx.req.on('data', (chunk) => {
        console.log('接收数据');

        console.log(chunk);
        buf += chunk

      })
      ctx.req.on('end', () => {
        utils.xml.xmlToJson(buf)
          .then(resolve)
          .catch(reject)
      })
    })

    await analysisResult
      .then(result => {
        if (result.status === 400) {
          console.log('XML解析失败');
          ctx.body = __handleAPIRes('XML解析失败', 400);
        }
        ctx.req.body = result.con;
      })
      .catch((e) => {
        e.status = 400
      })

    await next()
  } else {
    await next()
  }
};
