const fs = require('fs');

// 创建文件夹
// 如果不存在就创建文件夹,否则就错误
// fs.mkdir('./哈哈',function(err){
//     if(!err){
//         console.log('创建成功');
//     }else{
//         console.log('文件夹存在');
//     }
// });
// 同步方法创建文件夹
// fs.mkdirSync

fs.rmdir('./哈哈',function(err){
    if(!err){
        console.log('删除成功');
    }else{
        console.log('错误');
    }
});