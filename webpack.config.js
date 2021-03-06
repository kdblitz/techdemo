'use strict';
var webpack = require('webpack');
var path = require('path');
var ProvidePlugin = require('webpack/lib/ProvidePlugin');
var autoprefixer = require('autoprefixer');

var PATHS = {};
PATHS.frontend = path.join(__dirname, 'frontend');
PATHS.myScripts = path.join(PATHS.frontend, 'scripts');
PATHS.bower = path.join(__dirname, 'bower_components');
console.log(PATHS.bower);

module.exports = {
  context: PATHS.myScripts,
  entry: './main',
  output: {
    path: PATHS.frontend,
    filename: 'bundle.js'
  },
  resolve: {
    root: [PATHS.myScripts, PATHS.bower],
    extensions: ['', '.js', '.less']
  },
  module: {
    loaders: [ {
      test: /angular\.js$/,
      loader: 'exports?angular'
    }, {
      tests: /bootstrap\.js$/,
      loader: 'imports?jQuery=jquery'
    }, {
      test: /\.js$/,
      loader: 'babel?presets[]=es2015',
      exclude: /node_modules|bower_components/
    }, {
      test: /\.css$/,
      loader: 'style!css!postcss-loader?sourceMap'
    }, {
      test: /\.less$/,
      loader: 'style!css?sourceMap!postcss-loader?sourceMap!less?sourceMap'
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
  postcss: function () {
    return [autoprefixer];
  },
  devtool: 'source-map',
  plugins: [
    new ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery'
    }),
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    )
  ]
};
