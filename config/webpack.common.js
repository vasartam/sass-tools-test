'use strict'
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './index.js',
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].min.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            // {
            //     test: /\.jsx?$/,
            //     exclude: /node_modules/,
            //     use: {
            //         loader: 'babel-loader',
            //     },
            // },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Injects style into `<style>` tag
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            implementation: require('sass'),
                        },
                    },
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Testing `@vasart/sass-tools`',
        }),
    ],
    optimization: {
        runtimeChunk: 'single',
    },
};
