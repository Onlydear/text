const MongoClient = require('mongodb').MongoClient;
// url
const url = 'mongodb://localhost:27017/dashen';
// 连接数据库
function connect(callback){
        MongoClient.connect(url,function(err,db){
           // 把结果回调给调用者
            callback(err,db);    
    });
}

// 添加数据
function insertMany(objArr,callback){
    // 调用连接数据库方法,得到结果
    connect(function(err,db){
        if(err){
            // 当连接出错的时候
            return callback(err,null);
        }
        // 得到集合
        const collection = db.collection('xueshen');
        collection.insertMany(objArr,function(err,result){
            // 结果要告诉调用者
            callback(err,result);
            // 不需要操作数据库时就要关闭
            db.close();
        });
    });
}