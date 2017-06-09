// 导入模块
const MongoClient = require('mongodb').MongoClient;
// 数据库地址
const url = 'mongodb://localhost:27017/dashen';
// 用客户端实例连接数据库
// 要操作数据库一定要先链接数据库
MongoClient.connect(url,function(err,db){
    if(!err){
        // 先拿到集合
        const collection = db.collection('xueshen');
        // 添加数据
        collection.insertOne({'name':'沸洋洋','age':'22',"address":{"city":'广州'}},function(err,doc){
            if(!err){
                console.log('添加成功!');
            }
            // 关闭数据库
            db.close();
        })
    }
});