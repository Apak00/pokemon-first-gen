var path = require("path");
var plugins = require("./plugins.ts");
var common = require("./webpack.config.common.ts");

module.exports = {
  ...common,
  mode: "production",
  plugins,
};
