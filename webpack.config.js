const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const PurifyCSSPlugin = require('purifycss-webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const inProduction = (process.env.NODE_ENV === 'production');
const compiler = require('vue-template-compiler');

module.exports = {
  entry: {
      app: [
          './src/main.js',
          './src/custom.scss',
      ],
      vendor: ['jquery']
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[chunkhash].js'
  },

  module: {
    rules: [
      // While Using Extract Text Plugin
      {
          test: /\.s[ac]ss$/,
          use: ExtractTextPlugin.extract({
            use: ['css-loader', 'sass-loader'],
            fallback: 'style-loader',
            //use: ['css-loader', 'sass-loader'],

            // use: [
            //     {
            //         loader: 'css-loader',
            //          options: { url: false }
            //     },
            //     'sass-loader'
            // ],

            //fallback: 'style-loader'
          })
      },

      // {
      //   test: /\.s[ac]ss$/,
      //   use: ['style-loader', 'css-loader', 'sass-loader']
      // },
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader']
      // },
      {
          test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
          loader: 'file-loader',
          options: {
              name: 'images/[name].[hash].[ext]'
          }
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },

  plugins: [
      //new webpack.optimize.UglifyJsPlugin()
      new ExtractTextPlugin('[name].css'),

      new PurifyCSSPlugin({
          // Give paths to parse for rules. These should be absolute!
          paths: glob.sync(path.join(__dirname, 'index.html')),
          minimize: inProduction
      }),

      new CleanWebpackPlugin(['dist'], {
          root: __dirname,
          verbose: true,
          dry: false
      }),

      new webpack.LoaderOptionsPlugin({
          minimize: inProduction
      }),

      function () {
          this.plugin('done',stats => {
              require('fs').writeFileSync(
                  path.join(__dirname,'dist/manifest.json'),
                  JSON.stringify(stats.toJson())
              )
          })
      }
  ]
};

if (inProduction) {
  module.exports.plugins.push(
      new webpack.optimize.UglifyJsPlugin()
  )
}
