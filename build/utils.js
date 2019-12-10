var path = require('path')
exports.assetsPath = function (_path) {
  console.log('dsddsds', _path)
  const assetsSubDirectory = 'static' 
  return path.posix.join(assetsSubDirectory, _path)
}