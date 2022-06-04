const koa = require('koa');
const serve = require('koa-static');
const art = require('koa-art-template');
require('dotenv').config();

const app = new koa();
art(app, {
  root: 'views',
  extname: '.art',
  debug: process.env.NODE_ENV == 'development'
})

const pageRouter = require('./routers/pageRouter');
const apiRouter = require('./routers/apiRouter');
app.use(pageRouter.routes()).use(pageRouter.allowedMethods());
app.use(apiRouter.routes()).use(apiRouter.allowedMethods());
app.use(serve('public'));

app.listen(process.env.PORT);
console.log(`Server is listening on port ${process.env.PORT}`);