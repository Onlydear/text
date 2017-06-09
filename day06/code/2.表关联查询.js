const mongoose = require('mongoose');
const db = mongoose.createConnection('localhost','dashen');

// 文章 Schema
const wenzhangSchema = new mongoose.Schema({
    title: String,
    content: String,
    author:{
        type: mongoose.Schema.Types.ObjectId,  // 类型是ObjectId
        ref: 'zuozhe123'   //model的名字
    }
});

// 作者Schema
const authorSchema = new mongoose.Schema({
    name: String,
    age: Number
});

// 文章model
const wenzhangModel = db.model('wenzhang',wenzhangSchema,'wenzhang');
// 作者model
const authorModel = db.model('zuozhe123',authorSchema,'author');

const authorEntity = new authorModel({'name':'灰太狼','age':23});
// 查询数据 (所有数据)
// wenzhangModel.find(function(err,docs){
//     console.log(docs);
// });

// 新创建用户并且发布文章
// authorEntity.save(function(err,doc){
//     if(!err){
//         // dov 就是存放数据库中的作者
//         const wenzhangEntity = new wenzhangModel({'title':'新闻','content':'新闻内容','author':doc._id});
//         wenzhangEntity.save();
//     }
// });

// 用户存在的情况下
// authorModel.findOne({'name':'红太狼','age':25},function(err,doc){
//     if(!err){
//         const wenzhangEntity = new wenzhangModel({'title':'新闻','content':'新闻内容','author':doc._id});
//         wenzhangEntity.save();
//     }
// })

// 多表查询
wenzhangModel.find()
.populate('author') //关联指标的外键(也就是哪个字段存放ObjectId)
.exec(function(err,doc){
    console.log(doc);
});