// webpack是node书写的，所以要用node语法
const path = require('path');

module.exports = {
  mode: 'production',        // 两种模式：production、development
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',    // 打包后的文件名
    // filename: '[name].js',      // 多页输出方式
    path: path.resolve(__dirname,  'dist'),     // 打包后的路径，必须是一个绝对路径
  }
}
