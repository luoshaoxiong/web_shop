var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
  'productId': String,
  'productName': String,
  'productImage': String,
  'salePrice': Number
});

module.exports = mongoose.model('Goods', productSchema);
