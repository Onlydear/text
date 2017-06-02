const http = require('http');

let a  = 0;
// 回调方法是每一次请求都会进来
const server = http.createServer(function(req,res){
    // 获取url
    // req.url 能获取到客户端发送的请求地址
    if(req.url == '/favicon.ico'){
        return;
    }
    res
    .writeHead(200,{'Content-type':'text/html;charset=utf-8'})
    res.end('哈哈');
});
server.listen(80);