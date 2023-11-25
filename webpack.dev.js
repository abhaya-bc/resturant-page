const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: [
        "./src/scripts/index.js",
        "./src/styles/index.css"
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "dev-pack"),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(svg|png|jpg|ico|gif)$/,
                generator: {
                        filename: 'img/[name][ext]'
                    }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'head',
            filename: 'index.html',
            minify: {
                removeEmptyAttributes: 'true',
            },
        }),
        new CleanWebpackPlugin()
    ]
}