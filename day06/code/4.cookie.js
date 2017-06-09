const express = require('express');
const app = express();
// 使用cookie要导入模块
const cookieParser = require('cookie-parser');


// 配置使用cookie-parser
app.use(cookieParser());
app.get('/',function(req,res){

    // 给客户端下发cookie
    // res.cookie('name','灰太狼',{maxAge:7 *24 * 60 * 3600}); //单位时间是毫秒
    // 获取客户端发过来的cookie
    console.log(req.cookies.name);
    res.send('hhhhh~');
});

app.listen(80);