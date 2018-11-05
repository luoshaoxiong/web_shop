var express = require('express');
var router = express.Router();
var Goods = require('../models/goods');
var User = require('../models/user');
var mongoose = require('mongoose');

/* GET home page. */
// router.get('/goods', function (req, res) {
//   res.render('goods', { title: 'Express' });
// });

// 连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/webShop', {useNewUrlParser: true});

mongoose.connection.on('connected', function () {
  console.log('MongoDB connected success');
});

mongoose.connection.on('error', function () {
  console.log('MongoDB connected fail');
});

mongoose.connection.on('disconnected', function () {
  console.log('MongoDB connected disconnected');
});

router.post('/list', function (req, res, next) {
  let currentPage = req.body.currentPage;
  let pageSize = req.body.pageSize;
  let sortType = req.body.sortType;
  let priceStart = req.body.priceStart;
  let priceEnd = req.body.priceEnd;

  let goodsModel = Goods.find({
    salePrice: {
      $gt: priceStart,
      $lte: priceEnd
    }
  }).skip((currentPage - 1) * pageSize).limit(pageSize);
  if (sortType !== 0) {
    goodsModel = goodsModel.sort({'salePrice': sortType});
  }

  goodsModel.exec(function (err, doc) {
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

router.post('/add', function (req, res, next) {
  let id = req.body.productId;
  let userId = req.body.userId;
  // 如果购物车里已存在，则直接数量加一；否则插入新的商品数量为一
  User.findOne({userId: userId}, function (err, userDoc) {
    if (err) {
      res.json({
        status: 1,
        message: err.message
      });
    } else {
      var product = null;
      userDoc.cartList.forEach(function (item) {
        if (item.productId === id) {
          product = item;
          item.productNum++;
        }
      });

      if (product) {
        userDoc.save(function (err, doc) {
          if (err) {
            res.json({
              status: 1,
              message: err.message
            });
          } else {
            res.json({
              status: 0,
              message: 'success',
              result: ''
            });
          }
        });
      } else {
        Goods.find({productId: id}, function (err, productDoc) {
          if (err) {
            res.json({
              status: 1,
              message: err.message
            });
          } else {
            productDoc.productNum = 1;
            productDoc.checked = true;
            userDoc.cartList.push(productDoc);
            userDoc.save(function (err, doc) {
              if (err) {
                res.json({
                  status: 1,
                  message: err.message
                });
              } else {
                res.json({
                  status: 0,
                  message: 'success',
                  result: ''
                });
              }
            });
          }
        })
      }
    }
  });
});

module.exports = router;
