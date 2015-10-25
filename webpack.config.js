var HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpack = require("webpack");

module.exports = {
    entry: [
        "./src/app.js",
    ],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.html$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'file?name=templates/[name]-[hash:6].html'
            },
            {
                test: [/fontawesome-webfont\.svg/, /fontawesome-webfont\.eot/, /fontawesome-webfont\.woff/, /fontawesome-webfont\.woff2/, /fontawesome-webfont\.ttf/],
                loader: 'file?name=fonts/[name].[ext]'
            },
            {   test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel?optional[]=runtime&stage=0'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/html/index.html'
        }),
    ]
};