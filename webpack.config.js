const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    module: {
    rules: [
        {
            test:/\.(jpe?g|png|gif|svg)$/i,
            loader: 'file-loader',
            options: {
                name: './src/assets/[name].[ext]'
            }
        },
        {
            test: /\.(css)$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {
            test: /\.tsx?$/,
            use: {
                loader:'ts-loader', 
                options: {
                    compilerOptions: {
                        noEmit: false
                    }
                },
            },
            exclude: /node_modules/,
        },
    ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}
