const fs = require('fs');
const path = require('path');

module.exports = {
  getJsonFile: function (filePath) {
    // 读取指定的json文件
    var json = fs.readFileSync(path.resolve(__dirname, filePath), 'utf-8')
    return JSON.parse(json);
  }
};
