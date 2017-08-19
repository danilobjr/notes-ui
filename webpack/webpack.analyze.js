const configProd = require('./webpack.prod');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

var result = Object.assign({}, configProd, {
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      analyzerPort: 8888,
      openAnalyzer: true,
    }),
  ],
});

module.exports = result;
