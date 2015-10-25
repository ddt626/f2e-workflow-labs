// webpack.config.js
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders:[
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.jpg$/, loader: 'url-loader?limit=8000' },
    ]
  }
};