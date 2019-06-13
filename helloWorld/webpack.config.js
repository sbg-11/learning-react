const path = require('path');
process.env.NODE_ENV = 'development';
module.exports = {
    entry: './source/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index.js'
    },
    mode: 'development',
    module: {
        rules: [
            {test:/\.js$/,loader:'babel-loader',exclude:/node_modules/}
        ]
    }
}