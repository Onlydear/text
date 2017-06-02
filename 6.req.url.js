const http = require('http');
http.createServer(function(req,res){
    if(req.url == '/'){
        req.url = '/index.html'
    }
    // req.url 拿到请求地址
    if(req.url == '/index.html'){
        res.end('index');
    }else if(req.url == '/haha'){
        res.end('haha');
    }else{
        res.writeHead(404,{'Content-type':'text/html'});
        res.end('404');
    }
}).listen(80);