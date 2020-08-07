var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // used by production
    filename: 'bundle.js',
    publicPath: '/dist'  // used by development server since it is stored in memory
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader'     // enables us to import our css in our .js files
        ]
      }
    ]
  },
  plugins: [
    //new webpack.optimize.UglifyJsPlugin({
      // ....
    //})
  ]
}
