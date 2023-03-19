<template>
  <div>
 <router-view/>
</div>
</template>
<script>
import HomeView from '@/views/HomeView.vue';

export default {
  name: 'App',
  components: {
    HomeView,
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 100px;
}

nav {
  padding: 30px;
}
.link {
  font-weight: bold;
  margin: 0 10px;
  text-decoration: none;
  font-size: 20px;
}
</style>
