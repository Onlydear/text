// 跟url 相关的操作就用url模块

// http://127.0.0.1/a/b/c?name=zhangsan&age=21

const url = require('url');
const myurl = 'http://127.0.0.1:8080/a/b/c?name=zhangsan&age=21';
// 先对url进行格式化,然后再取想要的字段
// 获取参数
// 第二个参数 就是把参数格式化成对象.直接可以通过点语法获取对象的值
const query = url.parse(myurl,true).query;
console.log(query.name);

// 获取访问路径
const pathname = url.parse(myurl).pathname;
console.log(pathname);

// 获取端口
const port = url.parse(myurl).port;
console.log(port);