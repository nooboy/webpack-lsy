const merge = require('webpack-merge');
const base = require('./webpack.base.js');

module.exports = merge(base, {
  mode: 'development',
  devtool: 'inline-source-map',   // 很快定位识别到错误或警告的文件代码
  devServer: {
    host: 'localhost',
    progress: true,
    contentBase: '../dist',
    // open: true,
    hot: true,
    inline: true,
    port: 3000,
    historyApiFallback: true,
    compress: true,   // 是否开启webpack服务端压缩
    // 1. 跨域：代理
    proxy: {
      '/api/list': 'http://localhost:3001',
      // '/api':{
      //   target: 'http://localhost:3001',
      //   pathRewrite: { '/api':'' } // 把/api 替换为空
      // }
    },
    // 2. 跨域：模拟数据
    // before (app) {
    //   app.get('/api/list', (req, res) => {
    //     res.json({ data: '模式数据方式解决跨域' })
    //   })
    // }
  },
});

