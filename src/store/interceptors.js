import axios from 'axios';


// axios.defaults.timeout = 300000;




// Add a request interceptor
var axiosInstance = axios.create();

axiosInstance.interceptors.request.use(function(config) {
    var accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcGkuaGRuZnQub25saW5lIiwiYXVkIjoiaHR0cHM6XC9cL3dvdC52biIsImlhdCI6MTY0NDY0MjU2NSwibmJmIjoxNjQ0NjQyNTY0LCJkYXRhIjp7Im5hbWUiOiJsZWhvbmdoYWlibmRjIiwiaWQiOiIxMiJ9fQ.JtXWJj4keag7W-oGU4XldP2GTMLeYama1anCeF8Tq84"
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