import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入公用样式
import "@/assets/css/public.less";
//引入样式清空表
import "normalize.css"

// vantui
import { Grid, GridItem,Image } from 'vant';
let RegistCom = {Grid, GridItem,Image};
for (const v in RegistCom) {
  Vue.use(RegistCom[v])
}





//公用按钮组件
import PubButton from "@/components/pubButton.vue"
Vue.component('PubButton', PubButton)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
