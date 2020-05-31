var path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.bundle.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".scss", ".png"],
  },
};
