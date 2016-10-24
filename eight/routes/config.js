/*总路由*/
var express = require('express');
var router = express.Router();

var user = require('./user.js');
var order = require('./order.js');
var index = require('./index.js');
var address = require('./address.js');

user(router);
order(router);
index(router);
address(router);

module.exports = router;









