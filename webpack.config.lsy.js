// webpack是node书写的，所以要用node语法
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',        // 两种模式：production、development
  entry: './src/index.js',
  output: {
    filename: 'bundle.[hash:8].js',    // 打包后的文件名，打包后的文件带上 hash
    path: path.resolve(__dirname,  'dist'),     // 打包后的路径，必须是一个绝对路径
  },
  devServer: {              // 配置开发服务器
    host: '127.0.0.1',      // 默认是localhost
    // progress: true,         // 打包过程中是否显示过程
    contentBase: './dist',  // 本地服务器所加载的页面所在的目录
    open: true,             // 自动打开页面
    inline: true,           // 文件有改动时自动刷新页面，实时刷新
    port: 3000,
    historyApiFallback: true,     // 在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    compress: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'lsyApp',              // 指定页面标题，以 template.html 为模板，在dist目录下生成 html 文件
      template: 'template.html',    // 指定使用的模板文件
      // 默认是生成 filename 是 index.html，访问路径是localhost:3000或localhost:3000/index.html。
      // 如果命名为其他名称，如 main.html，则访问路径是localhost:3000/main.html
      filename: 'index.html',       // 生成 html 的文件名为 index.html
      hash: true,                   // 让 html 引入的 js 或 css 末尾带上hash
      minify: {                                 // html 进行压缩
        collapseWhitespace: true,               // 合并空格
        removeComments: true,                   // 去掉注释
        removeRedundantAttributes: true,       
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),

  ]
}
