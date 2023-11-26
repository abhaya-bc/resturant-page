const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: [
        "./src/scripts/index.js",
        "./src/styles/index.css",
        "./src/styles/home.css",
        "./src/styles/menu.css",
        "./src/styles/contact.css",
    ],
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, "prod-pack"),
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
                test: /\.(svg|png|jpg|gif)$/,
                use: 'file-loader',
                generator: {
                        filename: 'img/[name][ext]'
                    }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'bundle.[contenthash:8].css'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'head',
            favicon: './src/img/icon.ico',
            filename: 'index.[contenthash:8].html',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true
            },
        }),
        new CleanWebpackPlugin()
    ],
    optimization: {
        minimizer: [
            new CssMinimizerWebpackPlugin(),
            new TerserPlugin(),
        ]
    }
}