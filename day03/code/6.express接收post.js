const express = require('express');
const app = express();

// bodyParser 没有能力处理文件,只能处理简单的数据
const bodyParser = require('body-parser');

// 配置body-Parser
// 处理 x-www-form-urlencoded
app.use(bodyParser.urlencoded({extend:true}));
// 处理application/json
app.use(bodyParser.json());

// 接收post请求的参数
app.post('/',function(req,res){
    // req.body就能直接获取post请求
    console.log(req.body);
    res.send();
});

app.listen(80);