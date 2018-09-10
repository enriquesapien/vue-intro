<template>
  <div id="app">
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/blog">Blog</router-link>
      <router-link to="/account">Account</router-link>
    </div>
    <router-view></router-view>
    <!-- <app-user username="Enrique"></app-user> -->

  </div>
</template>

<script>
import User from './components/User.vue'

export default {
  name: 'app',
  components: {
    'app-user': User
  }
}
</script>
