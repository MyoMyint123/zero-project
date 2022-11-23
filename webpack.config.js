const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require("webpack");

let mode = "development";
let target = "web";

const plugins = [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
        template: "./src/index.html"
    })
];

if (process.env.NODE_ENV === "production") {
    mode = "production";
    target = "browserslist";
} 
if(process.env.SERVE === true) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = {
    mode: mode,
    target: target,
    // entry: ".src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "images/[hash][ext][query]"
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|svg|gif)/i,
                type: "asset",
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath: "" }
                    },
                    'css-loader', 
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }

        ]
    },

    plugins: plugins,
    resolve: {
        extensions: [ '.js', '.jsx' ],
    },
    devtool: "source-map",
    devServer: {
        // inline: false,
        static: './dist',
        // contentBase: "./dist",
        hot: true,
        open: true
    },
}