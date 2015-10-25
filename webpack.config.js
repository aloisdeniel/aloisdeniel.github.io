var webpack = require("webpack");
var vue = require('vue-loader')

module.exports = {
  entry: {
    app: "./src/main.js",
    vendor: [ 'vue' ]
  },
  output: {
    filename: "./dist/bundle.js"
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", "./dist/vendor.bundle.js")
  ],
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.scss$/, loaders: ["style", "css", "sass"] },
      { test: /\.vue$/, loader: vue.withLoaders({}) },
      { test: /\.(jpe?g|png|gif|svg|eot|woff|ttf)$/i, loader: 'file-loader?name=dist/assets/[hash].[ext]' }
    ]
  }
}
