// 1.导入模块
const http = require('http');
// 2.创建服务
const server = http.createServer(function(req,res){

    // 给客户端指定编码格式和网页状态码
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8;'});
    res.write('哈哈哈');
    res.end();
});
// 3.启动服务
// 参数2 默认就是本机地址
// 参数3 默认也可以不要
server.listen(80)