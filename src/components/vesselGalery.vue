<template>
    <div class="vesselGalery">
        <!--<VesselCard  :vesselData="vesselsData[0]"/>-->
        <!--<VesselCard  
            :vesselDataName="vesselsData.data[0].name" 
            :vesselDataImg="vesselsData.data[0].media[0].images.background_blur"
            :vesselDataStatus="vesselsData.data[0].production_status"
            :vesselDataType="vesselsData.data[0].type"
            :vesselDataFocus="vesselsData.data[0].focus"
            />-->
        <VesselCard v-for="vessel in vesselsData" :key="vessel.id"  :vesselDataName="vessel.name"/>
        <p v-for="vessel in vesselsData" :key="vessel.id">he</p>
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
    grid-row-gap: 2%;
}
</style>