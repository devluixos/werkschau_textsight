<template>
  <div id="app">
    <ThreeMap />
  </div>
</template>

<script>
import ThreeMap from './components/ThreeMap.vue';

export default {
  name: 'App',
  components: {
    ThreeMap,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
</style>
