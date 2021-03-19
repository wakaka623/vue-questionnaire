import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from "vant";
import "vant/lib/index.css";
import http from "./api";
import "@/mock";
Vue.config.productionTip = false;
Vue.prototype.$http = http;
Vue.use(Vant);
new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    document.dispatchEvent(new Event("render-event"));
  }
}).$mount("#app");
