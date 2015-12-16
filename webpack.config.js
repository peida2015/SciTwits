module.exports = {
  context: __dirname,
  entry: "./frontend/sciProj.jsx",
  output: {
    path: "./",
    filename: "./app/assets/javascripts/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react']
        }
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: ["", ".js", '.jsx']
  }
};
