const path = require('path');
const webpack = require('webpack');

const { NODE_ENV } = process.env;
const isProd  = NODE_ENV === 'prod';

module.exports = {
  mode: 'production',

  entry: {
    vendor: [
      'react',
      'react-dom',
    ],
  },

  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: 'dll_[name].js',
    library: '[name]',      // 产生这个文件的变量名
    // libraryTarget: 'var',     // 以何种模式生成打包文件（AMD CMD UMD VAR）
  },

  plugins: [
    new webpack.DllPlugin({
      context: __dirname,
      path: path.resolve(__dirname, '../lib', '[name]-manifest.json'),
      name: '[name]',         // 和library相同
    })
  ],

};
