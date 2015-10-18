var vue = require('vue-loader')

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "./dist/bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.vue$/, loader: vue.withLoaders({}) },
      { test: /\.(jpe?g|png|gif|svg|eot|woff|ttf)$/i, loader: 'file-loader?name=dist/assets/[hash].[ext]' }
    ]
  }
}
