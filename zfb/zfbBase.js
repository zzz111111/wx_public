/**
 * 初始化支付宝的服务接口
 */
const config = require('../config/config');
const axios = require('../module/axios');

module.exports = {
  async init() {
    try {
      console.log('支付宝的初始化接口');

    } catch (e) {
      console.log(e);
    }
  },



  getOpenid() {
    console.log('获取用户的openid');


    return axios({
      url: 'https://openapi.alipay.com/gateway.do',
      params: {
        method: 'alipay.user.info.share',
        charset: 'utf-8',
        sign_type: 'RSA2',

      }

    });

  },
};


/*
  1. 通过code换取用户id openid

  2. 上传用户信息
    支付宝用户信息
      {
        avatar: "https://tfs.alipayobjects.com/images/partner/TB1VVJUXjSvMeJjm2G0XXa4upXa"
        city:"深圳市"
        code:"10000"
        countryCode:"CN"
        gender:"m"
        msg:"Success"
        nickName:"张亚昌"
        province:"广东省"
      }

      微信个人用户信息
      {
        avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLOxqTgVXJtVlCEQRFu1Yr0uCJD7yxdyaK7E5jD82RPH55PnbibIRZ6Jq2muic535uBhM7XAEyP2CCw/132"
        city: "石家庄"
        country: "中国"
        gender: 1
        language: "zh_CN"
        nickName: "Z."
        province: "河北"
      }

  3. 支付中  
      生成订单接口(这个信息不知道和之前是不是一样的)
      支付所需的一些信息

  3. 有一个通过openid获取用户角色的 -- 管理员|普通用户 不知道要不要改
*/





