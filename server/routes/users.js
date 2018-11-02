var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.get('/', function (req, res) {
  res.send('respond with a resource');
});

router.post('/login', function (req, res, next) {
  var params = {
    userName: req.body.userName,
    userPwd: req.body.userPwd
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
            userName: doc.userName
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
      result: req.cookies.userName || ''
    });
  } else {
    res.json({
      status: 1,
      message: '未登录'
    });
  }
});

module.exports = router;
