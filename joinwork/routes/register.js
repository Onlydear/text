const express = require('express');
const router = express.Router();
const user = require('../model/user.js');
const md5 = require('md5');
const formidable = require('formidable');

// 註冊頁面
router.get('/',function(req,res){
    res.render('register.njk');
});

// 監聽註冊接口發送過來的請求
router.post('/',function(req,res){
    var form = new formidable.IncomingForm();

    form.parse(req,function(err,fields,files){

        // 獲取用戶名
    const username = fields.username;
    // 獲取密碼
    const password = fields.password;
    // 獲取確認密碼
    const repassword = fields.repassword;
        try{
            if(password != repassword){
                // 如果密碼兩次不一致就拋出一個錯誤
                throw new Error('密碼不一致!');
            }
            // 判斷用戶名
            if(username.length < 5 || username.length > 10){
                throw new Error('用戶名長度不符合要求!');
            }
        }catch (error){
            // 一旦有錯誤就進來這裡
            console.log(error)
            return res.json({'msg': error.message});
        }
        // 能到這裡就是條件都符合了
        const obj = {
            username: username,
            password: md5(password)
        }
        // then 插入數據之後干什麼事情(回調),catch 錯誤的回調
        user.insert(obj).then(function (doc) {
            res.json({ 'msg': '注册成功' });
        }).catch(function (err) {
            res.json({ 'msg': '注册失败' });
        })
    });
});

module.exports = router;