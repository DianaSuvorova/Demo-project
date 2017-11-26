var path = require('path');
var testHelperPath = path.resolve('test/testHelper.js')

module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    basePath: '../',
    singleRun: true,
  })
}
