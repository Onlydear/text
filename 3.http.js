// 1. 导入模块
const http = require('http');
// 2. 创建服务
const server = http.createServer(function(req,res){
    // write可以使用多次,向客户端发送数据
    res.write('hehe');
    res.write('hehe');
    res.write('hehe');
    res.write('hehe');
    res.write('hehe');
    res.write('hehe');
    res.write('hehe');
    // 只能出现一次,而且必须放在最后
    res.end('haha');
});
// 启动并监听

server.listen(80,'192.168.8.127',function(){
    console.log('服务器成功启动并监听80端口');
});