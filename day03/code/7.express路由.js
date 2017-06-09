const express = require('express');
const app = express();

// 同一个路由挂在不同的请求方式,不会造成冲突
// get
// app.get('/',function(req,res){
//     res.send('get');
// });

// app.post('/',function(req,res){
//     res.send('post');
// });

// 用一个方法处理所有请求

app.all('/a',function(req,res){
    res.send('hahaha~');
});

// use相当是当前监听路径下的所有子路由都会被监听
// app.use('/a',function(req,res){
//     res.send('use');
// });

app.listen(80);