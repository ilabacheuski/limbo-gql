const path = require('path')

module.exports = {
  entry: '../src/server/index.js',
  output:
  {
    [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
}
