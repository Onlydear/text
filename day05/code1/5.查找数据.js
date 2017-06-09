// 导入模块
const  MongoClient  = require('mongodb').MongoClient;
// 数据库地址
const url = 'mongodb://localhost:27017/dashen';
// 用客户端实例连接数据库
// 要操作数据库一定先要连接数据库
MongoClient.connect(url,function(err,db){
    if(!err){
        //拿到集合
        const collection = db.collection('xueshen');
        // 查找数据库的所有数据
        // limit 用来指定显示查询的条数
        // skip 是用来跳过指定的文档数量
        const num = 2;
        collection.find({}).limit(num).skip(num * 1).toArray(function(err,result){
            if(!err){
                console.log(result);
            }
            db.close();
        })
        // 如果是查询一条数据,则不用toArray,结果是一个回调
        // collection.findOne({'name':'红太郎',},function(err,result){

        // });
    }
});