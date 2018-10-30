var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/goods', function (req, res) {
  res.render('goods', { title: 'Express' });
});

module.exports = router;
