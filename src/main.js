// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import ElementUI from "element-ui";
import "./assets/index.css";
import "whatwg-fetch";
import Promise from "promise-polyfill";

// To add to window
if (!window.Promise) {
  window.Promise = Promise;
}
// import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  template: "<App/>",
  components: { App }
});
