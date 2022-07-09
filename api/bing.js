const axios = require('axios')

module.exports = {
  get: async ctx => {
    const res = await axios.get('https://cn.bing.com/HPImageArchive.aspx?format=js&n=1');
    const url = res.data.images[0].url;
    ctx.redirect('https://cn.bing.com' + url);
  }
}