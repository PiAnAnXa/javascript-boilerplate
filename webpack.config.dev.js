import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    mode: 'development',
    entry: [
        path.resolve(__dirname, 'src/index')
    ],
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            }
        ]
    },
    devtool: 'inline-source-map',
    target: 'web',
    devServer: {
        noInfo: false
    },
    plugins: [
        // Create HTML file that include reference to bundled JS.
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: true,
            debug: true
        })
    ]
}
