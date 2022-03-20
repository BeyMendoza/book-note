const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, { mode }) => {
  const isProd = mode === 'production';
  return {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
      filename: '[name].[contenthash].js',
      publicPath: '/',
      path: path.resolve(__dirname, 'build'),
    },
    resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
      alias: {
        '@Library': path.resolve(__dirname, 'src/lib'),
      },
    },
    module: {
      rules: [
        { test: /\.tsx?$/, loader: 'ts-loader' },
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                [
                  '@babel/preset-react',
                  {
                    runtime: 'automatic',
                  },
                ],
              ],
            },
          },
        },
        // For styles
        {
          test: /\.s[ac]ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public', 'index.html'),
      }),
    ],
    devServer: {
      open: true,
      liveReload: true,
      compress: true,
      historyApiFallback: true,
      port: 3000,
    },
  };
};
