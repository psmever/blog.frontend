import axios from 'axios'
import * as Helper from 'lib/Helper';

// Getting token from local Storage
function getLocalToken() {
    const token = window.localStorage.getItem('token')
    return token
}

function refreshToken() {
    // Instance is the axios instance created in current request.js
    console.debug('refreshToken');
    // return instance.post('/api/v1/auth/token-refresh', { 'refresh_token': Helper.getRefreshToken() }).then(res => res.data)
    return instance.post('/api/v1/auth/token-refresh', { 'refresh_token': Helper.getRefreshToken() }).then(function(e) {
        console.debug(e);
    })
}

// Create an axios instance
export const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 300000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        "Request-Client-Type": "S01010",
        "Accept": "application/json",
        "Authorization": 'Bearer ' + Helper.getAccessToken()
    }
})


// Add a setToken method to the instance to dynamically add the latest token to the header after login, and save the token in the local Storage
instance.setToken = (token) => {
    instance.defaults.headers['Authorization'] = 'Bearer ' + token

}

// Is the marker being refreshed?
let isRefreshing = false
// Retry queue, each item will be a function to be executed
let requests = []

instance.interceptors.response.use(null, error => {
    // console.debug({error: error.response.status});
    // console.debug(error.response.status);
    // console.debug(error.response.config);

    if(error.response.status === 401) {

        const config = error.response.config




        if (!isRefreshing) {
            isRefreshing = true
            console.debug(0);
            return refreshToken().then(res => {
                console.debug(1);
                console.debug({refreshToken:res});
                const { access_token } = res.data
                instance.setToken(access_token)
                // token has been refreshed to retry requests from all queues
                requests.forEach(cb => cb(access_token))
                requests = []
                return instance(config)
            }).catch(res => {
                console.debug(2);
                console.error('refreshtoken error =>', res)
                // window.location.href = '/'
            }).finally(() => {
                console.debug(3);
                isRefreshing = false
            })
        } else {
            // token is being refreshed and a promise that resolve has not been executed is returned
            return new Promise((resolve) => {
                // Put resolve in the queue, save it in a function form, and execute it directly after token refreshes
                requests.push((token) => {
                    console.debug(token);
                    // config.baseURL = ''
                    config.headers['Authorization'] = 'Bearer ' + token
                    resolve(instance(config))
                })
            })
        }
    }
    return Promise.reject(error)
})

export default instance