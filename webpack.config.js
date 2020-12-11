const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
require("@babel/polyfill");

module.exports = {
  entry: ["@babel/polyfill", "./src/index.js"],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "./dist"),
    open: true,
    compress: true,
    port: 3000
  },
  output: { 
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    environment: {
      // The environment supports arrow functions ('() => { ... }').
      arrowFunction: false,
      // The environment supports BigInt as literal (123n).
      bigIntLiteral: false,
      // The environment supports const and let for variable declarations.
      const: false,
      // The environment supports destructuring ('{ a, b } = obj').
      destructuring: false,
      // The environment supports an async import() function to import EcmaScript modules.
      dynamicImport: false,
      // The environment supports 'for of' iteration ('for (const x of array) { ... }').
      forOf: false,
      // The environment supports ECMAScript Module syntax to import ECMAScript modules (import ... from '...').
      module: false,
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      favicon: "./public/ico/favicon.ico"
    })
  ],
  performance: {
    hints: false
  }
}