const Router = require('koa-router');
const router = new Router();


router.get('/', async ctx => {
  ctx.body = '成功';
});


router.get('/wx/token', async ctx => {
  ctx.body = "wx token";
});

module.exports = router;
