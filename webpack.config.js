var path = require('path');
var webpack = require('webpack');
var node_modules = path.resolve(__dirname, 'node_modules');

config = {
    entry: {
        app: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/main.jsx')],
        vendors: ['react', 'react-dom', 'react-router', 'reflux']
    },
    resolve: {
        alias: { }
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.js',
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ]
};

module.exports = config;