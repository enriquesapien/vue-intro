import Vue from 'vue'
import App from './App.vue'
// import User from './components/User'

Vue.config.productionTip = false;

// To use globally in the app
// Vue.component('app-user', User);

new Vue({
  render: h => h(App)
}).$mount('#app')
