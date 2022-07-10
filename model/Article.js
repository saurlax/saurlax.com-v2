const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Article', new Schema({
  title: { type: String, required: true, minlength: 1 },
  content: { type: String, required: true, minlength: 1 },
  likes: { type: Number, default: 0 },
  watches: { type: Number, default: 0 },
  date: { type: Date, required: true },
  show: { type: Boolean, default: true },
  comments: [{
    author: { type: String, required: true, minlength: 1, maxlength: 100 },
    content: { type: String, required: true, minlength: 1, maxlength: 10000 },
    date: { type: Date, required: true },
    show: { type: Boolean, default: false },
  }],
  tags: { type: [String], required: true }
}))