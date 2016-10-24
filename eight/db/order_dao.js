var connection = require('./connection');
var mongoose = connection.mongoose;

var orderSchema = new mongoose.Schema({
    /*"user_id": String,
    "contactor": String,
    "address": String,
    "phone": String,
    "total_money": Number,
    "doorplate": String,
    "remark": String,
    "arrive_time": Date,
    "detail": String*/
    "contactor": String,
    "address": String,
    "phone": String,
    "rstName": String,
    "remark": String,
    "doorplate": String,
    "total_money": Number,
    "peisongfei": Number,
    "state": Number,
    "arrive_time": Date,
    "detail": String,
    "user_id": String,
    "coupon_id": String
});

var orderModel = mongoose.model('order',orderSchema);

//保存
function addOrder(order,cb) {
    new orderModel(order).save(cb);
}
exports.addOrder = addOrder;
//查找一个
function getOrderById(id,cb) {
    orderModel.findOne({_id:id},cb);
}
exports.getOrderById = getOrderById;
//查找
function getOrdersByUserId(userId,cb) {
    orderModel.find({user_id:userId},cb);
}
exports.getOrdersByUserId = getOrdersByUserId;