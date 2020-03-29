// 1. 代理方式：服务端代码
const express = require('express');
const app = express();

app.get('/api/list', (req, res) => {
  res.json({ data: '代理方式解决跨域' });
});

app.listen(3001, function() {
  console.log('Server listening on port 3001...');
});

// 3. 使用webpack中间件启动服务
// const express = require('express');
// const webpack = require('webpack');
// const webpackDevMiddleware = require('webpack-dev-middleware');

// const app = express();
// const config = require('./webpack.config.lsy.js');
// const compiler = webpack(config);

// // Tell express to use the webpack-dev-middleware and use the webpack.config.js configuration file as a base.
// // app.use(webpackDevMiddleware(compiler));
// app.use(webpackDevMiddleware(compiler, {
//   publicPath: config.output.publicPath
// }));

// app.get('/api/list', (req, res) => {
//   res.json({ data: '使用服务端webpack...' });
// });

// app.listen(3000, function () {
//   console.log('Server listening on port 3001...');
// });

