/**
 * Created by w1036_000 on 2017/3/7.
 */

let path = require('path');                                //path模块
let webpack = require('webpack');                          //webpack模块
let extractTextWebpackPlugin = require('extract-text-webpack-plugin');                //生成独立css等文件
let htmlWebpackPlugin = require('html-webpack-plugin');                                //自动生成html
let autoprefixer = require('autoprefixer');                    //自动补全css前缀
let copyWebpackPlugin = require('copy-webpack-plugin');          //复制文件


function getWebpackConfig({outPath}) {
    let extractCssAndLess = new extractTextWebpackPlugin('[name]/css/main.css');

    let config = {
        entry: {
            dependent: path.resolve(__dirname, '../src/index/dependent.js'),
            index: path.resolve(__dirname, '../src/index/scripts/ng/index.js'),
            moduleCommon: path.resolve(__dirname, '../src/moduleCommon/scripts/ng/index.js'),
        },
        output: {
            path: outPath,
            filename: '[name]/js/main.js',
            publicPath: '',
            chunkFilename: '[name].js'
        },
        module: {
            rules: [
                {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
                {test: /\.css$/, use: extractCssAndLess.extract(['css-loader', {loader: 'postcss-loader', options: {plugins: [autoprefixer({browsers: ['last 10 versions']})]}}])},      //处理css
                {test: /\.less$/, use: extractCssAndLess.extract(['css-loader', {loader: 'postcss-loader', options: {plugins: [autoprefixer({browsers: ['last 10 versions']})]}}, 'less-loader'])},      //处理less
                {test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/, use: [{loader: 'url-loader?importLoaders=1&limit=1000&name=[name].[ext]&publicPath=../../commons/fonts/&outputPath=commons/fonts/'}]},             //处理字体
            ]
        },
        plugins: [
            extractCssAndLess,
            new htmlWebpackPlugin({                //处理主html，自动插入css和js依赖
                filename: 'index.html',
                template: path.resolve(__dirname, '../src/index.html'),
                inject: true,
                chunks: ['dependent', 'commons', 'moduleCommon', 'index'],
                chunksSortMode: (function () {             //控制引用顺序的函数
                    let list = {commons: 0, dependent: 1, moduleCommon: 2, index: 3}
                    return function (a, b) {
                        return list[a.names[0]] - list[b.names[0]];
                    };
                }()),
            }),
            new copyWebpackPlugin([                   //拷贝文件，如过from中有*，则复制到的路径相对于根路径，否则相对于from的路径
                {from: 'src/index/tpls/routers/*.html', to: 'asdasd'}
            ]),
            new webpack.optimize.CommonsChunkPlugin({filename: 'commons/commons.js', name: 'commons'}),      //提取公共js
            // new webpack.optimize.DedupePlugin(),                      //避免出现重复模块    //这个已弃用
        ]
    };


    return config;
}

module.exports = getWebpackConfig({outPath: path.resolve(__dirname, '../test')});