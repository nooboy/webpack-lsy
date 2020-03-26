const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtracPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

// 对css进行压缩优化，使用这个后，默认情况下js不会被压缩了，需要uglifyjs-webpack-plugin插件压缩js
const OptimizeCss = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/pages/Index/index.js',
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.resolve(__dirname,  'dist'),
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
  },  
  externals: {
    // 'jquery': 'jQuery'
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
                ["@babel/plugin-proposal-decorators", { "legacy": true }],
                ["@babel/plugin-proposal-class-properties", { "loose" : true }],
                ["@babel/plugin-transform-runtime"],
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
    new HtmlWebpackPlugin({
      title: 'lsyApp',
      template: 'template.html',
      filename: 'index.html',
      hash: true,
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,       
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),
    new MiniCssExtracPlugin({
      filename: 'bundle.[hash:8].css'
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

}
