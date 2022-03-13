<template>
    <div class="vesselGalery">
        <!--<VesselCard vesselName="Test" vesselStatus="Status" vesselType="Type" vesselFocus="Focus"/>-->
        <!--<VesselCard 
        v-for="vessel in vesselsData" 
        :key="vessel.id" 
        :vesselName="vessel.name" />-->

        <VesselCard :vesselData="vesselsData[0]"/>

        <!--<p v-for="vessel in vesselsData" :key="vessel.id">he</p>-->
        <!--<p>{{vesselsData[0].name}}</p>-->
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

</style>