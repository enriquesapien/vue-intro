<template>
  <div id="app">
    <app-user username="Enrique"></app-user>
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
