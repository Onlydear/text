const mongoose = require('mongoose');
const config = require('config-lite')(__dirname);
mongoose.Promise = require('bluebird');
const db = mongoose.createConnection(config.mongodbURL);

module.exports = db;