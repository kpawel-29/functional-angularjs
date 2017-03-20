/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
const conf = require('./webpack.common');
const webpack = require('webpack');
const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: conf.entry,
    output: {
        filename: 'bundle.js',
        path: path.resolve('./', conf.DIR.TMP)
    },
    module: conf.module,
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.js'}),
        new HtmlWebpackPlugin({template: conf.DIR.SRC + '/index.html'}),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: {baseDir: [conf.DIR.TMP, conf.DIR.SRC]}
        })
    ],
    resolve: conf.resolve,
    devtool: 'inline-source-map'
};