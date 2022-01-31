import axios from 'axios';


// axios.defaults.timeout = 300000;




// Add a request interceptor
var axiosInstance = axios.create();

axiosInstance.defaults.headers.common['Authorization'] = localStorage.getItem('token');
axiosInstance.interceptors.request.use(function(config) {
    var accessToken = localStorage.getItem('token');
    config.headers.Authorization = `Bearer ` + accessToken;
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    return config;
}, function(error) {
    return error.response;
});

axiosInstance.interceptors.response.use(function(response) {
    return response;
}, function(error) {
    return error.response; // Promise.reject(error);
});

export default axiosInstance;