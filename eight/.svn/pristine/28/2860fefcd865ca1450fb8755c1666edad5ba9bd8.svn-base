/*
*分路由
*/
//数据库处理
var db = require('../db/db.js');
var sms_unitls = require('../unitls/sms_unitls.js');
module.exports = function (router) {
    //登录请求
    router.post('/login',function (req,res,next) {
        var phone = req.body.phone;
        var code = req.body.code;

        //检查code(验证码)是否正确
        var saveCode = users[phone];
        if(saveCode !== code){
            res.send({
                code :1,
                data:'验证码错误！'
            });
            return;
        }

        //根据phone查找,判断用户是否存在
        db.getUserByPhone(phone,function (user) {
            //判断用户是否存在
            if(user == null){
                db.addUser(phone,function (user) {
                    res.send({
                        code:0,
                        data:user
                    })
                })
            }else{
                res.send({
                    code:0,
                    data:user
                })
            }
        })

    });
    //存储所有生成了code的用户信息
    var users = {};
    router.get('/sendcode',function (req,res,next) {
        var phone = req.query.phone;
        //生成一个6位数的随机值（验证码）
        var code = sms_unitls.randomCode(6);

        //发短信
        sms_unitls.sendSms(phone,code,function (success) {
            if(success){
                users[phone] = code;
            }
        })
    });


    //提交意见
    router.get('/feedback',function (req,res,next) {
        var feedJson = req.query.data;
        var feed = JSON.parse(feedJson);
        db.addFeedBack(feed,function (feed) {
            res.send({
                code: 0,
                data:feed
            })
        })
    })
};


















