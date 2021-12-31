const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const outputDirectory = 'dist';

module.exports = {
    entry: {
        app: './src/client/MainComponent.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, outputDirectory),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/react',
                        {
                            'plugins': [
                                '@babel/plugin-proposal-class-properties'
                            ]
                        }
                    ]
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
               test: /\.(png|svg|jpg|jpeg|gif)$/i,
               type: 'asset/resource',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/client/index.html',
            filename: 'app/index.html',
            chunks: ['app']
        })
    ]
};