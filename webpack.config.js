const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob');

const config = {
  entry: ['react-hot-loader/patch', './src/index.tsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
  },
  plugins: [new MiniCssExtractPlugin()],
};

module.exports = (_, { mode }) => {
  if (mode === 'production') {
    config.plugins.push(
      new HtmlWebpackPlugin({
        inject: false,
        template: require('html-webpack-template'),
        title: 'MTG Card Printer',
        appMountId: 'app',
        baseHref: '/mtg-deck-printer/',
        scripts: [
          {
            src: 'bundle.js',
          },
        ],
      })
    );
  } else {
    config.plugins.push(
      new HtmlWebpackPlugin({
        inject: false,
        template: require('html-webpack-template'),
        title: 'MTG Card Printer',
        appMountId: 'app',
        baseHref: '/',
        scripts: [
          {
            src: 'bundle.js',
          },
        ],
      })
    );
  }

  return config;
};
