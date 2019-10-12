const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './public/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle_[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyPlugin([
      { from: './public/assets/images', to: './assets/images' },
    ]),
    new HtmlWebpackPlugin(
      {
        filename: 'index.html',
        template: './public/index.html',
        inject: true,
      },
    ),
    new HtmlWebpackPlugin(
      {
        filename: 'privacy.html',
        template: './public/privacy.html',
        inject: true,
      },
    ),
  ],
};
