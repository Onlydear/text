const MongoClient = require('mongodb').MongoClient;
// 数据库地址
const url = 'mongodb://localhost:27017/dashen'

// 连接数据库
MongoClient.connect(url,function(err,db){
    if(!err){
        // 操作数据库是要往集合里插入数据
        const collection = db.collection('xuesheng');
        // 插入数据
        // collection.insertOne({"name":"小灰灰","age":"18"},function(err,result){
        //     if(!err){
        //         console.log(result);
        //     }
        //     db.close();
        // });

        collection.insert([{"name":"小灰灰","age":"18"},{"name":"红太郎","age":"38"},{"name":"灰太郎","age":"40"}],function(err,result){
            if(!err){
                console.log(result.result);
            }
            db.close();
        })
    }
})