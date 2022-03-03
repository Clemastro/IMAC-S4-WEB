<template>
  <div id="app">
    <VesselCard vesselName="Test"/>
  </div>
</template>

<script>
import getVesselsData from './services/api/vesselAPI.js'
import VesselCard from './components/vesselCard.vue'

getVesselsData()

export default {
  name: 'App',
  components: {
    VesselCard,
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
