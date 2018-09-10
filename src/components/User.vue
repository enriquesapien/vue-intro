<template>
    <div id="user">
        <h3>The User</h3>

        <p>My username is {{ username }}</p>

        <p>{{ someData }}</p>

        <hr>

        <app-info></app-info>

    </div>
</template>

<script>
import Info from './Info.vue'

export default {

    name: 'user',
    props: {
        username: String
    },
    data() {
        return {
            someData: 'This is someData'
        }
    },
    components: {
        'app-info': Info
    }
}
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

