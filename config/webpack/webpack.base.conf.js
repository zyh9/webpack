const path = require('path');
const entry = require("./webpack.entry.conf");
const newEntry = {};
for (let name in entry) {
    newEntry[name] = entry[name][0]
}
let config = {
    //入口文件
    entry: newEntry,
    resolve: {
        alias: {//创建模块别名
            $util: path.resolve(__dirname,'../../app/public/js')
        },
        extensions: [".jsx", ".js", ".json", ".css", ".pcss"],//自动解析的扩展
    }
};
module.exports = config;
