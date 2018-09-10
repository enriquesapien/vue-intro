<template>
    <div id="user">
        <h3>The User</h3>

        <p>My username is {{ username }}</p>

    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

    name: 'user',
    props: {
        username: String
    }
})
</script>

<style>
#user {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

