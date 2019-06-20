const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const safeParser = require('postcss-safe-parser');
const baseWebpackConfig = require("./webpack.base.conf");
const webpackFile = require('./webpack.file.conf');
const entry = require("./webpack.entry.conf");
const webpackCom = require("./webpack.com.conf");

let config = merge(baseWebpackConfig, {
    /*设置生产环境*/
    mode: 'production',
    output: {
        path: path.resolve(webpackFile.proDirectory),
        filename: 'js/[name].[chunkhash:8].js',
        chunkFilename: "js/[name]-[id].[chunkhash:8].js",
    },
    plugins: [
        // 将css提取到它自己的文件中
        // new ExtractTextPlugin('css/[name].[md5:contenthash:hex:8].css'),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash:8].css',
            chunkFilename: "css/[id].[hash:8].css"
        }),
        // 压缩提取的CSS
        // 可以从不同组件复制CSS
        new OptimizeCSSPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {
                parser: safeParser,
                discardComments: { removeAll: true },
                // 避免 cssnano 重新计算 z-index
                safe: true
            },
            canPrint: true
        }),
    ],
    module: {
        rules: [
            // {
            //     test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            //     loader: 'url-loader?limit=8192&name=[name].[hash:8].[ext]&publicPath=../' + webpackFile.resourcePrefix + '&outputPath=' + webpackFile.resource + '/'
            // },
            // {
            //     test: /\.(css|pcss)$/,
            //     use: ExtractTextPlugin.extract({
            //         fallback: "style-loader",
            //         use: [
            //             { loader: 'css-loader', options: {importLoaders: 1 } },
            //             { loader: 'postcss-loader', options: {
            //                 ident: 'postcss',
            //                 // plugins: _ => webpackCom.postcss
            //             }}
            //         ],
            //     }),
            //     include: webpackCom.cssInclude,
            // },
            {
                test: /\.(css|pcss)$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        { loader: 'css-loader', options: {importLoaders: 1 } },
                        { loader: 'postcss-loader', options: {
                            ident: 'postcss',
                            // plugins: _ => webpackCom.postcss
                        }}
                    ],
                include: webpackCom.cssInclude,
            },
            {
                test: webpackCom.img,
                // loader: 'url-loader?limit=8192&name=[name].[hash:8].[ext]&publicPath=../' + webpackFile.resourcePrefix + '&outputPath=' + webpackFile.resource + '/'
                use: [{
                    loader: 'url-loader',
                    options:{
                        limit: 8192,
                        name: '[name].[hash:8].[ext]',
                        publicPath: '../' + webpackFile.resourcePrefix,
                        outputPath: webpackFile.resource + '/',
                    }
                }]
            }
        ]
    }
});
let pages = entry;
console.log(entry)
for (let chunkName in pages) {
    let conf = {
        filename: chunkName + '.html',
        template: 'index.html',
        inject: true,
        title: webpackCom.titleFun(chunkName, pages[chunkName][1]),
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
        },
        chunks: ['manifest', 'vendor', 'common', chunkName],
        hash: false,
        chunksSortMode: 'dependency'
    };
    config.plugins.push(new HtmlWebpackPlugin(conf));
}
/* 清除 dist */
config.plugins.push(new CleanWebpackPlugin());

let copyObj = [
    /*  
        {from: './app/public/plugin', to: './plugin'},//一些不需要走webpack的插件
        {from: './app/public/file', to: './resource'},//一些固定的文件，如下载文件
    */
    { from: './src/public/img/favicon.ico', to: './' },//网站favicon.ico
];

let copyArr = [];
copyObj.map((data) => {
    copyArr.push(
        new CopyWebpackPlugin([{ from: data.from, to: data.to, ignore: ['.*'] }])
    )
});

/* 拷贝静态资源 */
copyArr.map(function (data) {
    return config.plugins.push(data)
});

module.exports = config;
