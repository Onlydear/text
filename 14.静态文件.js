const http = require('http');
const fs = require('fs');
const path = require('path');

// 创建一个http服务
// 一个完整的http请求必须要有请求和响应
const server = http.createServer(function(request,response){
    if(request.url == '/bd_logo1.png'){
        fs.readFile('./bd_logo1.png',function(err,data){
            response.end(data);
        });
    }
    fs.readFile('./01.html',function(err,data){
        response.end(data);
    })
});

server.listen(80);