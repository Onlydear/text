const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
// 连接数据库
const db = mongoose.createConnection('localhost', 'best');

// 定义一个schema 类似表结构
const xueshengSchema = new mongoose.Schema({
    name: String, //定义name属性,冒号后面是类型
    age: Number
});

// schema生成model
// 参数1: model叫什么名
// 参数2: 创建model的schema
// 参数3: 数据库中集合的名字
const xueshengModel = db.model('xuesheng',xueshengSchema,'dashen');

// entity
// 参数是具体存放到数据库中的数据
const xueshengEntity = new xueshengModel({'name':'小灰灰','age':18});

// 把数据存到数据库中

// xueshengEntity.save(function(err,result){
//     console.log(result);
// });

xueshengEntity.save(function(err,result){
    // 手动销毁队列,并不是干掉主线程
    // mongoose.connection.close(function(){
    //     console.log('销毁了');        
    // });
});

// 查找所有的数据
// xueshengModel.find(function(err,docs){
//     console.log(docs);
// });

// 用id查找数据
xueshengModel.findById('5937b5df6ea314097c9aced7',function(err,doc){
    console.log(doc);
});