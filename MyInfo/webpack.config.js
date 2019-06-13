const path = require('path');
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