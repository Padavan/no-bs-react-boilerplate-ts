const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    app: './app/index.tsx',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    modules: [
      path.join(__dirname, 'app'),
      'node_modules'
    ]
  },
  performance: {
    hints: 'warning',
    maxAssetSize: 200000,
  },
  optimization: {
    noEmitOnErrors: true,
    nodeEnv: 'production',
  },
  stats: {
    assets: true,
    colors: true,
    errors: true,
    errorDetails: false,
    hash: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html',
      inject: 'body',
      filename: 'client.html'
    }),
  ],
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
      },

    ]
  }
};
