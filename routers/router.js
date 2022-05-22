const express = require('express');
const showdown = require('showdown');
const showdownKatex = require('showdown-katex');

const converter = new showdown.Converter({
  extensions: [
    showdownKatex({
      throwOnError: true
    })
  ]
});

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('pages/index');
})
router.get('/blog', (req, res, next) => {
  res.render('pages/blog');
})
router.get('/blog/:id', (req, res, next) => {
  res.render('pages/blogDetail');
})
router.get('/about', (req, res, next) => {
  res.render('pages/about');
})

module.exports = router;