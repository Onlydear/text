// 要创建一个服务器.就要用http模块
// 所有的操作都要程序员自己写.Apache安装就能用,但是node并不是
// 手工创建一个http服务器

// 1.导入http(就是要用到http模块里的功能)
// 要用到谁必须导入谁
const http = require('http');

// 2.创建一个http服务
// 一个完整的http请求必须要有请求和响应
const server = http.createServer(function(require,response){
    // request -> 请求,客户发送给服务器的
    // response -> 响应,服务器给客户端的响应

    // 一定要有,而且只能出现一个.告诉客户端响应已经结束
    response.end('<h1>hello</h1>');
})

// 3.启动服务
// 参数1.端口自己写
// 参数2.监听的ip地址
// 参数3.回调 -> 当服务器成功启动,就会执行的方法
server.listen(8080,'192.168.8.130',function(){
    console.log('服务器成功启动并监听8080端口');
});