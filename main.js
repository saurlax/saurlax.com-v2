const os = require('os');
const koa = require('koa');
const static = require('koa-static');
const render = require('koa-art-template');
const dotenv = require('dotenv');
const router = require('koa-router');

const app = new koa();
const networks = os.networkInterfaces();
dotenv.config();
render(app, { root: 'view', debug: process.env.DEBUG == 'true' });

const api = new router();
api.prefix('api');
api.get('bing', () => { return 123 });

app.use(static('public'));
app.use(api.routes()).use(api.allowedMethods());
app.use(async (ctx) => {
  await ctx.render('home');
})

app.listen(process.env.PORT);


if (process.env.DEBUG == 'true') console.log('🚧 \x1B[33mYou are in DEBUG mode now.\x1B[39m');
console.log(`Server running at:`);
for (let key in networks) {
  const network = networks[key];
  console.log(`> ${key}`);
  console.log(`\x1B[36m\t\t${network.map((gate) => { return `http://${(gate.family == 'IPv6') ? `[${gate.address}]` : gate.address}:${process.env.PORT}/` }).join('\n\t\t')}\x1B[39m`);
}
console.log(`\n✨ \x1B[36mCompleted in ${parseInt(process.uptime() * 1000)}ms\x1B[39m`);