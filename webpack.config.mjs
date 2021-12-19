import { fileURLToPath } from "url";
import path, { dirname } from "path";

import webpack from "webpack";
import pluginHTML from "html-webpack-plugin";
import pluginCSSExtract from "mini-css-extract-plugin";
import pluginCopy from "copy-webpack-plugin";
import pluginENV from "dotenv-webpack";
import pluginReactFR from "@pmmmwh/react-refresh-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isProd = process.env.NODE_ENV === "production";
const devPort = 8080;
const hashLength = 6;

const config = {
  entry: ["./src/styles/index.pcss", "./src/main.tsx"],
  mode: isProd ? "production" : "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: `[name].[chunkhash:${hashLength}].bundle.js`,
    chunkFilename: `[name].[chunkhash:${hashLength}].bundle.js`,
    publicPath: "/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
    alias: {
      "@src": path.resolve(__dirname, "src/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre",
      },
      {
        test: /\.(post|p)?css$/,
        use: [
          isProd ? pluginCSSExtract.loader : "style-loader",
          {
            loader: "css-loader",
            options: { importLoaders: 1 },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.(ttf|woff|woff2)$/,
        type: "asset/resource",
        generator: {
          filename: `fonts/[name].[hash:${hashLength}][ext][query]`,
        },
      },
      {
        test: /\.(jpe?g|png)$/,
        type: "asset/resource",
        generator: {
          filename: `images/[name].[hash:${hashLength}][ext][query]`,
        },
      },
      {
        type: "asset",
        resourceQuery: /url/, // *.svg?url
        generator: {
          filename: `assets/[name].[hash:${hashLength}][ext][query]`,
        },
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  plugins: [
    new pluginENV({
      systemvars: true,
    }),
    new pluginHTML({
      template: "src/index.html.ejs",
      title: "DEV",
    }),
    new pluginCopy({
      patterns: [{ from: path.resolve(__dirname, "public"), to: "" }],
    }),
  ].concat(
    isProd
      ? // @ts-ignore
        [
          new webpack.SourceMapDevToolPlugin({
            append: `\n//# sourceMappingURL=http://localhost:${devPort}/[url]`,
            filename: "sourcemaps/[file].map",
            exclude: /vendors.*.*/,
          }),
          new pluginCSSExtract({
            filename: `style.[contenthash:${hashLength}].css`,
          }),
        ]
      : [new pluginReactFR()]
  ),
  devtool: isProd ? false : "eval-cheap-module-source-map",
  devServer: {
    historyApiFallback: true,
    hot: true,
    allowedHosts: ["localhost", "127.0.0.1"],
    static: path.join(__dirname, "./dist"),
    port: devPort,
    host: "0.0.0.0",
  },
};

config.optimization = {
  runtimeChunk: "single",
  splitChunks: {
    chunks: "all",
    cacheGroups: {
      vendors: {
        test: /node_modules/,
        chunks: "initial",
        name: "vendors",
        enforce: true,
      },
    },
  },
};

export default config;
