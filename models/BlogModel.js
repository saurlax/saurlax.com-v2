import mongoose from 'mongoose'

const blogSchema = new mongoose.Schema({
  datetime: { type: Date, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  views: { type: Number, required: true }
})

export default mongoose.models?.Blog || mongoose.model('Blog', blogSchema, 'blog');