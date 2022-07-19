const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Article', new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  likes: { type: Number, default: 0 },
  watches: { type: Number, default: 0 },
  date: { type: Date, required: true },
  show: { type: Boolean, default: true },
  comments: [{
    author: { type: String, maxlength: 100 },
    email: { type: String, maxlength: 100 },
    content: { type: String, required: true, maxlength: 10000 },
    ip: { type: String, required: true },
    date: { type: Date, required: true },
    show: { type: Boolean, default: false },
  }],
  tags: { type: [String], default: [] }
}))