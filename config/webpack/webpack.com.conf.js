const path = require('path');

module.exports = {
    titleFun:function (chunkName, title) {
        let titleDef = '';
        // if(chunkName.indexOf('index') !==-1){
        //     return titleDef;
        // }else{
        // return title + '_' + titleDef;
        return title;
        // }
    },
    cssInclude : [
        path.resolve(__dirname, "../../src/"),
    ],
    img:/\.(png|jpe?g|gif|svg)(\?.*)?$/,
    // postcss:[
    //     require('precss'),
    //     require('autoprefixer'),
    //     require('postcss-preset-env'),
    //     require('postcss-px2rem')({
    //         remUnit:'75'
    //     })
    // ]
};
