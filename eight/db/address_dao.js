/*
* 添加地址
* */
var connection = require('./connection');
var mongoose = connection.mongoose;

/*
测试
connection.connect();
 function callback(error, result) {
 console.log(error, result);
 }*/
//创建Schema
var Schema = mongoose.Schema;
var addSchema = new Schema({
    "address": String,
    "contactor": String,
    "lat": String,
    "lng": String,
    "phone": String,
    "sex": Number,
    "state": Number,
    "userId": String,
    "cityId": String,
    "doorplate": String
});
//创建Model
var addModel = mongoose.model('address',addSchema);
//添加
var addAddr = function (address,cb) {
    new addModel(address).save(cb);
};
exports.addAddr = addAddr;
/*vaddAddr( {  //57ae7cc4c308e51c2bc42654
    "address": "昌平北清路",
    "contactor": "花花",
    "lat": "39.993851111808",
    "lng": "116.31838249961 ",
    "phone": "17711111111",
    "sex": 1,
    "state": 1,
    "userId": "575f7085f8a14116283dabc7",
    "cityId": "113",
    "doorplate": "尚硅谷大楼"
}, callback);*/
//查询
var getAddrsByUserId = function (userId,cb) {
    addModel.find({userId:userId},cb)
};
exports.getAddrsByUserId = getAddrsByUserId;
/*getAddrsByUserId('575f7085f8a14116283dabc7', callback);*/

//更新
var updateAddr = function (address,cb) {
    addModel.update({_id:address._id},address,cb);
};
exports.updateAddr = updateAddr;

//删除
var deleteAddrById = function (id,cb) {
    addModel.remove({_id:id},cb);
};
exports.deleteAddrById = deleteAddrById;

//得到用户默认地址
var getDefaultAddr = function (userId,cb) {
    addModel.findOne({userId:userId},cb);
};
exports.getDefaultAddr = getDefaultAddr;


































