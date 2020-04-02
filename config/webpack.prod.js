const merge = require('webpack-merge');
const base = require('./webpack.base.js');
// 对css进行压缩优化，使用这个后，默认情况下js不会被压缩了，需要uglifyjs-webpack-plugin插件压缩js
const OptimizeCss = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(base, {
  mode: 'production',

  plugins: [
    // new CleanWebpackPlugin(),   // 自动清空dist目录下文件
  ],

  optimization: {       // 优化项
    minimizer: [
      new OptimizeCss(),
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      })
    ]
  }
});
