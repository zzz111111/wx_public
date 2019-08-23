const Router = require('koa-router');
const zfbLogic = require('../zfb/zfb.js');
const middleware = require('../module/middleware');
const router = new Router({
  prefix: '/zfb'
});



router.get('/test', zfbLogic.test);




module.exports = router;
