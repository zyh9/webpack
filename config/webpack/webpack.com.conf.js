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
        path.resolve(__dirname, "../../src/public/css/"),
    ],
    img:/\.(png|jpe?g|gif|svg)(\?.*)?$/,
    // postcss:[
    //     require('precss'),
    //     require('postcss-cssnext'),
    //     require('postcss-px2rem')({
    //         remUnit:'75'
    //     })
    // ]
};
