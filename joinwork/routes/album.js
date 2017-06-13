const express = require('express');
const router = express.Router();
const path = require('path');
const album = require('../model/album.js');
const formidable = require('formidable');

// 創建相冊接口
router.post('/create',function(req,res){
    var form = new formidable.IncomingForm();

    form.parse(req,function(err,fields,files){
        const obj = {
            name: fields.albumname
        }
        album.create(obj).then(function(doc){
            if(doc){
                return res.json({'msg':'創建成功!'});
            }else{
                return res.json({'msg':'創建失敗!'});
            }
        }).catch(function(err){
            return res.json({'msg':'創建失敗'});
        });
    });
});

// 上傳圖片接口
router.post('/upload',function(req,res){
    var form = new formidable.IncomingForm();

    form.uploadDir = path.join(__dirname,'..','upload');
    form.keepExtensions = true;
    form.parse(req,function(err,fields,files){
        // 拿到圖片的名字
        const photoname = path.basename(files.file.path);
        const obj = {
            name : fields.albumname
        } 
        album.findOne(obj).then(function(doc){
            // 如果存在就是找到了
            if(doc){
                // 往 photos 裡面添加照片
                doc.photos.push(photoname);
                // 數據庫保存
                // 1. err 錯誤
                // 2. 結果
                doc.save(function(err,result){
                    if(!err){
                        res.json({'msg':'添加成功!'});
                    }else{
                        res.json({'msg':'添加失敗!'});
                    }
                });
            }else{
                res.json({'msg':'不存在!'});
            }
        })
    });
});

module.exports = router;