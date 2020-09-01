import axios from 'axios';

let isRefreshing = false;
let failedQueue = [];

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

axios.interceptors.response.use(response => response, error => {
    const originalRequest = error.config;
    if (error.response.status === 400) {
        // If response is 400, logout
        // store.dispatch(logout());
    }
    // If 401 and I'm not processing a queue
    if (error.response.status === 401 && !originalRequest._retry) {
        if (isRefreshing) {
            // If I'm refreshing the token I send request to a queue
            return new Promise((resolve, reject) => {
                failedQueue.push({ resolve, reject });
            })
                .then(() => {
                    originalRequest.headers.Authorization = getAuth();
                    return axios(originalRequest);
                })
                .catch(err => err);
        }
        // If header of the request has changed, it means I've refreshed the token
        if (originalRequest.headers.Authorization !== getAuth()) {
            originalRequest.headers.Authorization = getAuth();
            return Promise.resolve(axios(originalRequest));
        }

        originalRequest._retry = true; // mark request a retry
        isRefreshing = true; // set the refreshing var to true

        // If none of the above, refresh the token and process the queue
        return new Promise((resolve, reject) => {
            // console.log('REFRESH');
            refreshAccessToken() // The method that refreshes my token
                .then(({ data }) => {
                    updateToken(data); // The method that sets my token to localstorage/Redux/whatever
                    processQueue(null, data.token); // Resolve queued
                    resolve(axios(originalRequest)); // Resolve current
                })
                .catch(err => {
                    processQueue(err, null);
                    reject(err);
                })
                .then(() => {
                    isRefreshing = false;
                });
        });
    }

    return Promise.reject(error);
},
);