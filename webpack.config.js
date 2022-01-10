var path = require("path");

module.exports = {
  mode: "development",
  entry: {
    pageA: "./src/pageA",
    pageB: "./src/pageB",
    pageC: "./src/pageC",
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
  },
  optimization: {
    chunkIds: "named",
    splitChunks: {
      minSize: 0,
      cacheGroups: {
        commons: {
          chunks: "all",
          minChunks: 2,
          maxInitialRequests: 5,
        },
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor",
        },
      },
    },
  },
};
