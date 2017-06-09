const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/dashen'
// 连接
MongoClient.connect(url,function(err,db){
    if(err){
        console.log('连接错误'+err.message);
    }
})