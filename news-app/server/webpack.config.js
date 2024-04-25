var path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

const nodeEnv = process.env.NODE.ENV;
const isProduction = nodeEnv === 'production';

const crypto = require('crypto');
const crypto_origin_createHash = crypto.createHash;
crypto.createHash = algorithm => crypto_origin_createHash(algorithm == 'md4' ? 'sha256' : algorithm);

const WrapperPlugin = require('wrapper-webpack-plugin');
const fs = require('fs');
let plugins = [];

if (!isProduction) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
}

let externals = ['utf-8-validate', 'bufferutil'];

externals.push('appdynamics');

const entry = isProduction ? [path.resolve(path.join(__dirname, './src/server.ts'))] : ['webpack/hot/poll?1000', path.resolve(__dirname, './src/server.ts')];

module.exports = {
    devtool: 'inline-source-map',
    performance: {
        hints: false
    },
    mode: nodeEnv || 'development',
    entry: entry,
    plugins: plugins,
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'server.bundle.js'
    },
    target: 'node',
    externals: externals,
    module: {
        rules: [
            {
                test: /\.(graphql|gql)$/,
                exclude: /node_modules/,
                loader: 'graphql-tag/loader'
            },
            {
                test: /\.ts?$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                        experimentalWatchApi: true
                    }
                },
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/
            },
            {
                test: /\.mjs$/,
                resolve: {
                    fullySpecified: false
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.mjs', '.ts', '.json', '.gql']
    },
    ignoreWarnings: [
        {
            module: /node_modues\/express\/lib\/view\/.js/,
            message: /the request of a dependency is an expression/
        }
    ],
    optimization: {
        moduleIds: 'named',
        minimizer: [
            new TerserPlugin({
                extractComments: false
            })
        ]
    }
};