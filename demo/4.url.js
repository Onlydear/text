const url = require('url');
// 格式字符串
const querystring = require('querystring');

const myurl = 'http://127.0.0.1:8080/a/b/c?name=zhansan&age=21';

const query = url.parse(myurl).query;
// 传入要格式化的字符串
const obj = querystring.parse(query);

console.log(obj);