import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    mode: 'production',
    devtool: 'source-map',
    entry: {
        vendor: path.resolve(__dirname, 'src/vendor'),
        main: path.resolve(__dirname, 'src/index')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: '/node_module/',
                loaders: ['babel-loader']
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        // Create HTML file that include reference to bundled JS.
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            },
            inject: true
        })
    ]
}
