var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    mode: 'development',
    entry: __dirname + '/app.js',
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/react']
                }
            }
        }]
    },
    output: {
        filename: 'transformed.js',
        path: __dirname + '/build' 
    },
    plugins: [HTMLWebpackPluginConfig]
}