/*
*分数据处理
*查找
*添加
*/
var connection = require('./connection');
var mongoose = connection.mongoose;




//测试 start
/*connection.connect();
 function cb(err, result) {
 console.log('err='+err+" result="+result);
 }*/
//测试 end
//创建模式Schema
var Schema = mongoose.Schema;
var userSchema = new Schema({
    phone:String
});

//创建模型userModel
var userModel = mongoose.model('user',userSchema);

//定义函数
var getUserByPhone = function (phone,cb) {
    userModel.findOne({phone:phone},cb);
};
exports.getUserByPhone = getUserByPhone;
/*getUserByPhone('13201010101', cb);*/


var addUser = function (phone,cb) {
    new userModel({phone:phone}).save(cb);
};
exports.addUser = addUser;
/*addUser({phone:'12312312312'}, cb);*/


























