// 读取文件
// 文件相关的操作就要用fs模块
const fs = require('fs');

// 参数1 要读取文件的路径
// 参数2 回调函数
// 读文件是耗时操作,所以要用回调
// err永远是第一个

// Buffer就是一个二进制数据的暂缓区
// fs.readFile('./笔记.txt',function(err,data){
//     // 如果没有错误
//     if(!err){
//         // 可以通过.toString()方法转成字符串
//         console.log(data.toString());
//     }
// })
// console.log('1');

// -----------------------------------------------
const data = fs.readFileSync('./笔记.txt');
console.log(data);
console.log('1');