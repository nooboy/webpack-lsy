const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtracPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

// 对css进行压缩优化，使用这个后，默认情况下js不会被压缩了，需要uglifyjs-webpack-plugin插件压缩js
const OptimizeCss = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// 小插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',   // 很快定位识别到错误或警告的文件代码
  // entry: './src/pages/Index/index.js',      // 单页入口
  entry: {
    index: './src/pages/Index/index.js',
    list: './src/pages/List/index.js',
  },
  output: {
    // filename: 'bundle.[hash:8].js',     // 单页面
    filename: '[name].[hash:8].js',                       // 多页面应用不能再用指定的名称
    path: path.resolve(__dirname,  'dist'),
    publicPath: 'http://lsy.com',
  },
  devServer: {
    host: '127.0.0.1',
    progress: true,
    contentBase: './dist',
    // open: true,
    inline: true,
    port: 3000,
    historyApiFallback: true,
    compress: true,
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
  externals: {
    // 'jquery': 'jQuery'
  },

  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],  // 告诉 webpack 解析模块时应该搜索的目录
    extensions: ['.js', '.jsx', '.css', '.json'],   // 自动解析确定的扩展
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@pages': path.resolve(__dirname, 'pages'),
      '@common': path.resolve(__dirname, 'src/common'),
      '@static': path.resolve(__dirname, 'src/static'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    }
  },

  module: {
    rules: [
      {
        test: /\.(less|sass|css)$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              insert: 'head',
            }
          },
          MiniCssExtracPlugin.loader,
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
        test: /\.js$/,
        exclude: /node_modules/,
        include: [path.resolve(__dirname, 'src')],
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
        test: /\.js$/,
        exclude: /node_modules/,
        include: [path.resolve(__dirname, 'src')],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
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
            limit: 10,
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
    // new CleanWebpackPlugin(),   // 自动清空dist目录下文件
    new CopyWebpackPlugin([
      { from: './src/doc', to: './doc'},    // 目标目录是dist下的doc
    ]),
    new webpack.BannerPlugin('Author: lsy'),  // 打包的js文件头部加备注
    new webpack.DefinePlugin({        // 定义环境变量
      PRODUCTION: JSON.stringify(true),
      VERSIONS: JSON.stringify('5fa3b9'),
      BROWSER_SUPPORTS_HTML5: true,
      TWO: '1+1',
      'typeof window': JSON.stringify('object')
    }),
    new HtmlWebpackPlugin({
      title: '首页',
      template: 'template.html',
      filename: 'index.html',
      chunks: ['index'],
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
      filename: 'list.html',
      chunks: ['list'],
      hash: true,
    }),
    new MiniCssExtracPlugin({
      filename: 'css/bundle.[hash:8].css',      // 注意 css 前边没有斜线
    })

  ],

  optimization: {       // 优化项
    minimizer: [
      new OptimizeCss(),
      // new UglifyJsPlugin({
      //   cache: true,
      //   parallel: true,
      //   sourceMap: true
      // })
    ]
  }

};
