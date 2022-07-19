const Article = require('../../model/Article');

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
      case 'verifyComment':
        if (!body.data || !body.data.show || !body.data.cid) {
          ctx.status = 400;
          return;
        }
        article.comments = article.comments.map(comment => {
          if (comment._id == body.data.cid) {
            console.log(comment._id, body.data.cid);
            comment.show = body.data.show;
          }
          return comment;
        })
        break;
      case 'deleteComment':
        if (!body.data) return;
        let indexes = [];
        article.comments = article.comments.map((comment, index) => {
          if (comment._id == body.data.cid || comment.ip == body.data.ip) {
            indexes.push(index);
          }
          return comment;
        })
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