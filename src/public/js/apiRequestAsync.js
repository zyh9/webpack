import xmlNative from './xmlNative';
import apiManager from './apiManager';

const ajax = (url, method, data) => {
    return xmlNative({
        method: method,
        url: url,
        data: data
    }, 1);
};

const apiRequestAsync = {
    get: (apiName, data) => ajax(apiManager[apiName], "get", data),
    post: (apiName, data) => ajax(apiManager[apiName], "post", data)
};

export default apiRequestAsync;
