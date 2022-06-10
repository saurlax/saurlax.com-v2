const router = require('koa-router');
const pageRouter = new router();

pageRouter.get('/', async ctx => {
  ctx.render('pages/home');
})
pageRouter.get('/blog', async ctx => {
  ctx.render('pages/blog');
})
pageRouter.get('/note', async ctx => {
  ctx.render('pages/note');
})
pageRouter.get('/project', async ctx => {
  ctx.render('pages/project');
})

module.exports = pageRouter