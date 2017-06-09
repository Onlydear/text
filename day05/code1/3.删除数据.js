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
        // 删除数据
        collection.deleteOne({"address.city":"广州"},function(err,result){
            if(!err){
                console.log(result);
            }
            db.close();
        });
        // 删除所有
        // collection.deleteMany
    }
});