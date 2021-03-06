const webpack = require('webpack');
const path = require('path');

const APP_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'dist');

const config = {
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: APP_DIR,
    historyApiFallback: true,
    hot: true,
    port: 8100,
    publicPath: 'http://localhost:8100/',
    noInfo: false,
  },
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:8100',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    `${APP_DIR}/index.js`,
  ],
  devtool: 'eval',
  resolve: {
    extensions: [
      '*',
      '.js',
      '.jsx',
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
        include: APP_DIR
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"dev"',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ]
};

module.exports = config;
