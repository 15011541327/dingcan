/*轮播图*/
var connection  = require('./connection');
var mongoose = connection.mongoose;

var Schema = mongoose.Schema;
var bannerSchema = new Schema({
    "img_src":String,
    "link": String,
    "sort": Boolean
});

var bannerModel = mongoose.model('index_banner',bannerSchema);
function getBanner(cb) {
    bannerModel.find(cb);
}
exports.getBanner = getBanner;












































