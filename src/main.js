import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入公用样式
import "@/assets/css/public.less";
//引入样式清空表
import "normalize.css"
import "reset-css"

// vantui
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

// 集中管理api
import api from "@/api/index.js";
Vue.use(api);

import moment from "moment"
Vue.prototype.formatDate = (time) => moment(time).format('MM-DD HH:mm')
Vue.prototype.formatTime = (time) => moment(time).format('HH:mm:ss')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
