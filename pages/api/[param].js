import mongoose from 'mongoose'
import BlogModel from '../../models/BlogModel'

export default async function handle(req, res) {
  mongoose.connect(process.env.MONGODB_URI);
  if (req.method === 'POST') {
    if (req.body.code === process.env.CODE) {
      try {
        switch (req.query.param) {
          case 'findBlog':
            res.json(await BlogModel.findOne({ _id: req.body.id }));
            break;
          case 'updateBlog':
            res.json(await BlogModel.updateOne({ _id: req.body.id }, req.body.blog));
            break;
          case 'deleteBlog':
            res.json(await BlogModel.deleteOne({ _id: req.body.id }));
            break;
          case 'createBlog':
            res.json(await BlogModel.create(req.body.blog));
            break;
          default:
            res.json({ message: 'Invalid request path' });
            break;
        }
      } catch (e) {
        res.json(e);
      }
    } else {
      res.json({ message: 'Validation failed' });
    }
  } else {
    res.json({ message: 'Invalid request method' });
  }
}