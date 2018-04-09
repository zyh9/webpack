const webpack = require('webpack');//引入webpack
const opn = require('opn');//打开浏览器
const merge = require('webpack-merge');//webpack配置文件合并
const path = require("path");
const baseWebpackConfig = require("./webpack.base.conf");//基础配置
const webpackFile = require("./webpack.file.conf");//一些路径配置

const os = require('os');
const obj = os.networkInterfaces();
let ip;
for(let value in obj){
    obj[value].forEach(e => {
        if(e.family=="IPv4"){
            if(e.address.indexOf('127.0.0.1')==-1){
                ip = 'http://'+ e.address;
            }
        }
    })
}

let config = merge(baseWebpackConfig, {
    /*设置开发环境*/
    mode: 'development',
    output: {
        path: path.resolve(webpackFile.devDirectory),
        filename: 'js/[name].js',
        chunkFilename: "js/[name].js",
        publicPath: ''
    },
    plugins: [
        /*设置热更新*/
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [
                    'babel-loader',
                ],
                include: [
                    path.resolve(__dirname, "../../app"),
                    path.resolve(__dirname, "../../entryBuild")
                ],
                exclude: [
                    path.resolve(__dirname, "../../node_modules")
                ],
            }
            
        ]
    },
    /*设置api转发*/
    devServer: {
        host: '0.0.0.0',
        port: 3000,
        hot: true,
        inline: true,
        contentBase: path.resolve(webpackFile.devDirectory),
        historyApiFallback: true,
        disableHostCheck: true,
        proxy: [
            {
                context: ['/api/**', '/u/**'],
                target: 'http://192.168.1.100:8080/',
                secure: false
            }
        ],
        /*打开浏览器 并打开本项目网址*/
        after() {
            opn(ip +':'+ this.port);
        }
    }
});
module.exports = config;