var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.get('/', function (req, res) {
  res.send('respond with a resource');
});

router.post('/login', function (req, res, next) {
  var params = {
    'userName': req.body.userName,
    'userPwd': req.body.userPwd
  };
  User.findOne(params, function (err, doc) {
    if (err) {
      res.json({
        status: 1,
        message: err.message
      });
    } else {
      if (doc) {
        res.cookie('userId', doc.userId, {
          path: '/',
          maxAge: 60 * 60 * 1000
        });
        res.cookie('userName', doc.userName, {
          path: '/',
          maxAge: 60 * 60 * 1000
        });
        res.json({
          status: 0,
          message: 'success',
          result: {
            userName: doc.userName,
            cartCount: doc.cartList.length
          }
        });
      }
    }
  })
});

router.get('/logout', function (req, res, next) {
  res.cookie('userId', '', {
    path: '/',
    maxAge: -1
  });
  res.cookie('userName', '', {
    path: '/',
    maxAge: -1
  });
  res.json({
    status: 0,
    message: 'success',
    result: ''
  });
});

router.get('/checkLogin', function (req, res, next) {
  if (req.cookies.userId) {
    res.json({
      status: 0,
      message: 'success',
      result: req.cookies.userId || ''
    });
  } else {
    res.json({
      status: 1,
      message: '未登录'
    });
  }
});

router.get('/cartList', function (req, res, next) {
  var params = {
    'userId': req.cookies.userId
  };
  User.findOne(params, function (err, doc) {
    if (err) {
      res.json({
        status: 1,
        message: err.message
      });
    } else {
      if (doc) {
        res.json({
          status: 0,
          message: 'success',
          result: doc.cartList
        });
      }
    }
  });
});

router.post('/deleteCart', function (req, res, next) {
  var userId = req.cookies.userId;
  var productId = req.body.productId;
  User.update({
    'userId': userId
  }, {
    $pull: { // $pull删除数组对应元素
      'cartList': {
        'productId': productId
      }
    }
  }, function (err, doc) {
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
});

router.post('/editCart', function (req, res, next) {
  var userId = req.cookies.userId;
  var productId = req.body.productId;
  var checked = req.body.checked;
  var productNum = req.body.productNum;
  User.update({
    'userId': userId,
    'cateList.productId': productId
  }, {
    $set: {
      'cartList.checked': checked,
      'cartList.productNum': productNum
    }
  }, function (err, doc) {
    if (err) {
      res.json({
        status: 0,
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
});

router.post('/checkAllCart', function (req, res, next) {
  var userId = req.cookies.userId;
  var isCheckAll = req.body.isCheckAll;
  User.findOne({'userId': userId}, function (err, userDoc) {
    if (err) {
      res.json({
        status: 1,
        message: err.message
      });
    } else {
      if (userDoc) {
        userDoc.cartList.forEach(function (item) {
          item.checked = isCheckAll;
        });
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
    }
  });
});

module.exports = router;
