const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FlowStatusWebpackPlugin = require('flow-status-webpack-plugin');

const PATHS = {
  client: path.join(__dirname, 'client'),
  dist: path.join(__dirname, 'dist'),
  style: path.join(__dirname, 'node_modules/bootstrap/dist/css/'),
};

module.exports = {
  entry: ['babel-polyfill', path.join(PATHS.client, '/index.jsx')],
  output: {
    path: PATHS.dist,
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'standard',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
        include: PATHS.style
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader?limit=10000'
      }, {
        test: /\.(eot|ttf|wav|mp3)$/,
        loader: 'file-loader'
      },
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'node_modules/html-webpack-template/index.ejs',
      title: 'Správa prihlášok',
      appMountId: 'app',
      inject: false
    }),
    new FlowStatusWebpackPlugin()
  ],

  devServer: {
    hot: true,
    inline: true,
    progress: true
  }
};
