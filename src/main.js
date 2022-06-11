import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueNumeric from "vue-numeric";

Vue.use(VueNumeric);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
