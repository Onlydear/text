module.exports = {
    title:'開始遊戲',
    port: 80,
    mongodbURL: 'mongodb://localhost:27017/album',
    session:{
        resave: false,
        saveUninitialized: false,
        secret: 'dashen',
        maxAge:7*24*3600*1000
    }
}