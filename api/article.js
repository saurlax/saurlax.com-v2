const Article = require('../model/Article');

module.exports = {
  get: async ctx => {
    ctx.body = await Article.find().skip(0).limit(10);
  },
  post: async ctx => {
    try {
      ctx.body = await Article.create(ctx.request.body);
    } catch (e) {
      ctx.body = e.message;
    }
  }
}