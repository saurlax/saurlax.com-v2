const router = require('koa-router');
const fs = require('fs');

const apiRouter = new router();

apiRouter.prefix('/api');

fs.readdirSync('./api').forEach(path => {
  const api = require('../api/' + path);
  Object.keys(api).forEach(method => {
    apiRouter[method]('/' + path.split('.')[0], api[method]);
  })
})

module.exports = apiRouter