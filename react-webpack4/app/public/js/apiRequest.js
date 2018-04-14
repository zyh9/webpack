const xmlNative = opt => {
    opt = opt || {};
    opt.method = opt.method.toUpperCase() || 'POST';
    opt.url = opt.url || '';
    opt.async = opt.async || true;
    opt.data = opt.data || null;
    opt.success = opt.success || function () {
    };
    let xmlHttp = new XMLHttpRequest();
    if (opt.method.toUpperCase() === 'POST') {
        xmlHttp.open(opt.method, opt.url, opt.async);
        xmlHttp.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        xmlHttp.send(JSON.stringify(opt.data));
    }
    else if (opt.method.toUpperCase() === 'GET') {
        let params = [];
        for (let key in opt.data) {
            params.push(key + '=' + opt.data[key]);
        }
        let postData = params.join('&');
        xmlHttp.open(opt.method, opt.url + '?' + postData, opt.async);
        xmlHttp.send(null);
    }
    xmlHttp.onreadystatechange = () => {
        if (xmlHttp.readyState === 4) {
            if (xmlHttp.status === 200) {
                opt.success(JSON.parse(xmlHttp.responseText), xmlHttp.status);
            } else {
                opt.error(JSON.parse(xmlHttp.responseText), xmlHttp.status);
            }
        }
    };
};

const ajax = (url, method, data, successCB, errorCB) => {
    return xmlNative({
        method: method,
        url: url,
        data: data,
        success: (data, status) => {
            if (data.code === 0) {
                successCB && successCB(data, status)
            } else {
                if (errorCB) {
                    errorCB(data, status)
                } else {
                    console.log(data, status);
                }
            }
        },
        error: (data, status) => {
            console.log(status, status)
        }
    });
};

const apiRequest = {
    get: (url, data, successCB, errorCB) => {
        return ajax(url, "get", data,
            (data, status, xhr) => successCB && successCB(data.data, data.systemDate),
            errorCB);
    },
    post: (url, data, successCB, errorCB) => {
        return ajax(url, "post", data,
            (data, status, xhr) => successCB && successCB(data.data, data.systemDate),
            errorCB);
    }
};

export default apiRequest;
