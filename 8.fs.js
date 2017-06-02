// 导入fs模块

const fs = require('fs');

// 1.要写到哪个文件(如果文件不出来node将自动创建该文件)
// 2.结果回调
// fs.writeFile('./haha.txt','哈哈哈哈哈',function(err){
//     // 判断错误
//     if(!err){
//         console.log('写入成功');
//     }
// });

// 只要有异步方法,必定有一个同步的
// 写文件是覆盖里面的内容
// fs.writeFileSync('./haha.txt','哈哈哈哈哈1');

// ---------------------------------------------------

// fs.appendFile('./haha.txt','\r\nhehehe',function(err){
//     // 判断错误
//     if(!err){
//         console.log('写入成功');
//     }
// })
// 删除文件
fs.unlink('./haha.txt',function(err){
    if(!err){
        console.log('删除成功');
    }else{
        console.log('error');
    }
})