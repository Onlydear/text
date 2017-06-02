const fs = require('fs');

// 查询文件状态
fs.stat('./1111',function(err,status){
    if(!err){
        // 判断是否是文件
        if(status.isFile()){
            console.log('文件');
        }else if(status.isDirectory()){
            console.log('文件夹');
        }
    }
})