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
            },
            {
                test:/.css$/,
                use:["style-loader","css-loader",'postcss-loader']
            },
            {
                test: /\.less$/i, 
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test:/\.(jpg|png|gif)$/i,
                use:{
                    loader:"file-loader",
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