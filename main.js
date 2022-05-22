const express = require('express');
const fs = require('fs');
const router = require('./routers/router');
require('dotenv').config();

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(router);
app.use(express.static('public'));
app.get('*', (req, res, next) => {
  res.statusCode = 404;
  res.render('pages/error', { error: 404, message: 'Page not found' });
})

app.listen(process.env.PORT);
console.log(`Server is listening on port ${process.env.PORT}`);
