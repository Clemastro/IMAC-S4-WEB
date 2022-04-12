<template>
    <div class="showroom">
        <Selection :vesselsData="vesselsData"/>
        <VesselGalery :vesselsData="vesselsData"/>
    </div>
</template>

<script>
import Selection from './selection.vue'
import VesselGalery from './vesselGalery.vue'
import getVesselsData from '../services/api/vesselAPI.js'




export default {
    name: 'Showroom',
    components:{
        Selection,
        VesselGalery
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
.showroom{
    padding: 10%;
    display: grid;
    grid-template-columns: 20% 80%;
    position: relative;
}
</style>