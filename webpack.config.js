module.exports = {
  entry: "./client_src/main.js",
  output: {
    path: "./client_dist",
    filename: "main.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel",
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: "vue"
      }
    ]
  },
  vue: {
    loaders: {
      js: "babel"
    }
  }
}
