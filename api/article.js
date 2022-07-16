const Article = require('../model/Article');

const amountPerPage = 10;

module.exports = {
  get: async ctx => {
    res = await Article.find({ show: true }).sort({ '_id': -1 }).skip(amountPerPage * (ctx.query.page ?? 0)).limit(amountPerPage);
    ctx.body = res.map(article => {
      article.content = article.content.slice(0, 30) + '...';
      return article;
    })
  },
  post: async ctx => {
    try {
      ctx.body = await Article.create(ctx.request.body);
    } catch (e) {
      ctx.body = { error: e.message };
    }
  },
  put: async ctx => {
    const body = ctx.request.body;
    if (!body.action || !body.id) return;
    let article = await Article.findById(body.id);
    switch (body.action) {
      case 'like':
        article.likes++;
        break;
      case 'commit':
        article.comments.push({ ...body.data, show: false, date: new Date() });
        break;
    }
    try {
      await article.save();
      ctx.status = 200;
    } catch (e) {
      ctx.body = { error: e.message };
    }
  }
}