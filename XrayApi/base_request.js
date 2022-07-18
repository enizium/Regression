const axiosClient = require('axios').default;
const red = "\x1b[31m";
const green = "\x1b[32m"

module.exports.postRequest = async (url, postData, config) => {

    try {
        config.headers.lcid = Date.now().toString(36);
        let apiResponse = await axiosClient.post(url, postData, config);
        logSuccess(apiResponse);
        return apiResponse
    } catch (error) {
        if (error.response && isFailedApiStatus(error.response.status)) {
            logFailure(error);
        }
        throw error;
    }
}

module.exports.getRequest = async (url, config) => {

    try {
        config.headers.lcid = Date.now().toString(36);
        let apiResponse = await axiosClient.get(url, config);
        logSuccess(apiResponse);
        return apiResponse
    } catch (error) {
        if (error.response && isFailedApiStatus(error.response.status)) {
            logFailure(error);
        }
        throw error;
    }
}

function isFailedApiStatus(statusCode) {
    let passStatuses = [200, 204]
    return (!passStatuses.includes(statusCode))
}

function logSuccess(apiResp) {
    var endpoint = apiResp.config.url;
    if (apiResp.config.url.includes("/app/graphql") && apiResp.data.data) {
        endpoint = `${apiResp.config.url} - GQL Function: ${Object.keys(apiResp.data.data)[0]}`;
    }
    console.log(`${green}Status:${apiResp.status} ${apiResp.statusText} - Endpoint: ${endpoint}`);

}
function logFailure(err) {
    var errEndPoint = `${err.response.config.url}`;
    if (err.response.config.url.includes("/app/graphql") && err.data) {
        errEndPoint = (`${err.response.config.url} - GQL Function: ${Object.keys(err.data)[0]}`);
    }
    console.log(`${red}Status:${err.response.status} - ${err.response.statusText} - Endpoint ${errEndPoint}\n        
        Data:${JSON.stringify(err.response.data)}\n  
        Headers:${JSON.stringify(err.response.headers)}\n
        LCID: ${err.config.headers.lcid}`);
}