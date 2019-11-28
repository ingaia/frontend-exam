var webpack = require('webpack');
var path    = require('path');
var config  = require('./webpack.config');

const ASSET_PATH = process.env.ASSET_PATH || '/';

config.output = {
  filename: '[name].bundle.js',
  publicPath: '/',
  path: path.resolve(__dirname, 'client')
};

config.plugins = config.plugins.concat([

  // Adds webpack HMR support. It act's like livereload,
  // reloading page after webpack rebuilt modules.
  // It also updates stylesheets and inline assets without page reloading.
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DefinePlugin({
    'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
  }),
]);

config.devServer = {
  contentBase: [path.resolve(__dirname, 'assets')],
}

module.exports = config;
