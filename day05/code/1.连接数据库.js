const mongoose = require('mongoose');

// 开始连接数据库
const db = mongoose.createConnection('localhost','dashen');

// 数据库连接失败的时候调用
db.on('error',function(){
    console.log('db error');
});

// 数据库打开时间
db.once('open',function(){
    console.log('db open');
});