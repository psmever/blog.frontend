import axios from 'axios';

const shouldIntercept = (error) => {
    try {
        return error.response.status === 401
    } catch (e) {
        return false;
    }
};

const setTokenData = (tokenData = {}, axiosClient) => {
    // If necessary: save to storage
    //   tokenData's content includes data from handleTokenRefresh(): {
    //     idToken: data.auth_token,
    //     refreshToken: data.refresh_token,
    //     expiresAt: data.expires_in,
    // };
};

const handleTokenRefresh = () => {
    const refreshToken = window.localStorage.getItem('refreshToken');
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:8000/auth/refresh', { refreshToken })
            .then(({data}) => {
                const tokenData = {
                    idToken: data.auth_token,
                    refreshToken: data.refresh_token,
                    expiresAt: data.expires_at,
                };
                resolve(tokenData);
            })
            .catch((err) => {
                reject(err);
            })
    });
};

const attachTokenToRequest = (request, token) => {
    request.headers['Authorization'] = 'Bearer ' + token;

    // If there is an edge case where access token is also set in request query,
    // this is also a nice place to add it
    // Example: /orders?token=xyz-old-token
    if (/\/orders/.test(request.url)) {
        request.params.token = token;
    }
};

export default (axiosClient, customOptions = {}) => {
    let isRefreshing = false;
    let failedQueue = [];

    const options = {
        attachTokenToRequest,
        handleTokenRefresh,
        setTokenData,
        shouldIntercept,
        ...customOptions,
    };
    const processQueue = (error, token = null) => {
        failedQueue.forEach(prom => {
            if (error) {
                prom.reject(error);
            } else {
                prom.resolve(token);
            }
        });

        failedQueue = [];
    };

    const interceptor = (error) => {
        if (!options.shouldIntercept(error)) {
            return Promise.reject(error);
        }

        if (error.config._retry || error.config._queued) {
            return Promise.reject(error);
        }

        const originalRequest = error.config;
        if (isRefreshing) {
            return new Promise(function (resolve, reject) {
                failedQueue.push({resolve, reject})
            }).then(token => {
                originalRequest._queued = true;
                options.attachTokenToRequest(originalRequest, token);
                return axiosClient.request(originalRequest);
            }).catch(err => {
                return Promise.reject(error); // Ignore refresh token request's "err" and return actual "error" for the original request
            })
        }

        originalRequest._retry = true;
        isRefreshing = true;
        return new Promise((resolve, reject) => {
            options.handleTokenRefresh.call(options.handleTokenRefresh)
                .then((tokenData) => {
                    options.setTokenData(tokenData, axiosClient);
                    options.attachTokenToRequest(originalRequest, tokenData.idToken);
                    processQueue(null, tokenData.idToken);
                    resolve(axiosClient.request(originalRequest));
                })
                .catch((err) => {
                    processQueue(err, null);
                    reject(err);
                })
                .finally(() => {
                    isRefreshing = false;
                })
        });
    };

    axiosClient.interceptors.response.use(undefined, interceptor);
};