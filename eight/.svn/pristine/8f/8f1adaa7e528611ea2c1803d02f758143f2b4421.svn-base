/*菜品列表*/
var connection = require('./connection');
var mongoose = connection.mongoose;

var Schema = mongoose.Schema;
var mealSchema = new Schema({
    "group_id": Number,
    "groupName": String,
    "mealCode": String,
    "mealType": Number,
    "mealName": String,
    "price": Number,
    "originalPrice": Number,
    "picture": String,
    "instruction": String,
    "sales": Number,
    "state": String
});

var mealModel = mongoose.model('meal',mealSchema);

function getMeals(cb) {
    mealModel.find(cb);
}
exports.getMeals = getMeals;































