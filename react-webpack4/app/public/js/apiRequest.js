import xmlNative from './xmlNative';
import apiManager from './apiManager';

const ajax = (url, method, data, successCB, errorCB) => {
    return xmlNative({
        method: method,
        url: url,
        data: data,
        success: (data, status) => {
            if (data.status) {
                successCB && successCB(data, status)
            } else {
                errorCB ? errorCB(data, status) : console.log(data, status)
            }
        },
        error: (data, status) => console.log(data, status)
    });
};

const apiRequest = {
    get: (apiName, data, successCB, errorCB) => ajax(apiManager[apiName], "get", data,
        data => successCB && successCB(data, data.systemDate),
        errorCB),
    post: (apiName, data, successCB, errorCB) => ajax(apiManager[apiName], "post", data,
        data => successCB && successCB(data, data.systemDate),
        errorCB)
};

export default apiRequest;
