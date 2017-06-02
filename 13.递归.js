const fs = require('fs');
const path = require('path');

// 需要查找的文件夹目录
const apath = path.join(__dirname,'1111');

fs.readdir(apath,function(err,files){
    let arr = [];
    // 自执行函数(闭包)
    // 递归就是自己调用自己
    !function recursive(i){
        // 当条件满足的时候不进行递归
        if(i == files.length){
            console.log(arr);
            return;
        }
        // 来到这里就是数组没有遍历完
        const filename = files[i];
        
        fs.stat(path.join(apath,filename),function(err,status){
            // 判断当前是文件
            if(status.isFile()){
                arr.push(filename);
            }
            recursive(i + 1);
        });     
    }(0)
    
});