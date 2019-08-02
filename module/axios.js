const axios = require('axios');
// import config from '../config'

const AXIOS = {
  /**
   * 封装请求方法
   * @params obj {Object} 请求体
   *  obj.method {String} 请求方式  GET POST  默认 GET
   *  obj.configURL {String} 请求的ip http://127.0.0.1:3000 默认使用 config中的 url
   *  obj.url {String} 请求的接口  /aaa
   *  obj.params {JSON} get请求参数  {aa: 1, bb: 2}
   *  obj.data {JSON} post以及其他方式的请求参数
   *  obj.header 请求头设置  默认 application/json;charset=utf-8
   */

  server: (obj) => {
    return new Promise((resolve, reject) => {
      obj.method = obj.method || 'GET';
      // obj.configURL = obj.configURL || config.url;
      // obj.url = obj.url || config.url;
      obj.params = obj.params || {};
      obj.data =  obj.data || {};
      obj.headers = obj.headers || {'Content-Type': 'application/json;charset=utf-8'};
      axios({
        url: obj.url,
        method: obj.method,
        header: obj.header,
        params: obj.params,
        data: obj.data
      })
        .then(res => {
          // console.log('不处理的返回值是什么');
          // console.log(res);
          if(res.status === 200){
            resolve(res.data);
          }else{
            resolve({
              /**
               * 问一下是不是所有的状态码都是 200
               */
              status: 75400,
            })
          }
          // 重新去获取并刷新 token
        })
        .catch(err => {
          reject({
            status: 500,
            data: err
          });
        })
    })
  },

  /**
   * 获取token
   */
//   getToken() {
//     return new Promise((resolve, reject) => {

//     })
//   }
};

module.exports = AXIOS.server;
