const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

const config = {
  devServer: {
    compress: true,
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    watchContentBase: true,
  },
  devtool: isDev && 'inline-source-map',
  entry: {
    app: {
      dependOn: 'deps',
      import: [
        path.join(__dirname, 'src'),
        path.join(__dirname, 'src/app.scss'),
      ],
    },
    deps: ['react', 'react-dom'],
  },
  mode: isDev ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        exclude: /node_modules/,
        test: /\.(png|jpe?g|gif|bmp)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?*.*)$/,
        loader: 'url-loader',
      },
    ],
  },
  output: {
    filename: isDev ? '[name].bundle.js' : '[name].[contenthash].bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProgressPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ESLintPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      favicon: path.resolve(__dirname, 'public/favicon.png'),
      inject: 'body',
      template: path.resolve(__dirname, 'public/index.html'),
    }),
  ],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'src/assets/'),
    },
    extensions: ['.ts', '.tsx', '.js'],
  },
  target: 'web',
};

module.exports = config;
