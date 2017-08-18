const path = require('path');

const resolvePath = value => path.resolve(__dirname, value)

module.exports = {
  resolve: {
    alias: {
      components: resolvePath('./../src/components'),
      'docs/common': resolvePath('./../src/docs/common'),
      'docs/pages': resolvePath('./../src/docs/pages'),
      styles: resolvePath('./../src/components/styles'),
    },
    extensions: [".js", ".json", '.ts', '.tsx', '.scss', '.sass'],
  },
  devtool: 'source-map',
}
