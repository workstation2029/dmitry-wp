const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const webpack = require('webpack');

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    devtool: 'cheap-eval-source-map',// карта сайта (почитать подробнее)
    devServer: { // параметры для webpack-dev-server
        overlay: {
            warnings: false,
            errors: true
        }, // отображение предупреждений
        contentBase: baseWebpackConfig.externals.paths.dist(), // папкп с ресурсом
        port: 4000,
        compress: true,
        publicPath: '/',
        hot: true, // после того как добавил изчезла проблема с HtmlWebpackPlugin(это совпадение)
        historyApiFallback: true // без него не работает BrowserRouter
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map'
        })// карта сайта, нужена только для dev mode и корректной работы devtool(не использывать при сборке!!!)
    ]
})

module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig);
})