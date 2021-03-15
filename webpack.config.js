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
    contentBase: __dirname + '/dist',
    publicPath: '/',
  },
  devtool: 'source-map',
  entry: {
    app: {
      dependOn: ['react'],
      import: [
        path.join(__dirname, 'src'),
        path.join(__dirname, 'src/app.scss'),
      ],
    },
    react: ['react', 'react-dom'],
    bootstrap: [
      'bootstrap/dist/js/bootstrap.js',
      'bootstrap/dist/css/bootstrap.css',
    ],
    'font-awesome': [
      '@fortawesome/fontawesome-free/scss/fontawesome.scss',
      '@fortawesome/fontawesome-free/scss/solid.scss',
      '@fortawesome/fontawesome-free/scss/brands.scss',
    ],
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
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        exclude: /node_modules/,
        test: /\.(png|jpe?g|gif|bmp)$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?*.*)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        },
      },
    ],
  },
  output: {
    filename: isDev
      ? 'js/[name].bundle.js'
      : 'js/[name].[contenthash].bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProgressPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ESLintPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new HtmlWebpackPlugin({
      favicon: path.resolve(__dirname, 'public/favicon.png'),
      inject: 'body',
      template: path.resolve(__dirname, 'public/index.html'),
    }),
  ],
  resolve: {
    alias: {},
    extensions: ['.ts', '.tsx', '.js'],
  },
  target: 'web',
};

module.exports = config;
