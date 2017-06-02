// 导入模块
const randomstring = require('randomstring');

for(var i=0;i<5;i++){
    console.log(randomstring.generate({
        length:10,
        charset:'alphanumeric'
    }));
}
// length:长度
// charset:
//          alphanumeric - [0-9 a-z A-Z]
//          alphabetic - [a-z A-Z]
//          numeric - [0-9]
//          hex - [0-9 a-f]