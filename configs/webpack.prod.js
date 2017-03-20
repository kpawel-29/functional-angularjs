/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
const conf = require('./webpack.common');
const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: conf.entry,
    output: {
        filename: 'bundle.js',
        path: path.resolve('./', conf.DIR.BUILD)
    },
    module: conf.module,
    plugins: [
        new UglifyJSPlugin(),
        new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.js'}),
        new HtmlWebpackPlugin({template: conf.DIR.SRC + '/index.html'})
    ],
    resolve: conf.resolve,
    devtool: 'inline-source-map'
};