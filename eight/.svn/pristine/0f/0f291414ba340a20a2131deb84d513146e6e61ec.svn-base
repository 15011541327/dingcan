/**
 * Created by wangtiantian on 2016/8/12.
 */
var db = require('../db/db.js');
module.exports = function (router) {
    //地址:
    //getAddrsByUserId?userId=576bbe0aa1d183c42c06c08e
    router.get('/getAddrsByUserId',function (req,res,next) {
        var userId = req.query.userId;
        db.getAddrsByUserId(userId,function (addrArr) {
            res.send({
                code:0,
                data:addrArr
            })
        });
    });
    //地址: /insertAddr?address=%7B%22userId%22:%22576bbe0aa1d183c42c06c08e%2
    router.get('/insertAddr',function (req,res,next) {
        var address = JSON.parse(req.query.address);
        db.addAddr(address,function (address) {
            res.send({
                code:0,
                data:address
            })
        })
    });
    //修改地址:updateAddr?address=%7B%22_id%22:%22576bc242b20ba0b02ed9c5cc%22,%22userId%22:%22576
    router.get('/updateAddr',function (req,res,next) {
        var address = JSON.parse(req.query.address);
        db.updateAddr(address,function (msg) {
            res.send({
                code : 0,
                data : msg
            });
        })
    });
    //地址:deleteAddr?_id=576bc242b20ba0b02ed9c5cc
   router.get('/deleteAddr',function (req,res,next) {
       var id = req.query._id;
       db.deleteAddrById(id,function (msg) {
           res.send({
               code : 0,
               data : msg
           });
       })
   })
};




















