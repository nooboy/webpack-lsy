const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtracPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

// 对css进行压缩优化，使用这个后，默认情况下js不会被压缩了，需要uglifyjs-webpack-plugin插件压缩js
const OptimizeCss = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/pages/Index/index.js',
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.resolve(__dirname,  'dist'),
  },
  devServer: {
    host: '127.0.0.1',
    progress: true,
    contentBase: './dist',
    open: true,
    inline: true,
    port: 3000,
    historyApiFallback: true,
    compress: true,
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
      filename: 'css/bundle.[hash:8].css'
    })

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

}
