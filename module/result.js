/**
 * 这里面主要是为了我自己的写法解决两类返回值
 * 
 * 1. 第一种 要用 await 一个 primise 对象，的返回值，我要把他们的状态值给拿出来。
 *  reject {status: 400, err: err}
 *  resolve {status: 200, msg: msg}
 * 
 * 2. 第二种 作为 API 接口的返回值
 * 
 */
module.exports = {
  
  __handleRes(con, code=200){
    return {
      status: code,
      data: con
    }
  },

  // 判断是否有必填项为空值
  __mustValue(options){
    const result = Object.entries(options);
    const target = result.find((item) => {
      if(item[1] === undefined || !item[1]){
        return true;
      }
    });
    if(target){
      return {
        data: `${target[0]} is required`
      }
    }
  },

  __handleAPIRes(con, code=200){
    return {
      data: con,
      status: code
    }
  }
};