// 导入所有需要的模块
const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const config = require('config-lite')(__dirname);
const session = require('express-session');
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo')(session);
const router = require('./routes/index.js');

// 設置靜態文件處理
app.use(express.static('public'));
app.use(express.static('upload'));

// 配置模板引擎
nunjucks.configure('views',{express:app});

// 配置 cookie
app.use(cookieParser());

// 配置 session
app.use(session({
    resave: config.session.resave,
    saveUninitialized: config.session.saveUninitialized,
    secret: config.session.secret,
    cookie:{maxAge:config.session.maxAge},
    store:new MongoStore({
        url: config.mongodbURL
    })
}));

// 配置自己的中間件
app.use(function(req,res,next){
    // 傳遞模板中的 title (因為每個頁面都要)
    app.locals.title = config.title;
    // 每一次請求都會到這個方法,一旦 req.session.user 設置值,全局都可以拿到
    // 直接傳遞給模板
    res.locals.user = req.session.user;
    next();
});

// 把 app 傳遞到 routes/index.js
router(app);

// 處理錯誤 4個參數
app.use(function(err,req,res,next){
    res.send('出錯了~')
});

app.listen(config.port);