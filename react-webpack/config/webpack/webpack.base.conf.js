let config = {
    //入口文件
    entry: {
        'index':'./entryBuild/index.js',
        'shop':'./entryBuild/shop.js'
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".css",".pcss"],
    }
};
module.exports = config;
