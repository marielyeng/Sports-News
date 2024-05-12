const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(path.join(__dirname, './src/index.ts')),
    target: 'node',
    module: {
        rules: [
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
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
}