<template>
    <div class="vesselGalery">
        <VesselCard :vesselData="vesselsData[0]"/>
        <VesselCard :vesselData="vesselsData[1]"/>
        <VesselCard :vesselData="vesselsData[2]"/>
        <VesselCard :vesselData="vesselsData[3]"/>
        <VesselCard :vesselData="vesselsData[4]"/>
        <VesselCard :vesselData="vesselsData[5]"/>
        <VesselCard :vesselData="vesselsData[6]"/>
        <VesselCard :vesselData="vesselsData[7]"/>
        <!--<VesselCard v-for="vessel in vesselsData" :key="vessel.id" :vesselData="vessel"/>-->
    </div>
</template>

<script>
import getVesselsData from '../services/api/vesselAPI'
import VesselCard from './vesselCard.vue'

export default {
    name:"VesselGalery",
    components: {
        VesselCard
    },
    data(){
        return{
            vesselsData: []
        }
    },
    created:function(){
        this.retrieveVesselsData()
    },
    methods: {
        async retrieveVesselsData(){
            this.vesselsData = await getVesselsData()
        }
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