const md5 = require('md5');
const sha1 = require('sha1');

// 加盐
const str = 'abcd' + 'wutianliahahahahajiayan';

// sha1加密
console.log(sha1('dashen4qi'));

// md5加密
console.log(md5(str));