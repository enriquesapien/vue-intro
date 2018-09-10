import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Blog from './components/Blog'
import Account from './components/Account'
import User from './components/User'

// enable router to use it
Vue.use(VueRouter);

// setup routing
const routes = [
  { path: '/blog', component: Blog }, 
  { path: '/account', component: Account }, 
  { path: '/', component: User }
];

const router = new VueRouter({
  routes: routes
});

Vue.config.productionTip = false;

new Vue({
  router: router, 
  render: h => h(App)
}).$mount('#app')
