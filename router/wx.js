const Router = require('koa-router');
const wxLogic = require('../logic/wx');


const router = new Router({
  prefix: '/wx'
});

router.get('/check_token', async ctx => {
  ctx.body = '成功';
});


router.get('/wx/token', async ctx => {
  ctx.body = "wx token";
});

module.exports = router;
