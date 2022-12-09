<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HomePage msg="Welcome to Your Vue.js App"/> -->
  <HomePage/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HomePage from './components/HomePage.vue';

export default {
  name: 'App',
  components: {
    HomePage
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


.el-loading-spinner .circular{
 margin-top: 10vh; 
 width: 56px;
 height: 56px;
 border: 11px #004dff double;
 border-left-style: solid;
 border-radius: 50%;
 animation: spinner-aib1d7 0.75s infinite linear;
}
/* .el-loading-spinner{
  width: 100% !important;
  height: 100%;
  background: rgba(1, 1, 1, 0.4);
} */
keyframes spinner-aib1d7 {
 to {
  transform: rotate(360deg);
 }
}
</style>
