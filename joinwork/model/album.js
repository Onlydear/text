const mongoose = require('mongoose');
const db = require('./db.js');

// 相冊 schema 
const albumSchema = new mongoose.Schema({
    name:{
    type: String,
    unique: true,
    required: true
    },
    photos:[]  // 用来存放上传的图片
});

// model
const albumModel = db.model('album',albumSchema,'album');

module.exports = {
    // 添加數據 (創建相冊)
    create: function(obj){
        return albumModel.create(obj);
    },
    // 查找所有
    find: function(){
        return albumModel.find();
    },
    findOne: function(obj){
        return albumModel.findOne(obj);
    }
}