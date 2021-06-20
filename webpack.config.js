const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const info = require('./package.json');

module.exports = {
  entry: `${__dirname}/src/main.js`,
  output: {
    path: `${__dirname}/dist`,
    filename: 'ol-side-panel.js',
    chunkFilename: 'ol-side-panel-[contenthash].js',
    clean: true,
  },
  performance: {
    hints: false,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader' },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'ol-side-panel.css',
      chunkFilename: 'ol-side-panel-[contenthash].css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: './static' },
      ],
    }),
  ],
};
