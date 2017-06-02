// 导入path根路径相关的操作

const path = require('path');

const mypath = 'C:\Users\亲爱的小强\Desktop\新建文件夹\demo/1.txt';

// 获取到文件名

// const filename = path.basename(mypath);

// console.log(filename);

// 获取当前文件所在的路径 __dirname
// const dirname = path.dirname(mypath);

// console.log(dirname);

// 获取扩展名

const extname = path.extname = path.extname(mypath);
console.log(extname);