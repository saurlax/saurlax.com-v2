const fs = require('fs');
const os = require('os');
const Koa = require('koa');
const static = require('koa-static');
const Router = require('koa-router');
const bodyparser = require('koa-bodyparser');
const render = require('koa-art-template');
const dotenv = require('dotenv');
const moment = require('moment');
const mongoose = require('mongoose');
const marked = require('marked');
const katex = require('katex');

const Article = require('./model/Article');

const app = new Koa();
const networks = os.networkInterfaces();
dotenv.config();
moment.locale('zh-CN');
mongoose.connect(process.env.DATABASE_URI).then(() => { console.log('Database connected.') });

katex.renderToString(`
\\sum_{i=1}^n i^3 = \\left( \\frac{n(g(n)+1)} 2 \\right) ^2
`)
render(app, {
  root: 'view',
  debug: process.env.DEBUG == 'true',
  imports: {
    moment, marked, Math,
    katex: (text) => {
      text.match(/\$\$[^\$]*\$\$/gm)?.forEach(match => {
        text = text.replace(match, katex.renderToString(match.slice(2, -2), { throwOnError: false }));
      })
      text.match(/```latex[^`]*```/gims)?.forEach(match => {
        text = text.replace(match, katex.renderToString(match.slice(8, -3), { throwOnError: false, displayMode: true }));
      })
      return text;
    }
  }
})

if (process.env.DEBUG == 'true') console.log('🚧 \x1B[33mYou are now in DEBUG mode.\x1B[39m');

function executeOnDirectory(path, action, prefix) {
  const stat = fs.statSync(path);
  const name = path.split('/').reverse()[0];
  if (stat.isFile()) {
    action(path, name, prefix);
  }
  if (stat.isDirectory()) {
    fs.readdirSync(path).forEach(p => { executeOnDirectory(`${path}/${p}`, action, `${prefix ?? ''}/${name}`) });
  }
}

const countPerPage = 10;

const apiRouter = new Router();
const pageRouter = new Router();
executeOnDirectory('./view', (path, name, prefix) => {
  if (prefix.includes('/style') || prefix.includes('/script') || prefix.includes('/component')) return;
  const url = `${prefix.split('/view')[1]}/${(name == 'home.art') ? '' : name.split('.')[0].replace(/\[(.+)\]/, ':$1')}`;
  pageRouter.get(url, async (ctx, next) => {
    let data = {};
    switch (url) {
      case '/article/:id':
        try {
          let res = await Article.findById(ctx.params.id);
          if (!res.show) {
            next();
            return;
          }
          res.comments = res.comments.filter(comment => {
            return comment.show;
          })
          data.article = res;
        } catch {
          next();
          return;
        }
        break;
      case '/':
        let factor = { show: true };
        let wd = ctx.query.wd;
        if (wd && wd != '') {
          factor.$or = [
            { title: new RegExp(wd) },
            { content: new RegExp(wd) },
            { tags: new RegExp(wd) }
          ];
        }
        let page = ctx.query.page;
        page = (page && page >= 0) ? parseInt(page) : 0;
        let res = await Article.find(factor).sort({ _id: -1 }).skip(countPerPage * page).limit(countPerPage);
        data.count = await Article.find(factor).count();
        data.countPerPage = countPerPage;
        data.page = page;
        data.wd = wd;
        data.articles = res.map(article => {
          article.content = article.content.slice(0, 30) + '...';
          article.comments = article.comments.filter(comment => {
            return comment.show;
          })
          return article;
        })
        break;
    }
    ctx.render(`./${prefix.slice(6)}/${name}`, data)
  });
  console.log(`Page loaded: \x1B[36m${url}\x1B[39m`);
})
executeOnDirectory('./api', (path, name, prefix) => {
  const api = require(path);
  const url = `${prefix}/${name.split('.')[0]}`;
  for (key in api) {
    apiRouter[key](url, api[key]);
  }
  console.log(`API loaded: \x1B[36m${url}\x1B[39m`);
})

app.use(static('public'));
app.use(new bodyparser());
app.use(apiRouter.routes()).use(apiRouter.allowedMethods());
app.use(pageRouter.routes()).use(pageRouter.allowedMethods());
app.use(ctx => {
  if (ctx.path.includes('/api')) return;
  ctx.status = 404;
  ctx.render('404.art');
})
app.listen(process.env.PORT);

console.log(`Server running at:`);
for (let key in networks) {
  const network = networks[key];
  console.log(`> ${key}`);
  console.log(`\x1B[36m\t\t${network.map((gate) => { return `http://${(gate.family == 'IPv6') ? `[${gate.address}]` : gate.address}:${process.env.PORT}/` }).join('\n\t\t')}\x1B[39m`);
}
console.log(`\n✨ \x1B[36mCompleted in ${parseInt(process.uptime() * 1000)}ms\x1B[39m`);