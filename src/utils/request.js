/**
 * ajax请求封装
 * created lxc data:2020-10-09
 */
//引入axios和qs
import axios from "axios"
import Qs from "qs"
import local from "./local";



//统一请求地址
axios.defaults.baseURL = process.env.VUE_APP_API_URL;
//请求超时 5秒超时
axios.defaults.timeouts = 5000;

axios.defaults.headers['Content-Type'] = 'application/json'




// 请求拦截器
axios.interceptors.request.use(config => {
    let token=local.get("token")
    config.headers.token=token;
    return config;
}, err => {
    return Promise.reject(err);
})

// 响应拦截器
axios.interceptors.response.use(res => {
    if(res.status===200){
        return res.data
    }
}, err => {
    return Promise.reject(err);
})

//暴露
export default {
    get(url, params = {}) {
       return axios.get(url, { params})        
    },
    post(url, params = {},opt={json:true}) {
        return axios.post(url, opt.json?params:Qs.stringify(params)) 
    }
}

