const router = require('koa-router');
const pageRouter = new router();

pageRouter.get('/', async ctx => {
  ctx.render('pages/home');
})

module.exports = pageRouter