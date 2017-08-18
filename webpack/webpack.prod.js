const path = require('path');
const webpack = require('webpack');
const configBase = require('./webpack.base');

const resolvePath = value => path.resolve(__dirname, value);

module.exports = Object.assign({}, configBase, {
  entry: resolvePath('./../src/components/index.ts'),
  output: {
    filename: 'index.js',
    path: resolvePath('./../dist'),
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          configFileName: './../src/components/tsconfig.json',
        }
      },
    ],
  },
});
