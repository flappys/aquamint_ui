import axios from "axios"

axios.interceptors.request.use(
    function (config){
        config.headers["content-Type"]="application/json";
        config.headers['Access-Control-Allow-origin']= "*"
        return config;
    },
    function (error){
        return Promise.reject(err)
    }
)

axios.interceptors.response.use(
    function (response){
        return response;
    },
    function(err){
        return Promise.reject(err)
    }
)