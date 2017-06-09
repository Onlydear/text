const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
// 配置使用cookie-parser
app.use(cookieParser());

// 首页,用来展示搜索过的cookie
app.get('/',function(req,res){
    res.send(req.cookies);
});

// 搜索页面,用来记录搜索过的东西
app.get('/search/:name',function(req,res){
    // 先定义一个数组,用来存放搜索过的记录
    let hobbyArr = [];

    // 判断
    if(req.cookies.hobby){
        // 如果cookie存在
        hobbyArr = req.cookies.hobby;
    }
    // 获取用户的搜索爱好
    const hobby = req.params.name;

    hobbyArr.push(hobby);
    // 下发cookie
    res.cookie('hobby',hobbyArr);
    res.send(hobby);
});

app.listen(80);