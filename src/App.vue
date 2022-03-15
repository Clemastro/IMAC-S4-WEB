<template>
  <div id="app">
    <Showroom/>
  </div>
</template>

<script>
//---Import
import Showroom from './components/showroom.vue'

export default {
  name: 'App',
  components: {
    Showroom,
  }
}
</script>

<style>
#app {
  background: #131A21;
}

body{
  margin: 0%;
}
</style>
