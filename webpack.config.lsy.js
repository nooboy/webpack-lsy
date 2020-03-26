const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
          'css-loader',
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

  ]
}
