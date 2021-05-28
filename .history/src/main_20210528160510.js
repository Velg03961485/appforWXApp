import Vue from 'vue'
import App from './App.vue'
import router from "./router/index";
import Antd from 'ant-design-vue';
import "ant-design-vue/dist/antd.css";

import systemInfo from '@/config/getSystem'

Vue.config.productionTip = false
Vue.use(Antd);
Vue.use(systemInfo);

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
