const express = require('express');
const laoshi = require('./laoshi.js');
const xuesheng = require('./xuesheng.js');
const news = require('./news.js');

const app = express();
// 监听laoshi的路由
app.use('/laoshi',laoshi);

// 监听xuesheng的路由
app.use('/xuesheng',xuesheng);

app.use('/news',news);

app.listen(80);