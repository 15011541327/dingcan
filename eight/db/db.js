/*
*总数据处理
*/
var dao = require('./user_dao');
var feed_dao = require('./feedback_dao.js');
var address_dao = require('./address_dao');
var banner_dao = require('./banner_dao');
var meal_dao = require('./meal_dao');
var order_dao = require('./order_dao');
var db = {
    //添加用户
    addUser:function (phone,fn) {//{phone:phone}
        dao. addUser(phone,function (err,user) {
            if(err){
                throw err;
            }else{
                fn(user);
            }
        })
    },
    //根据手机查询用户
    getUserByPhone:function (phone,fn) {
        dao.getUserByPhone(phone,function (err,user) {
            if(err){
               throw err;
            }else{
                fn(user);
            }
        })
    },
    //添加个人意见
    addFeedBack:function (feed,fn) {
        feed_dao.addFeedBack(feed,function (err,feed) {
            if(err){
                throw err;
            }else{
                fn(feed);
            }
        })
    },
    //地址的增删改查
    addAddr:function (address,fn) {
        address_dao.addAddr(address,function (err,address) {
            if(err){
                throw err;
            }else{
                fn(address);
            }
        })
    },
    getAddrsByUserId:function (userId,fn) {
        address_dao.getAddrsByUserId(userId, function (err,addrArr) {
            if(err){
                throw  err;
            }else{
                fn(addrArr);
            }
        })
    },
    updateAddr:function (address,fn) {
        address_dao.updateAddr(address,function (err,msg) {
            if(err){
                throw err;
            }else{
                fn(msg);
            }
        })
    },
    deleteAddrById:function (id,fn) {
        address_dao.deleteAddrById(id,function (err,msg) {
            if(err){
                throw err;
            }else{
                fn(msg);
            }
        })
    },
    //轮播图
    getBanner:function (fn) {
        banner_dao.getBanner(function (err,banners) {
            if(err){
                throw err;
            }else{
                fn(banners);
            }
        })
    },
    //获取菜品列表、地址
    getMeals:function (fn) {
        meal_dao.getMeals(function (err,meals) {
            if(err){
                throw err;
            }else{
                fn(meals);
            }
        })
    },
    //获取默认地址
    getDefaultAddr:function (userId,fn) {
        address_dao.getDefaultAddr(userId,function (err,address) {
            if(err){
                throw err;
            }else{
                fn(address);
            }
        })
    },
    //存订单
    addOrder:function (order,fn) {
        order_dao.addOrder(order,function (err, order) {
            if (err) {
                throw err;
            } else {
                fn(order);
            }
        })
    },
    //获取某一个订单
    getOrderById:function (id,fn) {
        order_dao.getOrderById(id,function (err,order) {
            if(err){
                throw err;
            }else{
                fn(order);
            }
        })
    },
    //获取当前用户的所有订单
    getOrdersByUserId:function (userId,fn) {
        order_dao.getOrdersByUserId(userId,function (err,orders) {
            if(err){
                throw err;
            }else{
                fn(orders);
            }
        })
    }




};
module.exports = db;




























