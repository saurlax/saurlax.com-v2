import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import cloudbase from '@cloudbase/js-sdk/app';
import '@cloudbase/js-sdk/auth';
import '@cloudbase/js-sdk/functions';
import '@cloudbase/js-sdk/database';

Date.prototype.format = function (fmt) {
  var o = {
    'M+': this.getMonth() + 1,
    'd+': this.getDate(),
    'H+': this.getHours(),
    'm+': this.getMinutes(),
    's+': this.getSeconds(),
    'q+': Math.floor((this.getMonth() + 3) / 3),
    'S': this.getMilliseconds()
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
  return fmt;
}

Date.prototype.friendly = function () {
  let diff = Date.now() - this;
  if (diff >= 0) {
    if (diff < 60000) return '几秒钟前';
    if (diff < 3600000) return parseInt(diff / 60000) + '分钟前';
    if (diff < 86400000) return parseInt(diff / 3600000) + '小时前';
    if (diff < 172800000) return '昨天';
  } else {
    if (diff > -60000) return '几秒钟后';
    if (diff > -3600000) return parseInt(diff / 60000) + '分钟后';
    if (diff > -86400000) return parseInt(diff / 3600000) + '小时后';
    if (diff > -172800000) return '明天';
  }
  if (this.getYear() == new Date().getYear()) return this.format('MM-dd');
  return this.format('yyyy-MM-dd');
}

window.app = cloudbase.init({ env: 'saurlax-8gusnwgo26d9fe8f', region: 'ap-guangzhou' });
window.db = app.database();

ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('root'));
