const Article = require('../../model/Article');

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
      case 'update':
        if (!body.data) ctx.sendStatus(400);
        article = Object.assign(article, body.data);
        break;
      case 'verifyComment':
        if (!body.data || !body.data.show || !body.data.cid) ctx.sendStatus(400);
        article.comments = article.comments.map(comment => {
          if (comment._id == body.data.cid) {
            comment.show = body.data.show;
          }
          return comment;
        })
        break;
      case 'deleteComment':
        if (!body.data) return;
        article.comments = article.comments.filter(comment => {
          return (comment._id != body.data.cid && comment.ip != body.data.ip);
        })
        break;
    }
    try {
      await article.save();
      ctx.status = 200;
    } catch (e) {
      ctx.body = e.message;
    }
  },
  delete: async ctx => {
    const body = ctx.request.body;
    try {
      const res = await Article.deleteOne({ _id: body.id });
      ctx.status = 200;
    } catch (e) {
      ctx.body = e.message;
    }
  }
}