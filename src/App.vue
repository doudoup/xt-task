<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <div class="xt-wrapper">
      <!-- <img src="./assets/logo.png"> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeaderComponent from './components/header.vue'

export default {
  name: 'app',
  components: {
    HeaderComponent
  },
  data() {
    return {
      
    }
  },
  methods: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
