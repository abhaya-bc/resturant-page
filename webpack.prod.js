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
        "./src/styles/index.css"
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

            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'bundled.[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'head',
            filename: 'index.[contenthash].html',
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