const express = require('express');
const router = express.Router();
const user = require('../model/user.js');
const md5 = require('md5');
const formidable = require('formidable');
const isNotLogin = require('../Middleware/check.js').isNotLogin;

// 首頁
router.get('/',isNotLogin,function(req,res){
    res.render('login.njk');
});

// 監聽登錄接口
router.post('/',function(req,res){
    console.log(req.fields);
    var form = new formidable.IncomingForm();
    
    form.parse(req,function(err,fields,files){
        // 獲取用戶名
        const username = fields.username;
        // 密碼
        const password = fields.password;

        // 查找用戶是否存在
        user.find({'username':username}).then(function(doc){
            if(doc){
                // 判斷密碼
                if(doc.password == md5(password)){
                    // 如果密碼一致就設置 session
                    req.session.user = doc;
                    return res.json({'msg':'登錄成功!'});
                }else{
                    return res.json({'msg':'密碼錯誤!'});
                }
            }else{
                return res.json({'msg':'用戶名不存在!'});
            }
        }).catch(function(err){
            res.json({'msg':'登錄失敗!'});
        })
    });
});

module.exports = router;