<template>
    <div class="showroom">
        <Selection/>
        <VesselGalery/>
    </div>
</template>

<script>
import Selection from './selection.vue'
import VesselGalery from './vesselGalery.vue'




export default {
    name: 'Showroom',
    components:{
        Selection,
        VesselGalery
    }
}
</script>

<style scoped>
.showroom{
    padding: 10%;
    display: grid;
    grid-template-columns: 20% 80%;
}

.vesselCards{
    display: grid;
}
</style>