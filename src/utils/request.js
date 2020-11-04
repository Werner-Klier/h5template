/**
 * ajax请求封装
 * created lxc data:2020-10-09
 */
//引入axios和qs
import axios from "axios"
import Qs from "qs"
import store from "../store/index"



//统一请求地址
axios.defaults.baseURL = process.env.VUE_APP_API_URL;
//请求超时 5秒超时
axios.defaults.timeouts = 5000;

//默认不显示加载动画
let loading = false;

axios.defaults.headers['Content-Type'] = 'application/json'




// 请求拦截器
axios.interceptors.request.use(config => {
    if (loading) store.commit("showLoading");
    
    return config;
}, err => {
    return Promise.reject(err);
})

// 响应拦截器
axios.interceptors.response.use(res => {
    store.commit("hideLoading");
    if (res.data.code == 200) {
        return res.data
    } else {
        return Promise.reject(res.data)
    }
}, err => {
    return Promise.reject(err);
})

//暴露
export default {
    get(url, params = {}, isloading = { loading: false }) {
        loading = isloading.loading;
        return axios.get(url, { params })
    },
    post(url, params = {}, isloading = { loading: false }, opt = { json: true }) {
        loading = isloading.loading;
        return axios.post(url, opt.json ? params : Qs.stringify(params))
    }
}

