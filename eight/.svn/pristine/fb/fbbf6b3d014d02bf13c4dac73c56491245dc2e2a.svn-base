/*
* 操作feedback的集合
* */
var connection = require('./connection.js');
var mongoose = connection.mongoose;

//创建模式
var Schema = mongoose.Schema;
var feedbackSchema = new Schema({
    "user_id": String,
    "phone": String,
    "content": String,
    "create_time": {
        type : Date,   //类型
        default : Date.now() //默认值
    }
});
//创建模型
var feesModule = mongoose.model('feedback',feedbackSchema);
/*意见反馈*/
var addFeedBack = function (feed,cb) {
    new feesModule(feed).save(cb)
};
exports.addFeedBack = addFeedBack;