const Mock = require('mockjs');
const util = require('./util');

module.exports = function (app) {
  // all可以监听get和post等
  app.all('/goods/list', function (req, res) {
    let json = util.getJsonFile('./goods.json');
    res.json(Mock.mock(json));
  });
}
