const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PATHS = {
    public: (string = '') => path.resolve(__dirname, './public', string),
    src: (string = '') => path.resolve(__dirname, './src', string),
    dist: (string = '') => path.resolve(__dirname, './dist', string),
    assets: 'assets/'
}

module.exports = {
    externals: { // перевод: внешнее
        paths: PATHS 
    },
    entry: {
        main: PATHS.src() // точка входа
    },
    output: { // точка выхода
        filename: 'scripts/[name].js', // вместо [name] подставляется main из entry
        path: PATHS.dist(), // путь к файлу
        publicPath: '/' // используется для определения пути к файлам (прим: src='/[name].js' или href)
    },
    module: {
        rules: [
            {
                test: /\.(img|png|gif|svg)$/,
                loader: 'file-loader',
                exclude: '/node_modules',
                options: {
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.js$/, // регулярное вырожение для файлов
                use: {
                    loader: 'babel-loader', // загрузчик
                },
                exclude: '/node_modules/' // исключить
            },
            {
                test: /\.(scss|sass|css)$/,
                use: [
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: {
                                path: 'postcss.config.js' // путь для конфига
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style/[name].css',
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: PATHS.public('index.html'),
            inject: 'body',
        }),
        new CopyWebpackPlugin([
            {
                from: PATHS.src('image'), 
                to: `image`
            },
            {
                from: PATHS.src('static')
            }
        ])
    ]
}