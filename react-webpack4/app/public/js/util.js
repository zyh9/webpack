//地址栏参数获取
const getUrl = _ =>{
    let urlHref = window.location.href;
    let urlObj = {};
    if (urlHref.indexOf('?') !== -1) {
        let getArr = urlHref.split('?')[1].split('&');
        getArr.forEach(e => {
            if (!(e.split('=')[0] in urlObj)) {
                urlObj[e.split('=')[0]] = e.split('=')[1];
            }
        })
        return urlObj;
    } else return 'nodata';
}
//针对hash路由做参数处理
const filter = _ =>{
    let urlObj = getUrl();
    if (urlObj !== 'nodata') {
        for (let e in urlObj) {
            urlObj[e] = urlObj[e].replace(/#\/$/g, '')
        }
        return urlObj;
    } else return 'nodata';
}
//是否是手机号
const isMobile = val => {
    let reg = /^1[3-9][0-9]\d{8}$/;
    return reg.test(val);
}

export default {getUrl,filter,isMobile}
