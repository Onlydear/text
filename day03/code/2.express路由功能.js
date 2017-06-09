// 导入express
// 得到的是一个方法
const express = require('express');
// express操作路由等基本上都是用app
const app = express();

// 监听一个get请求
// 参数1 就是需要监听的路由(精确的匹配)
app.get('/haha',function(req,res){
    res.send('哈哈哈我是页面~');
});

// 监听一个post请求
app.post('/upload',function(req,res){
    res.send('upload');
});

// 监听一个delete请求
app.post('/delete',function(req,res){
    res.send('delete');
});

// 启动监听
app.listen(80);