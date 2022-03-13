<template>
  <div id="app">
    <!--<VesselCard vesselName="Test" vesselStatus="Status" vesselType="Type" vesselFocus="Focus"/>-->
    <!--<Selection/>-->
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
