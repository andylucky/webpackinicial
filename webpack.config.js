const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {

    mode: 'development',
    output: {
        clean: true
    },
    module: {
        rules: [{
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: false
                },
            },
            {
                test: /\.css$/,
                exclude: /style.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: '/style.css$/',

            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader'

            }

        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: 'Mi app',
            filename: './index.html'

        }),
        new CopyPlugin({

            patterns: [{
                from: 'src/assets/',
                to: 'assets/'
            }]
        })
    ]

}