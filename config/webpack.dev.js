const { merge } = require('webpack-merge')

const common = require('./webpack.common')

module.exports = merge(common, {
  // Set the mode to development or production
  mode: 'development',

  // Control how source maps are generated
  devtool: 'inline-source-map',

  // Spin up a server for quick development
  devServer: {
    historyApiFallback: {
      index: '/index.html',
      rewrites: [
        { from: /^\/htmlbanner-300-250/, to: '/htmlbanner-300-250.html' },
        { from: /^\/htmlbanner-320-480/, to: '/htmlbanner-320-480.html' },
        { from: /^\/htmlbanner-300-600/, to: '/htmlbanner-300-600.html' },
        { from: /^\/htmlbanner-728-90/, to: '/htmlbanner-728-90.html' },
        { from: /^\/htmlbanner-970-90/, to: '/htmlbanner-970-90.html' },
        { from: /^\/htmlbanner-1080-1080/, to: '/htmlbanner-1080-1080.html' },
      ],
    },
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },

  module: {
    rules: [
      // Styles: Inject CSS into the head with source maps
      {
        test: /\.(sass|scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 1, modules: false },
          },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
    ],
  },
})
