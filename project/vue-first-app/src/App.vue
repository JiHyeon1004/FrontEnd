<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <input type="text" v-model="msg">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <about-view :msg="msg"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import AboutView from './components/AboutView.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    AboutView
  },
  data(){
    return{
      msg: ''
    }
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
</style>
