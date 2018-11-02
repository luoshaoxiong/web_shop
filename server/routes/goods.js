var express = require('express');
var router = express.Router();
var Goods = require('../models/goods');
var mongoose = require('mongoose');

/* GET home page. */
// router.get('/goods', function (req, res) {
//   res.render('goods', { title: 'Express' });
// });

// 连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/webShop');

mongoose.connection.on('connected', function () {
  console.log('MongoDB connected success');
});

mongoose.connection.on('error', function () {
  console.log('MongoDB connected fail');
});

mongoose.connection.on('disconnected', function () {
  console.log('MongoDB connected disconnected');
});

router.get('/list', function (req, res, next) {
  var params = {
    page: req.body.page,
    pageSize: req.body.pageSize,
    sort: req.body.sort,
    priceRange: req.body.priceRange
  };
  console.log(666, Goods.find());
  Goods.find(params, function (err, doc) {
    if (err) {
      res.json({
        status: 1,
        message: err.message
      });
    } else if (doc) {
      res.json({
        status: 0,
        message: 'success',
        result: doc
      });
    }
  });
});

module.exports = router;
