const Article = require('../model/Article');

module.exports = {
  put: async ctx => {
    const body = ctx.request.body;
    if (!body.action || !body.id) ctx.sendStatus(400);
    let article = await Article.findById(body.id);
    if (!article) {
      ctx.body = 'Article Not Found';
      return;
    }
    switch (body.action) {
      case 'like':
        article.likes++;
        break;
      case 'commit':
        article.comments.push({
          ...body.data,
          show: false,
          date: new Date(),
          ip: ctx.originIp
        });
        break;
    }
    try {
      await article.save();
      ctx.status = 200;
    } catch (e) {
      ctx.body = e.message;
    }
  }
}