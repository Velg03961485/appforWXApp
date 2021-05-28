import Vue from 'vue'
import App from './App.vue'
import router from "./router/index";
import Antd from 'ant-design-vue';
// import MobileDetect from 'mobile-detect';
import "ant-design-vue/dist/antd.css";

import getSystem from '@/config/getSystem'

Vue.config.productionTip = false
Vue.use(Antd);
// Vue.use(MobileDetect);
Vue.use(getSystem);

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
