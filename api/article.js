const Article = require('../model/Article');

function getClientIP(ctx) {
  if (parseInt(process.env.PROXY_COUNT ?? 0) == 0) {
    return ctx.request.ip.replace('::ffff:', '');
  } else {
    return ctx.get('X-Forwarded-For').split(', ').splice(-process.env.PROXY_COUNT, 1);
  }
}

module.exports = {
  put: async ctx => {
    const body = ctx.request.body;
    if (!body.action || !body.id) {
      ctx.status = 400;
      return;
    }
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
          ip: getClientIP(ctx)
        });
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