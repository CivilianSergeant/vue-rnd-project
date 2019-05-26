<template>
  <div id="app">
    <transition name="slide">
      <router-view></router-view>  
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  height: 95.5%;
  /* margin-top: 60px; */
}
html,body{
  height: 100%;
}
body{
  margin:0px;padding:0px;
  background-color:#e0e9f7;
}
</style>
