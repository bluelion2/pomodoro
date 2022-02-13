/* eslint-disable @typescript-eslint/no-var-requires */

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const EslintWebpackPlugin = require("eslint-webpack-plugin");
const path = require('path')

const devMode = process.env.NODE_ENV || "development";

module.exports = {
  mode: devMode ? "development" : "production",
  entry: './src/index.ts',
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    modules: [path.resolve(__dirname, "./src"), "node_modules"],
    alias: {
      src: path.resolve(__dirname, "./src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]ss|css)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  "postcss-flexbugs-fixes",
                  "autoprefixer",
                  "postcss-preset-env",
                  "postcss-fail-on-warn",
                ],
                browserslist: ["> 10%", "last 3 version"],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|wav)$/i,
        loader: "file-loader",
        options: {
          name: "[contenthash].[ext]",
          outputPath: "img",
        },
      },
      {
        test: /\.(js|ts|tsx)$/,
        use: 'babel-loader'
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon:'./public/favicon.ico',
    }),

    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, "public", "manifest.json"), to: 'manifest.json'}
      ]
    }),
    new MiniCssExtractPlugin({}),
    new EslintWebpackPlugin(),
  ],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  devtool: "source-map",
}