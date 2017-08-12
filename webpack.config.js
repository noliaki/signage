const path = require('path')
const webpack = require('webpack')

const config = {
  context: path.resolve('./src/docroot', 'js/'),
  entry: {
    index: ['babel-polyfill', './index.js']
  },
  resolve: {
    alias: {
      vue: process.env.NODE_ENV === 'development' ? 'vue/dist/vue.esm.js' : 'vue/dist/vue.min.js',
      vuex: process.env.NODE_ENV === 'development' ? 'vuex/dist/vuex.esm.js' : 'vuex/dist/vuex.min.js'
    }
  },
  output: {
    path: path.resolve('./dist', 'js'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader'
        }]
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true
      }
    })
  ]
}

if (process.env.NODE_ENV === 'development') {
  config.output.path = path.resolve('./dist-dev', 'js')
  config.watch = true
  config.cache = true
  config.devtool = 'source-map'
  config.plugins = [
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ]
}

module.exports = config
