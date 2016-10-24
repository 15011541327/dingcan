/*分数据处理
* mongoose
* connect
* disconnect
*/
var mongoose = require('mongoose');
exports.mongoose = mongoose;

var connect = function () {
    //连接数据库
    mongoose.connect('mongodb://127.0.0.1/atguigu_o2o');
    //获取连接对象
    var conn = mongoose.connection;
    //conn的监听
    conn.on('open',function () {
        console.log('conn opend');
    });
    conn.on('error',function () {
        console.log('conn error');
    });
    conn.on('close',function () {
        console.log('conn closed');
    })

};
exports.connect = connect;
var disconnect = function () {
    mongoose.disconnect();
};
exports.disconnect = disconnect;


























