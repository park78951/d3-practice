const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "src/index.ts",
  },
  output: {
    filename: "[hash].bundle.js",
    path: path.resolve(__dirname, dist),
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: "awesome-typescript-loader",
      },
      {
        test: /\.html/,
        use: ["html-loader"],
      },
      {
        test: /\.(sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".css", "ts"],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
};
