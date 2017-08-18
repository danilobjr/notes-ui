const path = require('path');
const configBase = require('./webpack.base');

const resolvePath = value => path.resolve(__dirname, value)
const extend = (object, withAnotherObject) => Object.assign({}, object, withAnotherObject);

module.exports = extend(configBase, {
  entry: resolvePath('./../src/index'),
  output: {
    filename: 'index.js',
    path: resolvePath('./'),
  },
  module: extend(configBase.module, {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          configFileName: './../src/docs/tsconfig.json',
        }
      },
      {
        test: /\.s(c|a)ss$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'sass-loader'},
        ]
      }
    ],
  }),
  devServer: {
    contentBase: resolvePath('./../'),
    compress: true,
    port: 3000,
  },
});
