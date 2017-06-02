// 创建服务 
const http = require('http');

http.createServer(function(req,res){
    res.end(123);
}).listen(80);