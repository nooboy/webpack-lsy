const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtracPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

const { NODE_ENV } = process.env;
const isProd  = NODE_ENV === 'prod';

module.exports = {
  // entry: './src/pages/Home/index.js',      // 单页入口
  entry: {
    home: path.resolve(__dirname, '../src/pages/Home/index.js'),
    list: path.resolve(__dirname, '../src/pages/List/index.jsx'),
  },
  output: {
    // filename: 'bundle.[hash:6].js',      // 单页面
    filename: '[name]/index.[hash:6].js',   // 多页面应用不能再用指定的名称
    path: path.resolve(__dirname,  '../dist'),
    // publicPath: 'http://lsy.com',
  },

  externals: {
    // 'jquery': 'jQuery'
    // 'react': 'react',
    // 'react-dom': 'react-dom'
  },

  resolve: {
    modules: [path.resolve(__dirname, '../src'), 'node_modules'],  // 告诉 webpack 解析模块时应该搜索的目录
    extensions: ['.js', '.jsx', '.css', '.json'],   // 自动解析确定的扩展
    alias: {
      '@src': path.resolve(__dirname, '../src'),
      '@pages': path.resolve(__dirname, '../pages'),
      '@common': path.resolve(__dirname, '../src/common'),
      '@static': path.resolve(__dirname, '../src/static'),
      '@utils': path.resolve(__dirname, '../src/utils'),
    }
  },

  module: {
    // noParse: /jquery|lodash/,  //接收正则、函数，不去解析这两个库的依赖
    noParse: content => /jquery|lodash/i.test(content),

    rules: [
      {
        test: /\.(less|sass|css)$/,
        use: [
          isProd ? MiniCssExtracPlugin.loader : 'style-loader',
          'css-loader',
          // 'postcss-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                autoprefixer(),
              ]
            }
          },
          'less-loader',
          'sass-loader',
        ]
      },

      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules|dist/,
        include: [path.resolve(__dirname, '../src')],
        use: [
          {
            loader: 'eslint-loader',
            options: {
              enforce: 'pre',
            }
          }
        ]
      },

      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|dist|lib)/,
        include: [path.resolve(__dirname, '../src')],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: [
                ['@babel/plugin-proposal-decorators', { 'legacy': true }],
                ['@babel/plugin-proposal-class-properties', { 'loose': true }],
                ['@babel/plugin-transform-runtime'],
              ]
            }
          }
        ]
      },

      // 暴露第三方模块到全局变量，这种方式太费事，不建议使用
      // {
      //   test: require.resolve('jquery'),
      //   use: 'expose-loader?$$$'
      // },

      {
        test: /\.(jpg|jpeg|png|svg|gif|bmp|webp)/,
        // use: 'file-loader',
        use: {
          loader: 'url-loader',   // 把图片转为 base64 位
          options: {
            limit: 8192 * 1000,
            outputPath: '/img/',
            publicPath: 'http://lsypic.com/img',  // 指定图片服务器，先build下
          }
        }
      },

      {
        test: /\.html$/,
        use: 'html-loader',
      }

    ]
  },

  plugins: [
    new webpack.DefinePlugin({        // 定义环境变量
      PRODUCTION: JSON.stringify(true),
      VERSIONS: JSON.stringify('5fa3b9'),
      BROWSER_SUPPORTS_HTML5: true,
      TWO: '1+1',
      'typeof window': JSON.stringify('object'),
    }),
    new CopyWebpackPlugin([
      { from: './src/doc', to: './doc' },    // 目标目录是dist下的doc
    ]),
    new webpack.BannerPlugin('Author: lsy'),  // 打包的js文件头部加备注
    new webpack.IgnorePlugin(/\.\/locale$/, /moment$/),
    new HtmlWebpackPlugin({
      title: '首页',
      template: 'template.html',
      filename: 'home/index.html',
      chunks: ['home', 'common'],
      hash: true,
      // minify: {    // 先不压缩html
      //   collapseWhitespace: true,
      //   removeComments: true,
      //   removeRedundantAttributes: true,
      //   removeScriptTypeAttributes: true,
      //   removeStyleLinkTypeAttributes: true,
      //   useShortDoctype: true
      // }
    }),
    new HtmlWebpackPlugin({
      title: '列表页',
      template: 'template.html',
      filename: 'list/index.html',
      chunks: ['list', 'common'],
      hash: true,
    }),
    new MiniCssExtracPlugin({
      filename: 'home/index.[hash:6].css',
      chunkFilename: 'home',
    }),
    new MiniCssExtracPlugin({
      filename: 'list/index.[hash:6].css',
      chunkFilename: 'list',
    }),

    new webpack.DllReferencePlugin({
      // context: __dirname,
      // name: path.resolve(__dirname, '../lib', 'dll_vendor.js'),
      name: 'vendor',
      // manifest: path.resolve(__dirname, '../lib', 'manifest.json'),
      manifest: require('../lib/vendor-manifest.json'),
    }),

    // new webpack.ProvidePlugin({
    //   'React': 'react',
    //   'ReactDOM': 'react-dom'
    // }),

  ],

  optimization: {

  },

};

