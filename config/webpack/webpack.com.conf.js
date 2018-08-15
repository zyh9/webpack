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
        path.resolve(__dirname, "../../app/public/css/"),
    ],
    img:/\.(png|jpg|gif|ttf|eot|woff|woff2|svg)$/,
    // postcss:[
    //     require('precss'),
    //     require('postcss-cssnext'),
    //     require('postcss-px2rem')({
    //         remUnit:'75'
    //     })
    // ]
};
