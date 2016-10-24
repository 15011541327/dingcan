/*时间*/
var moment = require('moment');
/*md5加密*/
var md5 = require('blueimp-md5');
/*64位编码*/
var Base64 = require('js-base64').Base64;
/*请求*/
var request = require('request');

/*生成随机6位验证码*/
function randomCode(n) {
    var chars = ['0','1','2','3','4','5','6','7','8','9'];
    var res = '';
    for (var i = 0; i < n; i++) {
        var index = Math.ceil(Math.random()*9);// math.ceil():对数进行上舍入。
        res += chars[index];
    }
    return res;
}
exports.randomCode = randomCode;
console.log(randomCode(6));

/*发短信*/
function sendSms (phone, code, cb){
    

    //准备url
    /*REST API 验证参数，生成规则如下
    1.使用MD5加密（账户Id + 账户授权令牌 + 时间戳）。其中账户Id和账户授权令牌根据url的验证级别对应主账户。
    时间戳是当前系统时间，格式"yyyyMMddHHmmss"。时间戳有效时间为24小时，如：20140416142030
    2.SigParameter参数需要大写，如不能写成sig=abcdefg而应该写成sig=ABCDEFG
    */
  /*  var Base_URL = 'https://app.cloopen.com:8883';
    var accountSid = '8a216da85697f5420156a0ad92dc0679';
    var AUTH_TOKEN = '47ddd3b2ac424df191ffd43ac2dd6dfa';
    var time = moment().format('YYYYMMDDHHmmss');//时间格式
    console.log(time);
    var SigParameter = accountSid　+　AUTH_TOKEN +time;
    SigParameter = md5(SigParameter).toUpperCase();//string .toUpperCase();
    var url = Base_URL + '/2013-12-26/Accounts/'+accountSid+'/SMS/TemplateSMS?sig='+SigParameter ;
console.log('url='+url);*/
    var BASE_URL = 'https://app.cloopen.com:8883';
    var accountSid = '8a216da85697f5420156a0ad92dc0679';
    var AUTH_TOKEN = '47ddd3b2ac424df191ffd43ac2dd6dfa';
    var time = moment().format('YYYYMMDDHHmmss');
    console.log(time);
    //MD5加密（账户Id + 账户授权令牌 + 时间戳） 时间戳是当前系统时间，格式"yyyyMMddHHmmss" SigParameter参数需要大写
    var SigParameter = accountSid+AUTH_TOKEN+time;
    SigParameter = md5(SigParameter).toUpperCase();
    var url = BASE_URL+'/2013-12-26/Accounts/'+accountSid+'/SMS/TemplateSMS?sig='+SigParameter;
    //2. 准备发送请求的配置对象数据
    /*准备Authorization
    验证信息，生成规则详见下方说明
     1.使用Base64编码（账户Id + 冒号 + 时间戳）其中账户Id根据url的验证级别对应主账户
     2.冒号为英文冒号
     3.时间戳是当前系统时间，格式"yyyyMMddHHmmss"，需与SigParameter中时间戳相同。
     */
  /*  var Authorization = accountSid +':'+time;*/
    //base64编码
   /* Authorization = Base64.encode(Authorization);*/
    var Authorization =accountSid + ':' +time;
    Authorization = Base64.encode(Authorization);
    //请求体
 /*   短信模板示例：
云通讯提供的测试模板如下，其中 " {序号} " 为需要接口替换的变量，变量序号从(templateId)1开始，序号只允许数字；"【云通讯】" 为每条模板短信必须带的短信签名，在提交短信模板时请根据具体业务填写“签名“处的内容。
【云通讯】您使用的是云通讯短信模板，您的验证码是{1}，请于{2}分钟内正确输入 datas[{1},{2}]  "datas":["替换内容","替换内容"]
    例如：程序内指定 {1} = 8888；{2} = 10，则收到短信如下内容
【云通讯】您使用的是云通讯短信模板，您的验证码是8888，请于10分钟内正确输入
*/
   /* var body = {
        to:phone,
        appId:'8a216da85697f5420156a0ad93380680',
        templateId:'1',
        datas:[code ,'1']   /!*您的验证码是{1}，请于{2}分钟内正确输入*!/
    };*/
    var body = {
        to : phone,
        appId : '8a216da85697f5420156a0ad93380680',
        templateId : "1",
        datas : [code, '1']
    };
    /*var bodyJson = JSON.stringify(body);*/
    var bodyJson = JSON.stringify(body);
    var options = {
        url:url,
        method:'POST',
        headers:{
         'Accept':'application/json',
         'Content-Type':'application/json;charset=utf-8',
         'Content-Length':bodyJson.length+'',
         'Authorization':Authorization
         },
       /* headers : {
            "Accept" : 'application/json',
            'Content-Type' : 'application/json;charset=utf-8',
            'Content-Length' : bodyJson.length+"",
            'Authorization' : Authorization
        },*/
        json:true,// If json is true, then body must be a JSON-serializable object.
        body:body
    };
    console.log(bodyJson);
    console.log(bodyJson.length+'');
/*    var body = {
        to : phone,
        appId : '8a216da85697f5420156a0ad93380680',
        templateId : "1",
        datas : [code, '1']
    };
    var bodyJson = JSON.stringify(body);
    var options = {
        url : url,
        method : 'POST',
        headers : {
            "Accept" : 'application/json',
            'Content-Type' : 'application/json;charset=utf-8',
            'Content-Length' : bodyJson.length+"",
            'Authorization' : Authorization
        },
        json : true,
        body : body
    };*/
    //发送请求
    /*request(options,function (error, response, body) {
        console.log(body);
        cb(body.statusCode==='000000');
    });*/
    //发送请求
    request(options, function (err, httpResponse, body) {
        console.log(body);
        cb(body.statusCode==='000000');
    });
}
exports.sendSms = sendSms;





