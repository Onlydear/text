const fs = require('fs');

// 读取文件夹里的内容
// 1.错误
// 2.所有的文件(包括文件夹)
fs.readdir('./1111',function(err,files){
    if(!err){
        console.log(files);
    }
});