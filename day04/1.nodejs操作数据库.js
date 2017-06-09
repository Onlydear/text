// 获取mongodb 操作的客户端
const MongoClient = require('mongodb').MongoClient;
// 开始连接数据库
// 数据库地址
const url = "mongodb://localhost:27017";
MongoClient.connect(url,function(err,db){
    if(!err){
        console.log("连接成功");
    }else{
        console.log("连接失败");
    }
    // 不需要操作数据库的时候要关闭数据库
    db.close();
});