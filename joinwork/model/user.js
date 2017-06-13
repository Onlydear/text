const mongoose = require('mongoose');
const db = require('./db.js');

const userSchema = new mongoose.Schema({
    username: {
        type: String, // 类型
        unique: true, // 唯一
        required: true // 不能为空
     },
    password:{
        type: String,
        required: true // 不能为空
  }
});

const userModel = db.model('user',userSchema,'user');

module.exports = {
    // 添加到數據到數據庫
    insert: function(obj){
        return userModel.create(obj)
    },
    // 查找數據
    find: function(obj){
        return userModel.findOne(obj)
    }
}