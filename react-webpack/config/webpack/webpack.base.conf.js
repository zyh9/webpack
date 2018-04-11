const entry = require("./webpack.entry.conf");
const newEntry = {};
for (let name in entry) {
    newEntry[name] = entry[name][0]
}
let config = {
    //入口文件
    entry: newEntry,
    resolve: {
        extensions: [".js", ".json", ".jsx", ".css", ".pcss"],
    }
};
module.exports = config;
