var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
  'productId': String,
  'productName': String,
  'productImage': String,
  'salePrice': Number,
  'checked': Boolean,
  'productNum': Number
});

module.exports = mongoose.model('Goods', productSchema, 'product'); // 记得第三个参数写上集合名字，否则默认是加s的
