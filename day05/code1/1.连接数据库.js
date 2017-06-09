// 导入模块
const MongoClient = require('mongodb').MongoClient;
// 数据库地址
const url = 'mongodb://localhost:27017/dashen';

// 用客户端实例连接数据库
// 要操作数据库一定要先连接数据库
MongoClient.connect(url,function(err,db){
    if(!err){
        console.log('连接成功!')
    }
    db.close();
});