<template>
  <div id="app">
    <Header/>
    <Showroom/>
    <Footer/>
  </div>
</template>

<script>
//---Import
import Showroom from './components/showroom.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Showroom,
    Header,
    Footer
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
