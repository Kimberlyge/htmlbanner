const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = require('./paths')

module.exports = {
  // Where webpack looks to start building the bundle
  entry: [paths.src + '/index.js'],

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: './',
  },

  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),

    // Generates an HTML file from a template
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: paths.src + '/template.html', // template file
      filename: 'index.html', // output file
    }),

    new HtmlWebpackPlugin({
      title: 'html banner 300x250',
      template: paths.src + '/htmlbanner-300-250.html', // template file
      filename: 'htmlbanner-300-250.html', // output file
    }),

    new HtmlWebpackPlugin({
      title: 'html banner 300x480',
      template: paths.src + '/htmlbanner-320-480.html', // template file
      filename: 'htmlbanner-300-480.html', // output file
    }),

    new HtmlWebpackPlugin({
      title: 'html banner 300x600',
      template: paths.src + '/htmlbanner-300-600.html', // template file
      filename: 'htmlbanner-300-600.html', // output file
    }),

    new HtmlWebpackPlugin({
      title: 'html banner 728-90',
      template: paths.src + '/htmlbanner-728-90.html', // template file
      filename: 'htmlbanner-728-90.html', // output file
    }),

    new HtmlWebpackPlugin({
      title: 'html banner 970-90',
      template: paths.src + '/htmlbanner-970-90.html', // template file
      filename: 'htmlbanner-970-90.html', // output file
    }),

    new HtmlWebpackPlugin({
      title: 'html banner 1080-1080',
      template: paths.src + '/htmlbanner-1080-1080.html', // template file
      filename: 'htmlbanner-1080-1080.html', // output file
    }),
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      { test: /\.js$/, use: ['babel-loader'] },

      // Images: Copy image files to build folder
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

      // Fonts and SVGs: Inline files
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
    ],
  },

  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': paths.src,
      assets: paths.public,
    },
  },
}
