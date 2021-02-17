import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import titleMixin from "@/mixins/titleMixin";
import router from "@/plugins/router";
import store from "@/plugins/vuex";
import  "@/assets/css/style.css"

Vue.config.productionTip = false
Vue.mixin(titleMixin)
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
