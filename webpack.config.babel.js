import { resolve } from "path";
import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HTMLInLineCSSWebpackPlugin from "html-inline-css-webpack-plugin";
import HTMLInLineScriptWebpackPlugin from "html-inline-script-webpack-plugin";

export default () => {
  return {
    entry: "./src/index.js",
    output: {
      path: resolve(__dirname, "dist"),
      filename: "main.js",
    },
    resolve: {
      extensions: [".js"],
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          loader: "babel-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
        },
      ],
    },
    plugins: [
      new HTMLWebpackPlugin({
        inject: true,
        filename: "index.html",
        template: resolve(__dirname, "./public/index.html"),
      }),
      new HTMLWebpackPlugin({
        inject: true,
        filename: "index.aspx",
        template: resolve(__dirname, "./public/index.html"),
      }),
      new MiniCssExtractPlugin({
        filename: "style.css",
      }),
      new HTMLInLineCSSWebpackPlugin({
        target: "<!-- Inline CSS Plugin -->",
      }),
      new HTMLInLineScriptWebpackPlugin([/index\.js$/, /main\.js$/]),
    ],
    devServer: {
      // contentBase: join(__dirname, "dist"),
      port: 8080,
    },
    optimization: {},
  };
};
