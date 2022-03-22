<template>
    <div class="vesselGalery">
        <VesselCard v-for="vessel in vesselsData" 
            :key="vessel.id"  
            :vesselDataName="vessel.name"
            :vesselDataImg="vessel.media[0].images.background_blur"
            :vesselDataStatus="vessel.production_status"
            :vesselDataType="vessel.type"
            :vesselDataFocus="vessel.focus"
            />
    </div>
</template>

<script>
import VesselCard from './vesselCard.vue'

export default {
    name:"VesselGalery",
    components: {
        VesselCard
    },
    props:{
        vesselsData : Array
    }
}
</script>

<style scoped>
.vesselGalery{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 2%;
    grid-row-gap: 10px;
}
</style>