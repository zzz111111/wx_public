const Router = require('koa-router');
const zfbLogic = require('../zfb/zfb.js');
const middleware = require('../module/middleware');
const utils = require('../utils/utils');
const url = require('url');
const router = new Router({
  prefix: '/zfb'
});

// let str = `https://www.merchant.com/receive_notify.htm?notify_type=trade_status_sync&notify_id=91722adff935e8cfa58b3aabf4dead6ibe&notify_time=2017-02-16 21:46:15&sign_type=RSA2&sign=WcO+t3D8Kg71dTlKwN7r9PzUOXeaBJwp8/FOuSxcuSkXsoVYxBpsAidprySCjHCjmaglNcjoKJQLJ28/Asl93joTW39FX6i07lXhnbPknezAlwmvPdnQuI01HZsZF9V1i6ggZjBiAd5lG8bZtTxZOJ87ub2i9GuJ3Nr/NUc9VeY=&trans_currency=USD&settle_currency=USD&settle_amount=88.88&pay_currency=CNY&pay_amount=580.04&settle_trans_rate=1&trans_pay_rate=6.5261&refund_preset_paytool_list=[{"amount":"1.00","assert_type_code":"HEMA"}]&charge_amount=8.88&charge_flags=bluesea_1&settlement_id=2018101610032004620239146945&advance_amount=11.11&notify_action_type=payByAccountAction/closeTradeAction/reverseAction/finishFPAction&discount_amount=88.88&mdiscount_amount=88.88&unfreeze_amount=18.18&auth_trade_pay_mode=CREDIT_PREAUTH_PAY`;

// console.log('切割url');
// str = str.split('?')[1];

// let a = url.parse('?' + str, true);
// console.log('切割结果');
// console.log(a);


router.get('/test', zfbLogic.test);

router.post('/testnull', zfbLogic.testnull);





module.exports = router;
