const fs = require('fs');
// 跟路径相关的操作就要用path
const path = require('path');

// 当前文件的全路径
// console.log(__filename);
// 当前文件的文件夹名
// console.log(__dirname);

// fs.readFile(path.join(__dirname,'笔记.txt'),function(err,data){
//     if(!err){
//         console.log(data);
//     }else{
//         console.log('err');
//     }
// });

// !!!!!!!!!!!!错误的!!!!!
// 注意回调的坑

// 遍历文件夹
fs.readdir('./1111',function(err,files){
    // 如果没有错误
    if(!err){
        // 要过滤先要判断状态
        // 存放文件的数组
        let arr = [];

        for(let i = 0;i<files.length;i++){
            const filename = files[i];
            // 判断状态
            fs.stat(path.join(__dirname,'1111',filename),function(err,status){ //stat 异步
                // 没有错误肯定是由文件
                if(!err){
                    if(status.isFile()){
                        // 当前是文件
                        arr.push(filename);
                    }
                }
            });
            console.log(filename)
        }
    }
});