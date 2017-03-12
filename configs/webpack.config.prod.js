/**
 * Created by w1036_000 on 2017/3/7.
 */

const path = require('path');                                //path模块
const crypto=require('crypto');                             //crypto模块
const webpack = require('webpack');                          //webpack模块
const extractTextWebpackPlugin = require('extract-text-webpack-plugin');                //生成独立css等文件
const htmlWebpackPlugin = require('html-webpack-plugin');                                //自动生成html
const autoprefixer = require('autoprefixer');                    //自动补全css前缀
const copyWebpackPlugin = require('copy-webpack-plugin');          //复制文件
const stringReplaceWebpackPlugin = require('string-replace-webpack-plugin');                //替换文件中的指定字符串


function getWebpackConfig({outPath}) {
    const hash=(function () {
        let hash=crypto.createHash('sha256');
        hash.update(Math.random().toString());
        return hash.digest('hex');
    }());
    const extractCssAndLess = new extractTextWebpackPlugin('[name]/css/main.'+hash+'.css');
    const modules = {                                                                  //在此处添加模块
        dependent: path.resolve(__dirname, '../src/index/dependent.js'),
        index: path.resolve(__dirname, '../src/index/scripts/ng/index.js'),
        moduleCommon: path.resolve(__dirname, '../src/moduleCommon/scripts/ng/index.js'),
        moduleOne: path.resolve(__dirname, '../src/moduleOne/scripts/ng/index.js'),
        moduleTwo: path.resolve(__dirname, '../src/moduleTwo/scripts/ng/index.js'),
        moduleThree: path.resolve(__dirname, '../src/moduleThree/scripts/ng/index.js'),
    };

    const config = {
        entry: modules,
        output: {
            path: outPath,
            filename: '[name]/js/main.'+hash+'.js',
            publicPath: '',
            chunkFilename: '[name].js'
        },
        module: {
            rules: [
                {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
                {test: /\.css$/, use: extractCssAndLess.extract(['css-loader', {loader: 'postcss-loader', options: {plugins: [autoprefixer({browsers: ['last 10 versions']})]}}])},      //处理css
                {test: /\.less$/, use: extractCssAndLess.extract(['css-loader', {loader: 'postcss-loader', options: {plugins: [autoprefixer({browsers: ['last 10 versions']})]}}, 'less-loader'])},      //处理less
                {test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/, use: [{loader: 'url-loader?importLoaders=1&limit=1000&name=[name].[ext]&publicPath=../../commons/fonts/&outputPath=commons/fonts/'}]},             //处理字体
                {                                                                                          //为了处理路由文件中，懒加载文件自动加入hash值
                    test: /routerStates\.js$/, loader: stringReplaceWebpackPlugin.replace({
                    replacements: [{
                        pattern: /\[hash\]/ig, replacement: function (match, p1, offset, string) {
                            return '.'+hash;
                        }
                    }]
                })
                },
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
                    let list = {commons: 0, dependent: 1, moduleCommon: 2, index: 3};
                    return function (a, b) {
                        return list[a.names[0]] - list[b.names[0]];
                    };
                }()),
            }),
            new copyWebpackPlugin((function () {                               //拷贝文件，如过from中有*，则复制到的路径相对于根路径，否则相对于from的路径
                let copySets = [];
                for (let k in modules) {
                    if (k !== 'dependent') {
                        copySets.push({
                            from: 'src/' + k + '/tpls',
                            to: k + '/tpls'
                        })
                    }
                }
                return copySets;
            }())),
            new webpack.optimize.UglifyJsPlugin({                             //压缩代码
                compress: {
                    warnings: false
                },
                mangle:false
            }),
            new stringReplaceWebpackPlugin(),                //为了处理路由文件中，懒加载文件自动加入hash值
            new webpack.optimize.CommonsChunkPlugin({filename: 'commons/commons.'+hash+'.js', name: 'commons'}),      //提取公共js
            // new webpack.optimize.DedupePlugin(),                      //避免出现重复模块    //这个已弃用
        ]
    };


    return config;
}

module.exports = getWebpackConfig({outPath: path.resolve(__dirname, '../dist')});