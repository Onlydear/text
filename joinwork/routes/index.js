const register = require('./register.js');
const login = require('./login.js');
const album = require('../model/album.js');
const albumRouter = require('./album.js');
const isLogin = require('../Middleware/check.js').isLogin;
const isNotLogin = require('../Middleware/check.js').isNotLogin;
module.exports = function (app) {

    // 管理员页面
    app.get('/admin', isLogin, function (req, res, next) {
        if (!req.session.user) {
            return res.redirect('/login');
        }
        next();
    }, function (req, res) {
        // 查找所有的相冊
        album.find().exec(function (err, docs) {
            // 把从数据库中获取的数组传递给页面
            return res.render('admin.njk', { 'albumArr': docs });
        });
    });

    // 把外部的 app 傳遞到這裡
    // 監聽根目錄
    app.get('/', function (req, res) {
        // 查找所有的相冊
        album.find().then(function (docs) {
            // 把從數據庫中獲取的數組傳遞給頁面
            return res.render('index.njk', { 'albumArr': docs });
        });
    });

    // 註銷接口
    app.get('/loginout', isLogin, function (req, res) {
        req.session.user = null;
        return res.send('註銷成功~');
    });

    // 登录相关
    app.use('/login', login);
    // 注册相关
    app.use('/register', register);
    // 相册相关
    app.use('/album', albumRouter);

    //   訪問某個相冊
    app.get('/:name', function (req, res) {
        // 谷歌的小東西
        if (req.url == '/favicon.ico') { return }

        // 拿到相冊名訪問數據庫
        const obj = {
            name : req.params.name
        }
        // 查找指定相冊名的數據
        album.findOne(obj).then(function (doc) {
            return res.render('photos.njk', { 'photos': doc.photos })
        }).catch(function (err) {
            return res.send('相冊不存在!');
        });
    });
}