let miniCss = require('mini-css-extract-plugin')
let htmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                      loader: miniCss.loader,
                      options: {
                        publicPath: '../',
                        hmr: process.env.NODE_ENV === 'development',
                      },
                    },
                    'css-loader',
                ]
            },
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'file-loader',
                options: {
                  name: 'img/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new CopyPlugin([
            { from: '.src/public/img', to: './img' },
            { from: './src/**/*.json',
            to: 'api/[name].[ext]'},
            { from: './src/**/*.jpg',
                to: 'img/[name].[ext]'},
            { from: './src/**/*.svg',
                to: 'img/[name].[ext]'},
            { from: './src/**/*.png',
                to: 'img/[name].[ext]'}
          ]),

        new miniCss({
            filename: 'css/[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false,
        }), 
        new htmlPlugin({
            template: './src/public/index.html'
        })
    ],
    devServer: {
        open: true,
        hot: true,
        port: 3000
    }
}