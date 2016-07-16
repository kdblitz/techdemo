'use strict';
var webpack = require('webpack');
var path = require('path');

var PATHS = {};
PATHS.frontend = path.join(__dirname, 'frontend');
PATHS.myScripts = path.join(PATHS.frontend, 'scripts');
PATHS.destination = path.join(PATHS.frontend, 'bundle');
PATHS.bower = path.join(__dirname, 'bower_components');
console.log(PATHS.bower);

module.exports = {
  context: PATHS.myScripts,
  entry: './main',
  output: {
    path: PATHS.destination,
    filename: 'bundle.js'
  },
  resolve: {
    root: [PATHS.myScripts, PATHS.bower],
    extensions: ['', '.js']
  },
  module: {
    loaders: [ {
      test: /angular\.js$/,
      loader: 'exports?angular'
    }, {
      test: /\.js$/,
      loader: 'babel?presets[]=es2015',
      exclude: /node_modules|bower_components/
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.(eot|ttf|svg)$/,
      loader: 'file-loader'
    }, {
      test: /\.(woff|woff2)$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff'
    }, {
      test: /\.html$/,
      loader: 'html?attrs=false'
    }]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    )
  ]
};
