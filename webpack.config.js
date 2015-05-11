var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var prod = process.env.NODE_ENV === 'production'

var jsName = (prod) ? '[name]-[hash].js' : '[name]';

var config = {

    entry: {
        main: [
            path.join(__dirname, 'src/main.js')
            ],
        vendor: [
            'backbone',
            'backbone.marionette',
            'jquery',
            'react',
            'react-tap-event-plugin',
            'material-ui',
            'lodash'
        ]
    },

    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js',
        publicPath: '/build/'
    },

    module: {
        loaders: [
            {
                test: /\.(jsx|js)$/,
                include: path.join(__dirname, 'src'),
                loaders: prod
                    ? [             'babel-loader?stage=0&optional=runtime']
                    : ['react-hot', 'babel-loader?stage=0&optional=runtime']
            },
            {
                test: /\.less$/,
                loader: prod
                    ? ExtractTextPlugin.extract('style', 'css!less')
                    : ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
            },
            {
                test: /\.css$/,
                loader: prod
                    ? ExtractTextPlugin.extract('style', 'css')
                    : 'style!css'
            },
            {
                test: /\.(eot|ttf|woff|svg)(\?.+)?$/,
                loader: 'file-loader'
            }
        ]

    },

    resolve: {
        alias: {
            app: path.join(__dirname, 'src'),
            views: path.join(__dirname, 'src', 'views'),
            elements: path.join(__dirname, 'src', 'views', 'elements'),
            blocks: path.join(__dirname, 'src', 'views', 'blocks'),
            models: path.join(__dirname, 'src', 'models'),
            utils: path.join(__dirname, 'src', 'utils')
        },
        extensions: ['', '.js', '.jsx']
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
        new ExtractTextPlugin('[name].css', {allChunks: true})
    ],
};


if (prod) {
    config.devtool = 'sourcemap';

    config.plugins.push(
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({comments: /a^/, compress: {warnings: false}})
    );
} else {
    config.devtool = '#eval';

    config.entry.main.unshift(
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://0.0.0.0:8000'
    );
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = config;
