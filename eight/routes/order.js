/*
* addOrder
* getOrderById
* getOrdersByUserId
*/
var db = require('../db/db.js');
var moment = require('moment');
module.exports = function (router) {
    //获取用户默认地址
    router.get('/order/getNewestAddress',function (req,res,next) {
        var userId = req.query.userId;
        db.getDefaultAddr(userId,function (address) {
            if(address == null){
                res.send({code:1});
            }else{
                res.send({
                    code:0,
                    data:address
                })
            }
        })
    });
    //向数据库添加订单
    router.post('/order/createOrder',function (req,res,next) {
        var order = req.body.order;
        order.state = 3;   //设置订单的状态
        db.addOrder(order,function (result) {
            res.send({
                code:0,
                data:result
            })
        })
    });
    //订单完成页面
    router.get('/order/detail/:id',function (req,res,next) {
        var id = req.params.id;
        console.log(id);
        db.getOrderById(id,function (order) {
            var stateText = null;
            switch(order.state) {
                case 0:
                    stateText = '待支付';
                    break;
                case 1:
                    stateText = '已付款';
                    break;
                case 2:
                    stateText = '';
                    break;
                case 3:
                    stateText = '已完成';
                    break;
                case 4:
                    stateText = '店铺拒单';
                    break;
                case 5:
                    stateText = ' 商家已接单';
                    break;
                case 6:
                    stateText = '已退单';
                    break;
                case 7:
                    stateText = '未支付的取消订单';
                    break;
                case 8:
                    stateText = '订单异常';
                    break;
                case 9:
                    stateText = '退单中';
                    break;
                case 10:
                    stateText = '商家拒绝退单';
            }
            //添加一个属性，在页面中显示
            order.stateText = stateText;
            //修改一个已有的属性值（必须通过_doc属性操作）
            order._doc.arrive_time = moment(order.arrive_time).format('YYYY-MM-DD HH:mm');
            order._doc.detail = JSON.parse(order.detail);

           res.render('orderDetail',{data:order});
        })
    });

};
