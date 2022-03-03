<template>
  <div id="app">
    <!--<VesselCard vesselName="Test" vesselStatus="Status" vesselType="Type" vesselFocus="Focus"/>-->
    <!--<Selection/>-->
    <Showroom/>
  </div>
</template>

<script>
//---Import
import getVesselsData from './services/api/vesselAPI.js'
//import Selection from './components/selection.vue'
//import VesselCard from './components/vesselCard.vue'
import Showroom from './components/showroom.vue'

//---Get API info
const vesselsData = getVesselsData()
console.log(vesselsData)

export default {
  name: 'App',
  components: {
    //VesselCard,
    //Selection,
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
