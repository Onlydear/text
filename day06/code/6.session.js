const express = require('express');
const app = express();
// 使用 cookie 要导入模块
const cookieParser = require('cookie-parser');
// 导入 session 模块
const session = require('express-session');

// 配置使用 cookie-parser
app.use(cookieParser());

app.use(session({
    resave: false,  //是否重置
    saveUninitialized: false,  //是否强制设置一个 session
    secret: 'dashen',
    cookie: {maxAge:7 * 24 * 60 * 3600}
}));

// 首页路由
app.get('/',function(req,res){
    if(req.session.user){
        res.send(req.session.user.username)
    }else{
        res.send('没有登录!')
    }
});

// 登录路由
app.get('/login',function(req,res){
    // 设置 session

    req.session.user = {'username':'xueshen','password':'123456'};
    res.send('登录成功!')
});

// 退出登录
app.get('/loginout',function(req,res){
    // 清空 user
    req.session.user = null;
    res.send('退出成功!');
})

app.listen(80);