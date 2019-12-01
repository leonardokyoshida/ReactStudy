'use strict'

const path = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator')

module.exports = validate({
    devtool: 'source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        path.join(__dirname, 'src', 'index'), //para tratar questão de caminhos de diretórios em diferentes SO's. (barra invertida / barra normal)
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        preLoaders: [{
            test: /\.js$/,
            exclude: /node_module/,
            include: /src/,
            loader: 'standard'
        }],
        loaders: [{
            test: /\.js$/,
            exclude: /node_module/,
            include: /src/,
            loader: 'babel'
        }]
    }
})
