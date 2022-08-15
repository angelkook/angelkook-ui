import Vue from 'vue'
import App from './App.vue'

import 'angelwork-ui/dist/css/demo.css';
import { Demo } from "angelwork-ui";
Vue.use(Demo);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
