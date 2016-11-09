var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const PATHS = {
  root: __dirname,
  server: path.join(__dirname, '../', 'src', 'server'),
  templates: path.join(__dirname, '../', 'src', 'server', 'templates'),
  output: path.join(__dirname, '../', 'build'),
};

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

var webpackConfig = {

    name: 'server',

    resolve: {

      root: PATHS.root,

      extensions: ['', '.js', '.jsx'],

      modulesDirectories: [
        'node_modules',
        PATHS.server,
      ],

    },

    node: {
      __dirname: false,
      console: 'empty',
      dns: 'empty',
      fs: 'empty',
      net: 'empty',
      tls: 'empty'
    },

    entry: {
      server: ['index'],
    },

    output: {
      path: PATHS.output,
      filename: '[name].js',
    },

    target: 'node',

    externals: nodeModules,

    module: {
      noParse: [
          /lodash/,
          /nunjucks\-slim/
      ],

      loaders: [
        {
          test: /\.js$|\.jsx$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        },
        {
          // jinja/nunjucks templates
          test: /\.(njk|nunj|nunjucks)?$/,
          exclude: /node_modules/,
          loader: 'jinja-loader',
          query: {
              root: PATHS.templates
          }
        },
        {
          test: /\.(njk|nunj|nunjucks)?$/,
          exclude: /node_modules/,
          loader: 'nunjucks'
        }
      ]
    },

    plugins: [
      new webpack.NormalModuleReplacementPlugin(/underscore/, 'lodash'),

      new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),

      new CopyWebpackPlugin([
        { from: PATHS.templates, to: 'templates' }
      ])
    ]
};

module.exports = webpackConfig;
