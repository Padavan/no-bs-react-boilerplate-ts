const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: './app/index.tsx',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  resolve: {
    modules: [
      path.join(__dirname, 'app'),
      'node_modules'
    ]
  },
  optimization: {
    nodeEnv: 'development'
  },
  devServer: {
    historyApiFallback: true,
    inline: true,
    hot: true,
    hotOnly: true,
    compress: true,
    https: false,
    proxy: {
      '/shared': 'http://api:3333/',
    }
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        enforce: 'pre',
        exclude: ['/node_modules/'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  plugins:
  [
    new HtmlWebpackPlugin({
      template: './app/index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
};
