// 导入模块
// 1.先创建一个服务
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const server = http.createServer(function(req,res){
    // 谷歌浏览器的小东西
    if(url == '/favicon.ico'){return}

    // 1.1 先获取到用户访问的url
    const pathname = url.parse(req.url).pathname;

    // 获取扩展名
    const extname = path.extname(pathname);
    // 通过扩展名找到对应的mime类型
    getMime(extname,function(mime){
        fs.readFile(path.join(__dirname,'demo',pathname),function(err,data){
            // 当读取到文件的时候
            if(!err){
                res.writeHead(200,{'Content-type':`${mime}};charset=utf-8;`});
                res.end(data);
            }else{
                res.end('404');
            }
        });
    });
    //通过pathname去读取文件 
    
});

// 通过扩展名获取指定的mime类型
function getMime(extname,callback){
    // 读取json文件
    fs.readFile(path.join(__dirname,'mime.json'),function(err,data){
        if(!err){
            // 把读取到的内容转成json
            const jsonObj = JSON.parse(data.toString());
            // 通过扩展到json里取出对应的值
            const ext = jsonObj[extname];
            // 调用callback相当于执行了上面传过来的函数,
            // 函数需要一个参数,所以我们这里要传递一个参数
            callback(ext);
        }
    })
}
server.listen(80);