Date.prototype.format = function (fmt) {
  let ret;
  const opt = {
    "Y+": this.getFullYear().toString(),
    "m+": (this.getMonth() + 1).toString(),
    "d+": this.getDate().toString(),
    "H+": this.getHours().toString(),
    "M+": this.getMinutes().toString(),
    "S+": this.getSeconds().toString()
  };
  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
    };
  };
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

Number.prototype.friendly = function () {
  return this > 10000 ? parseFloat((this / 10000).toFixed(1)) + 'w' : parseFloat(this.toFixed(1));
}

const _log = console.log;
const _info = console.info;
const _warn = console.warn;
const _error = console.error;

console.log = function (...data) {
  _log(`[${new Date().format("HH:MM:SS")} LOG]`, ...data);
}
console.info = function (...data) {
  _info("\x1B[36m", `[${new Date().format("HH:MM:SS")} INFO]`, ...data, "\x1B[39m");
}
console.warn = function (...data) {
  _warn("\x1B[33m", `[${new Date().format("HH:MM:SS")} WARN]`, ...data, "\x1B[39m");
}
console.error = function (...data) {
  _error("\x1B[31m", `[${new Date().format("HH:MM:SS")} ERROR]`, ...data, "\x1B[39m");
}

const utils = {};
export default utils;