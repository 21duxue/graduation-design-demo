const path=require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports={
    mode: 'development',
    entry: "./Main.js",
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.min.js',
        publicPath:'temp/'
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                exclude: /node_modules/,
                use:{
                    loader:"babel-loader",
                }
            },
            {
                test: /\.html$/,
                use: {
                  loader: 'html-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
          title: 'react app',
          filename: 'index.html',
          template: './index.html'
        })
      ]
}