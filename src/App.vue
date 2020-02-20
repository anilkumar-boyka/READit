<template>
  <div id="app">
    <Bootstrap />
   <router-view/>
  </div>
</template>

<script>
import Bootstrap from './components/Bootstrap';

export default {
  components:{
    Bootstrap
  },
  name: 'App',
};
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
