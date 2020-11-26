const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const pug = {
    test: /\.pug$/,
    use: ['html-loader', 'pug-html-loader']
};

const ts = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /(node_modules)/,
}

const scss = {
    test: /\.(sa|sc|c)ss$/,
    // Loaders are applying from right to left(!)
    use: [
        {loader: MiniCssExtractPlugin.loader},
        {loader: "css-loader"},
        {loader: "postcss-loader"},
        {
            // First we transform SASS to standard CSS
            loader: "sass-loader",
            options: {
                implementation: require("sass")
            }
        }
    ]
}

const imgs = {
    test: /\.(png|jpe?g|gif|svg)$/,
    use: [
        {
            loader: "file-loader",
            options: {
                outputPath: 'images'
            }
        }
    ]
}


const config = {
    entry: './src/app.ts',
    module: {
        rules: [pug, ts, scss, imgs]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    plugins: [
        new LiveReloadPlugin({
            appendScriptTag: true
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/pug/index.pug',
        }),
        new HtmlWebpackPlugin({
            filename: 'about-us.html',
            template: 'src/pug/about-us.pug',
        }),
        new HtmlWebpackPlugin({
            filename: 'mission.html',
            template: 'src/pug/mission.pug',
        }),
        new HtmlWebpackPlugin({
            filename: 'charities.html',
            template: 'src/pug/charities.pug',
        }),
        new HtmlWebpackPlugin({
            filename: 'how-help.html',
            template: 'src/pug/how-help.pug',
        }),
        new MiniCssExtractPlugin({
            filename: "bundle.css"
        })
    ],
    
    output: {
      path: path.resolve(__dirname, 'docs'),
      filename: '[name].js'
    },
    devServer: {
        port: 3000,
    }
};

module.exports = config;