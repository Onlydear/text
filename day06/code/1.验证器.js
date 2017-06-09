const mongoose = require('mongoose');
const db = mongoose.createConnection('localhost','dashen');

// Schema
const xueshenSchema = new mongoose.Schema({
    username:{
        type: String,  //类型
        required: true,  //不能为空 
        unique: true   //该字段唯一
    },
    age:{
        type: Number,  
        min: 18,  //最小值
        max: 80  //最大值
    },
    sex:{
        type:String,
        enum: ['男','女','保密']
    }
});

// Schema -> model
const xueshenModel = db.model('xueshen',xueshenSchema,'xueshen');

// 添加失败(username是空的)
// xueshenModel.create({'age':'20','sex':'保密'},function(err,doc){
//     if(err){
//         console.log('添加失败!');
//     }else{
//         console.log(doc);
//     }
// });

xueshenModel.create({'username':'小灰灰','age':'20','sex':'保密'},function(err,doc){
    if(err){
        console.log('添加失败!');
    }else{
        console.log(doc);
    }
});